import Link from 'next/link';
import { getSortedPostsData } from '@/lib/docs';
import { GetStaticProps } from 'next';

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
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">My Brag Documents</h1>
        <p className="text-xl text-gray-600">
          A collection of my accomplishments, projects, and learnings.
        </p>
      </header>
      <main>
        <div className="grid gap-8 max-w-2xl mx-auto">
          {allPostsData.map(({ id, title }) => {
            const year = id.replace('brag_doc_', '');
            return (
              <Link
                href={`/${year}`}
                key={id}
                className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 transition-colors"
              >
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  {year} Brag Document
                </h2>
              </Link>
            );
          })}
        </div>
      </main>
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