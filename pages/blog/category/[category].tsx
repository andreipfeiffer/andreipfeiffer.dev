import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../../../components/layout";
import {
  getPostsByCategory,
  CATEGORIES,
  Post,
  Category,
} from "../../../lib/blog";
// import styles from "./post.module.css";

type Props = {
  posts: Post[];
};

export default function PostsByTag(props: Props) {
  const router = useRouter();
  const { category } = router.query;
  const { posts: articles } = props;

  const _category = String(category) || "";

  return (
    <Layout>
      <Head>
        <title>{capitalize(_category)} related articles</title>
      </Head>

      <h1>{capitalize(_category)} related articles</h1>

      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/blog/${article.id}`}>
              <a>{article.meta.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CATEGORIES.map((category) => ({
    // "params" key is required
    // "tag" key must match the [tag] slug name
    params: { category: category.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getPostsByCategory(params?.category as Category);
  return {
    props: {
      posts,
    },
  };
};

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
