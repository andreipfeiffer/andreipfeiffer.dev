import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import useDarkMode from "use-dark-mode";
import readingTime from "reading-time";

import { Layout } from "../layout";
import { Text } from "../text";
import FormattedDate from "../date";
import { Metadata } from "../../lib/blog";
import { Spacer } from "../spacer";
import { useBreakpoint } from "../layout/useBreakpoint";

import styles from "./blog_post.module.scss";
import { useEffect } from "react";

type Props = {
  meta: Metadata;
  children: React.ReactElement;
};

const WEB_URL = "https://andreipfeiffer.dev";

export default function BlogPost(props: Props) {
  const { children, meta } = props;
  const router = useRouter();
  const { breakpoint } = useBreakpoint();

  // not very acccurate, but good enough
  const readTime = readingTime(getReactNodeText(children));

  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? "dark" : "light";

  // copy url to clipboard when clicking headings link icon
  useEffect(() => {
    document.querySelectorAll(".headinglink").forEach((span) => {
      span.addEventListener("click", () => {
        setTimeout(() => {
          copyToClipboard(window.location.href);
        }, 100);
      });
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <link rel="stylesheet" href={`/highlight.css`} />
        <link rel="stylesheet" href={`/highlight-${theme}.css`} />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap"
          rel="stylesheet"
        ></link>

        <meta property="og:title" content={meta.title} />
        <meta property="og:site_name" content="andreipfeiffer.dev" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${WEB_URL}${router.pathname}`} />
        <meta property="og:article:published_time" content={meta.date} />
        <meta property="og:article:author" content="Andrei Pfeiffer" />
        <meta property="og:article:section" content={meta.category} />
        <meta property="og:article:tag" content={meta.tags.join(",")} />
        {!!meta.cover && (
          <meta property="og:image" content={`${WEB_URL}${meta.cover}`} />
        )}
        <meta property="twitter:creator" content="@pfeiffer_andrei" />
      </Head>

      {breakpoint && <Spacer vertical="100" />}

      <article className={styles.post}>
        <header>
          <Text as="h1" size="h01">
            {meta.title}
          </Text>

          <Spacer vertical="60" />

          <Text size="m01" color="muted" display="block">
            <FormattedDate date={meta.date} />
          </Text>
          <Text size="h06">{readTime.text}</Text>
        </header>

        <Spacer vertical="140" />

        {children}

        <br />

        <Tags tags={meta.tags} />
      </article>
    </Layout>
  );
}

function Tags({ tags }: { tags: string[] }) {
  if (!tags || tags.length === 0) {
    return null;
  }

  const tags_list = tags.map((tag) => (
    <Link key={tag} href={`/blog/tag/${encodeURI(tag.toLowerCase())}`}>
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

function getReactNodeText(node: React.ReactElement): string {
  if (node instanceof Array) return node.map(getReactNodeText).join("");

  if (typeof node === "object" && node)
    return getReactNodeText(node.props.children);

  if (["string", "number"].includes(typeof node)) return String(node);

  return "";
}

function copyToClipboard(text: string) {
  const input = document.body.appendChild(document.createElement("input"));
  input.value = text;
  input.select();
  document.execCommand("copy");
  input.parentNode?.removeChild(input);
  console.log({ text });
}
