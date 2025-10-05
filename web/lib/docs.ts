import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import GithubSlugger from "github-slugger";

const postsDirectory = path.join(process.cwd(), "../_brag_docs/docs");

// Company name normalization and display mapping
const COMPANY_DISPLAY_NAMES: Record<string, string> = {
  coalitioninc: "Coalition Inc",
  capitalone: "Capital One",
};

function normalizeCompanyName(name: string): string {
  return name.toLowerCase().replace(/[\s_-]/g, "");
}

function getDisplayName(normalizedName: string): string {
  return COMPANY_DISPLAY_NAMES[normalizedName] || normalizedName;
}

export interface Heading {
  id: string;
  title: string;
  level: number;
  company?: string;
  companyDisplay?: string;
}

export interface CompanySection {
  company: string;
  companyDisplay: string;
  startLine: number;
  endLine: number;
}

function generateSlug(text: string): string {
  const slugger = new GithubSlugger();
  return slugger.slug(text);
}

function extractCompanySections(content: string): CompanySection[] {
  const sections: CompanySection[] = [];
  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/<!--\s*company:\s*(.+?)\s*-->/i);
    if (match) {
      const rawCompany = match[1].trim();
      const company = normalizeCompanyName(rawCompany);
      const companyDisplay = getDisplayName(company);
      
      // Find the next company tag or end of file
      let endLine = lines.length - 1;
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].match(/<!--\s*company:/i)) {
          endLine = j - 1;
          break;
        }
      }
      sections.push({ company, companyDisplay, startLine: i, endLine });
    }
  }

  return sections;
}

function getCompanyForLine(lineNumber: number, sections: CompanySection[]): string | undefined {
  for (const section of sections) {
    if (lineNumber >= section.startLine && lineNumber <= section.endLine) {
      return section.company;
    }
  }
  return undefined;
}

function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const lines = content.split("\n");
  const slugger = new GithubSlugger();
  const companySections = extractCompanySections(content);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      let title = match[2].trim();

      // Clean up markdown formatting from the title
      title = title
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/\*(.*?)\*/g, "$1")
        .replace(/`(.*?)`/g, "$1")
        .replace(/\[(.*?)\]\(.*?\)/g, "$1")
        .trim();

      const id = slugger.slug(title);
      const company = getCompanyForLine(i, companySections);
      
      // Only include company if it exists (to avoid undefined serialization issues)
      const heading: Heading = { id, title, level };
      if (company) {
        heading.company = company;
        // Find the display name
        const section = companySections.find(s => s.company === company);
        if (section) {
          heading.companyDisplay = section.companyDisplay;
        }
      }
      
      headings.push(heading);
    }
  }

  return headings;
}

function processContentWithCompanyTags(content: string, filterCompany?: string): string {
  const lines = content.split("\n");
  const companySections = extractCompanySections(content);
  const result: string[] = [];
  let currentCompany: string | undefined;
  
  // Normalize the filter company name if provided
  const normalizedFilter = filterCompany ? normalizeCompanyName(filterCompany) : undefined;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const companyMatch = line.match(/<!--\s*company:\s*(.+?)\s*-->/i);

    if (companyMatch) {
      // Close previous company section if exists
      if (currentCompany) {
        result.push('</div>');
      }
      
      const rawCompany = companyMatch[1].trim();
      currentCompany = normalizeCompanyName(rawCompany);
      
      // Don't include the comment in output, but add a wrapper div
      result.push(`<div class="company-section" data-company="${currentCompany}">`);
      continue;
    }

    // Get the company for this line
    const lineCompany = getCompanyForLine(i, companySections);
    
    // If filtering is active
    if (normalizedFilter) {
      // Show line if: no company tag (shared content) OR company matches filter
      if (!lineCompany || lineCompany === normalizedFilter) {
        result.push(line);
      }
    } else {
      // No filter - show everything
      result.push(line);
    }
  }

  // Close any open div
  if (currentCompany) {
    result.push('</div>');
  }

  return result.join("\n");
}

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter(
      (fileName) =>
        fileName.endsWith(".md") &&
        fileName.startsWith("brag_doc_") &&
        !fileName.includes("template")
    )
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        id,
        ...(matterResult.data as { date: string; title: string }),
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string, filterCompany?: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // Extract headings before processing (with company info)
  const allHeadings = extractHeadings(matterResult.content);
  
  // Normalize filter if provided
  const normalizedFilter = filterCompany ? normalizeCompanyName(filterCompany) : undefined;
  
  // Filter headings based on company if specified
  const headings = normalizedFilter
    ? allHeadings.filter(
        (h) =>
          !h.company ||
          h.company === normalizedFilter
      )
    : allHeadings;

  // Process content with company filtering
  const filteredContent = processContentWithCompanyTags(
    matterResult.content,
    filterCompany
  );

  // Process markdown content with proper remark/rehype pipeline
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(filteredContent);

  const contentHtml = processedContent.toString();

  // Extract unique companies with their display names
  const companyMap = new Map<string, string>();
  allHeadings.forEach((h) => {
    if (h.company && h.companyDisplay) {
      companyMap.set(h.company, h.companyDisplay);
    }
  });
  
  const companies = Array.from(companyMap.entries()).map(([normalized, display]) => ({
    normalized,
    display,
  }));

  return {
    id,
    contentHtml,
    headings,
    companies,
    ...(matterResult.data as { date: string; title: string }),
  };
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter(
      (fileName) =>
        fileName.endsWith(".md") &&
        fileName.startsWith("brag_doc_") &&
        !fileName.includes("template")
    )
    .map((fileName) => {
      return {
        params: {
          year: fileName.replace(/\.md$/, "").replace("brag_doc_", ""),
        },
      };
    });
}
