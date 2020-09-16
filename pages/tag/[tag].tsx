import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import { ArticlePreview, getArticlesByTag, getAllTags } from "../../lib/posts";
// import styles from "./post.module.css";

type Props = {
  articles: ArticlePreview[];
};

export default function Post(props: Props) {
  const router = useRouter();
  const { tag } = router.query;
  const { articles } = props;

  return (
    <Layout>
      <Head>
        <title>Articles containing {tag} tag</title>
      </Head>

      <h1>Articles containing "{tag}" tag</h1>

      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/blog/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllTags();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articles = getArticlesByTag(params?.tag as string);
  return {
    props: {
      articles,
    },
  };
};
