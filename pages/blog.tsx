import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getAllPosts, Post } from "../lib/blog";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

type Props = {
  posts: Post[];
};

export default function Blog(props: Props) {
  const { posts } = props;

  console.log({ posts });

  return (
    <Layout>
      <Head>
        <title>Blog: {siteTitle}</title>
      </Head>

      <h2>Blog</h2>
      <ul>
        {posts.map(({ id, meta }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>
              <a>{meta.title}</a>
            </Link>{" "}
            {meta.category && <small>[{meta.category}]</small>}
            <br />
            <small>
              <Date dateString={meta.date} />
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};
