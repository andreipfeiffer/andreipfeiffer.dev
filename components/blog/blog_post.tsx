import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import useDarkMode from "use-dark-mode";
import readingTime from "reading-time";

import { Layout } from "../layout";
import { Text } from "../text";
import { FormattedDate } from "../date";
import { Spacer } from "../spacer";
import { Tag } from "./tag";
import { useBreakpoint } from "../layout/useBreakpoint";
import { Metadata, Tag as TagType, TAGS } from "../../lib/blog";

import styles from "./blog_post.module.scss";
import { TagsList } from "./tags_list";
import { Fullpage } from "./fullpage";
import { Grid } from "../grid";
import { Arrow } from "../arrow";
import { Flex } from "../flex";
import { Box } from "../box";
import { MetaTags } from "../meta_tags";

type Props = {
  meta: Metadata;
  children: React.ReactElement;
};

const MAX_READ_TIME = 10;

export function BlogPost(props: Props) {
  const { children, meta } = props;
  const router = useRouter();
  const { breakpoint } = useBreakpoint();

  // not very accurate, but good enough
  const readTime = readingTime(getReactNodeText(children));
  const readTimePercent = (Math.ceil(readTime.minutes) * 100) / MAX_READ_TIME;

  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? "dark" : "light";

  const [email, setEmail] = React.useState("");

  const meta_tags = meta.tags.map((t) => TAGS[t].name).concat(meta.tags_extra);
  // copy url to clipboard when clicking headings link icon
  useEffect(() => {
    document.querySelectorAll(".headinglink").forEach((span) => {
      span.addEventListener("click", () => {
        // the timeout is needed so we read the location after the browser have set the anchor
        setTimeout(() => {
          copyToClipboard(window.location.href);
        }, 100);
      });
    });
  }, []);

  return (
    <Layout className={styles.blog_main}>
      <Head>
        <title>{meta.title}</title>
        <link rel="stylesheet" href={`/highlight.css`} />
        <link rel="stylesheet" href={`/highlight-${theme}.css`} />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <MetaTags
        title={meta.title}
        description={meta.intro}
        image={meta.cover}
        article={{ tags: meta_tags, published_time: meta.date }}
      />

      {breakpoint && <Spacer vertical="60" />}

      <article className={styles.post}>
        <header>
          <Fullpage>
            <Grid.Full className={styles.title}>
              <Link href="/blog">
                <a onClick={() => router.back()} className={styles.back}>
                  <Flex type="inline" gap="16" align="center" as="span">
                    <Arrow direction={"left"} />
                    <Text size="m01">Back to Articles</Text>
                  </Flex>
                </a>
              </Link>

              <Spacer vertical={breakpoint ? "40" : "24"} />

              <h1 className={styles.h1}>{meta.title}</h1>
            </Grid.Full>
          </Fullpage>

          <Spacer vertical="140" />

          <div className={styles.header}>
            <div>
              <Tag tag={meta.tags[0]} size="sm" />
              <Spacer vertical="8" />
              <Text size="m02" color="muted" display="block">
                <FormattedDate date={meta.date} />
              </Text>
            </div>

            <div className={styles.readtime}>
              <div className={styles.meter}>
                <span
                  style={{ width: `${Math.min(readTimePercent, 100)}%` }}
                ></span>
              </div>
              <Text size="m02" color="muted" align="end">
                {readTime.text}
              </Text>
            </div>
          </div>
          <Spacer vertical="16" />
        </header>

        {children}

        <br />

        <Tags tags={meta.tags} />

        <Box bg="primary" as="aside" className={styles.subscribe}>
          <Text size="h03">Subscribe for updates</Text>
          <br />
          <Text as="p" className={styles.subscribe_desc}>
            Get new blog posts in your email as soon as they get published:
          </Text>

          <form
            action="https://dev.us2.list-manage.com/subscribe/post"
            method="GET"
          >
            <input
              aria-label="Your email"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="EMAIL"
              className={styles.subscribe_input}
            />
            <button type="submit" className={styles.subscribe_submit}>
              <Arrow
                className={styles.subscribe_arrow}
                color="dark"
                text="Subscribe"
              />
            </button>
            <input type="hidden" name="u" value="a7ac7926ed477a5e810ed46f7" />
            <input type="hidden" name="id" value="51b196576b" />{" "}
          </form>
        </Box>
      </article>
    </Layout>
  );
}

function Tags({ tags }: { tags: TagType[] }) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <aside className={styles.tags}>
      <Text size="h04" as="strong">
        Tags:
      </Text>
      <Spacer horizontal={"16"} />
      <TagsList tags={tags} />
    </aside>
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
}
