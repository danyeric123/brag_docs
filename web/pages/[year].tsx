import { getPostData, getAllPostIds, Heading } from "@/lib/docs";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TableOfContents from "@/components/TableOfContents";

interface PostData {
  title: string;
  date: string;
  contentHtml: string;
  headings: Heading[];
  companies: Array<{ normalized: string; display: string }>;
}

export default function Post({ postData }: { postData: PostData }) {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState<PostData>(postData);
  const [isLoading, setIsLoading] = useState(false);
  const companyFilter = router.query.company as string | undefined;

  // Normalize company names for comparison
  const normalizeCompanyName = (name: string): string => {
    return name.toLowerCase().replace(/[\s_-]/g, "");
  };

  useEffect(() => {
    if (!router.isReady) return;

    if (companyFilter) {
      setIsLoading(true);
      const normalizedFilter = normalizeCompanyName(companyFilter);
      
      // Filter content client-side
      const parser = new DOMParser();
      const doc = parser.parseFromString(postData.contentHtml, "text/html");
      const companySections = doc.querySelectorAll(".company-section");

      companySections.forEach((section) => {
        const sectionCompany = section.getAttribute("data-company");
        if (
          sectionCompany &&
          normalizeCompanyName(sectionCompany) !== normalizedFilter
        ) {
          section.remove();
        }
      });

      const filteredHeadings = postData.headings.filter(
        (h) =>
          !h.company ||
          normalizeCompanyName(h.company) === normalizedFilter
      );

      setFilteredData({
        ...postData,
        contentHtml: doc.body.innerHTML,
        headings: filteredHeadings,
      });
      setIsLoading(false);
    } else {
      setFilteredData(postData);
    }
  }, [companyFilter, router.isReady, postData]);

  const toggleCompanyFilter = (normalizedCompany: string) => {
    if (companyFilter && normalizeCompanyName(companyFilter) === normalizedCompany) {
      // Remove filter
      router.push(`/${router.query.year}`, undefined, { shallow: true });
    } else {
      // Apply filter
      router.push(`/${router.query.year}?company=${normalizedCompany}`, undefined, {
        shallow: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to home
          </Link>
        </nav>

        {/* Company Filter Pills */}
        {postData.companies.length > 0 && (
          <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Filter by company:
              </span>
              <button
                onClick={() =>
                  router.push(`/${router.query.year}`, undefined, {
                    shallow: true,
                  })
                }
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  !companyFilter
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                All
              </button>
              {postData.companies.map((company) => (
                <button
                  key={company.normalized}
                  onClick={() => toggleCompanyFilter(company.normalized)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    companyFilter && normalizeCompanyName(companyFilter) === company.normalized
                      ? "bg-blue-600 text-white dark:bg-blue-500"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {company.display}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Table of Contents - Show at top on small screens */}
        <div className="lg:hidden mb-8">
          <TableOfContents headings={filteredData.headings} />
        </div>

        <div className="flex gap-8">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {isLoading ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center transition-colors duration-300">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
                <article
                  className="prose prose-gray dark:prose-invert prose-lg max-w-none p-8 
                                   prose-headings:text-gray-900 dark:prose-headings:text-white
                                   prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-8 
                                   prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-6 
                                   prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 
                                   prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed 
                                   prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold 
                                   prose-ul:my-6 prose-li:my-2 
                                   prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline 
                                   prose-code:text-pink-600 dark:prose-code:text-pink-400 
                                   prose-code:bg-pink-50 dark:prose-code:bg-gray-700 
                                   prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: filteredData.contentHtml }}
                  />
                </article>
              </div>
            )}
          </div>

          {/* Table of Contents Sidebar - Desktop only */}
          <div className="hidden lg:block w-80 shrink-0">
            <TableOfContents headings={filteredData.headings} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ postData: PostData }> = async ({
  params,
}) => {
  if (!params || !params.year) {
    return {
      notFound: true,
    };
  }
  const postData = await getPostData(`brag_doc_${params.year}`);
  return {
    props: {
      postData,
    },
  };
};
