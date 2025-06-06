import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import GithubSlugger from 'github-slugger';

const postsDirectory = path.join(process.cwd(), '../_brag_docs/docs');

export interface Heading {
  id: string;
  title: string;
  level: number;
}

function generateSlug(text: string): string {
  const slugger = new GithubSlugger();
  return slugger.slug(text);
}

function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const lines = content.split('\n');
  const slugger = new GithubSlugger(); // Create a single slugger instance to handle duplicates
  
  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      let title = match[2].trim();
      
      // Clean up markdown formatting from the title
      title = title
        .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting **text**
        .replace(/\*(.*?)\*/g, '$1')     // Remove italic formatting *text*
        .replace(/`(.*?)`/g, '$1')       // Remove code formatting `text`
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links [text](url) -> text
        .trim();
      
      const id = slugger.slug(title); // Use the same slugger instance for consistency
      headings.push({ id, title, level });
    }
  }
  
  return headings;
}

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md') && fileName.startsWith('brag_doc_') && !fileName.includes('template'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
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

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  // Extract headings before processing
  const headings = extractHeadings(matterResult.content);
  
  // Process markdown content with proper remark/rehype pipeline
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(matterResult.content);
  
  const contentHtml = processedContent.toString();
  
  return {
    id,
    contentHtml,
    headings,
    ...(matterResult.data as { date: string; title: string }),
  };
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md') && fileName.startsWith('brag_doc_') && !fileName.includes('template'))
    .map((fileName) => {
      return {
        params: {
          year: fileName.replace(/\.md$/, '').replace('brag_doc_', ''),
        },
      };
    });
} 