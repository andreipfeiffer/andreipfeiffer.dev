import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData, ArticlePreview } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

type Props = {
  articles: ArticlePreview[];
};

export default function Blog(props: Props) {
  const { articles } = props;

  return (
    <Layout>
      <Head>
        <title>Blog: {siteTitle}</title>
      </Head>

      <h2>Blog</h2>
      <ul>
        {articles.map(({ id, date, title, category }) => (
          <li key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>{" "}
            {category && <small>[{category}]</small>}
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = getSortedPostsData();
  return {
    props: {
      articles,
    },
  };
};
