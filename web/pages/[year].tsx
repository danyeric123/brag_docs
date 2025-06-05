import { getPostData, getAllPostIds } from '../../lib/docs';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Back to home
        </Link>
      </nav>
      <article className="prose lg:prose-xl max-w-none">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
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