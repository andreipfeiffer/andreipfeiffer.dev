import Layout from "../../components/layout";
import { Article, getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import useDarkMode from "use-dark-mode";
// import styles from "./post.module.css";

type Props = {
  article: Article;
};

export default function Post(props: Props) {
  const { article } = props;

  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? "atom-one-light" : "atom-one-dark";

  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
        <link
          rel="stylesheet"
          href={`https://highlightjs.org/static/demo/styles/${theme}.css`}
        />
      </Head>

      <article>
        <h1>{article.title}</h1>
        Posted on <Date dateString={article.date} />
        <br />
        Reading time {Math.ceil(article.minutes)} minutes
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        <br />
        {article.tags.length > 0 && `Tags: ${article.tags.join(", ")}`}
      </article>
    </Layout>
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
  const article = await getPostData(params?.id as string);
  return {
    props: {
      article,
    },
  };
};
