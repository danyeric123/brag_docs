import Link from "next/link";
import { getSortedPostsData } from "@/lib/docs";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    id: string;
    date: string;
    title: string;
  }[];
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            My Brag Documents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            A curated collection of my professional accomplishments, projects,
            and learnings over the years.
          </p>
        </header>

        <main>
          <div className="grid gap-6 max-w-2xl mx-auto">
            {allPostsData.length > 0 ? (
              allPostsData.map(({ id, title }) => {
                const year = id.replace("brag_doc_", "");
                return (
                  <Link href={`/${year}`} key={id} className="group block">
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md dark:hover:shadow-xl transition-all duration-200 p-6 hover:border-blue-300 dark:hover:border-blue-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {year} Brag Document
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">
                            Accomplishments and projects from {year}
                          </p>
                        </div>
                        <div className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 dark:text-gray-500 mb-4 transition-colors duration-300">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
                  No brag documents found.
                </p>
              </div>
            )}
          </div>
        </main>

        <footer className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
            Built with Next.js and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
