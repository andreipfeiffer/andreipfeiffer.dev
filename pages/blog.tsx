import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import { Grid } from "../components/grid";
import { Text } from "../components/text";
import { Spacer } from "../components/spacer";
import FormattedDate from "../components/date";
import { Layout, SITE_TITLE } from "../components/layout";
import { useBreakpoint } from "../components/layout/useBreakpoint";

import { getAllPosts, Post } from "../lib/blog";

type Props = {
  posts: Post[];
};

export default function Blog(props: Props) {
  const { posts } = props;
  const { breakpoint } = useBreakpoint();

  return (
    <Layout>
      <Head>
        <title>Blog: {SITE_TITLE}</title>
      </Head>

      {breakpoint && <Spacer vertical="100" />}

      <Grid.Full>
        <Text size="h00" as="h1">
          Blog
        </Text>
      </Grid.Full>

      <Spacer vertical="60" />

      {/*
      <Grid.Full>
        <Text size="h04" as="p" display="block">
          Blog is under construction!
        </Text>
        <Text as="p" display="block">
          It will become available in the upcoming weeks...
        </Text>
      </Grid.Full>
    */}

      <ul>
        {posts.map(({ id, meta }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>
              <a>{meta.title}</a>
            </Link>{" "}
            {meta.category && (
              <small>
                [
                <Link
                  href={`/blog/category/${encodeURI(
                    meta.category
                  ).toLowerCase()}`}
                >
                  <a>{meta.category}</a>
                </Link>
                ]
              </small>
            )}
            <br />
            <small>
              <FormattedDate date={meta.date} />
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
