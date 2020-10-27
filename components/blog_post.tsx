import Head from "next/head";
import Link from "next/link";
import useDarkMode from "use-dark-mode";
import readingTime from "reading-time";

import Layout from "./layout";
import FormattedDate from "./date";
import { Metadata } from "../lib/blog";
// import styles from "./BlogPost.module.css";

type Props = {
  meta: Metadata;
  children: React.ReactElement;
};

export default function BlogPost(props: Props) {
  const { children, meta } = props;

  // not very acccurate, but good enough
  const readTime = readingTime(getReactNodeText(children));

  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? "atom-one-light" : "atom-one-dark";

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <link
          rel="stylesheet"
          // this could be included only when needed, like pass a boolean to <BlogPost />
          href={`https://highlightjs.org/static/demo/styles/${theme}.css`}
        />
      </Head>

      <article>
        <header>
          <h1>{meta.title}</h1>
          <small>
            Posted on <FormattedDate date={meta.date} />
          </small>
          <br />
          <small>{readTime.text}</small>
        </header>
        <br />
        <div>{children}</div>
        <br />
        {renderTags(meta.tags)}
      </article>
    </Layout>
  );

  function renderTags(tags: string[]) {
    if (!tags || tags.length === 0) {
      return null;
    }

    const tags_list = tags.map((tag) => (
      <Link key={tag} href={`/blog-tag/${encodeURIComponent(tag)}`}>
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

function getReactNodeText(node: React.ReactElement): string {
  if (node instanceof Array) return node.map(getReactNodeText).join("");
  if (typeof node === "object" && node)
    return getReactNodeText(node.props.children);
  if (["string", "number"].includes(typeof node)) return String(node);
  return "";
}
