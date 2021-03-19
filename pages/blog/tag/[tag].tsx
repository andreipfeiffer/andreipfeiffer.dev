import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Layout } from "../../../components/layout";
import { getPostsByTag, getAllTags, Post } from "../../../lib/blog";
// import styles from "./post.module.css";

type Props = {
  posts: Post[];
};

export default function PostsByTag(props: Props) {
  const router = useRouter();
  const { tag } = router.query;
  const { posts: articles } = props;

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
              <a>{article.meta.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();

  const paths = tags.map((tag) => ({
    // "params" key is required
    // "tag" key must match the [tag] slug name
    params: { tag: encodeURI(tag).toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getPostsByTag(params?.tag as string);
  return {
    props: {
      posts,
    },
  };
};
