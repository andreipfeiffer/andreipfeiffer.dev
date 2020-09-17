import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import useDarkMode from "use-dark-mode";

import Layout from "../../components/layout";
import Date from "../../components/date";
import { Article, getAllPostIds, getPostData } from "../../lib/posts";
// import styles from "./blog.module.css";

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
        <header>
          <h1>{article.title}</h1>
          <small>
            Posted on <Date dateString={article.date} />
          </small>
          <br />
          <small>Reading time {Math.ceil(article.minutes)} minutes</small>
        </header>
        <br />
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        <br />
        {renderTags(article.tags)}
      </article>
    </Layout>
  );

  function renderTags(tags: string[]) {
    if (tags.length === 0) {
      return null;
    }

    const tags_list = tags.map((tag) => (
      <Link key={tag} href="/tag/[tag]" as={`/tag/${encodeURIComponent(tag)}`}>
        <a>{tag}</a>
      </Link>
    ));

    return (
      <>
        <strong>Tags</strong>:
        <ul>
          {tags_list.map((tag, i) => (
            <li key={tags[i]}>{tag}</li>
          ))}
        </ul>
      </>
    );
  }
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
