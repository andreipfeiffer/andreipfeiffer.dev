import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData, ArticlePreview } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

type Props = {
  articles: ArticlePreview[];
};

export default function Home(props: Props) {
  const { articles } = props;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section>
        <h2>Blog</h2>
        <ul>
          {articles.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
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
