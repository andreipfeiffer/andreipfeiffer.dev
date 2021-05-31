import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import { Grid } from "../components/grid";
import { Text } from "../components/text";
import { Spacer } from "../components/spacer";
import { FormattedDate } from "../components/date";
import { Flex } from "../components/flex";
import { Layout, SITE_TITLE } from "../components/layout";
import { useBreakpoint } from "../components/layout/useBreakpoint";

import { getPublishedPosts, Post } from "../lib/blog";

import styles from "./blog.module.scss";

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
        <Text size="h00" as="h1" className={styles.h1}>
          Blog
        </Text>
      </Grid.Full>

      <Spacer vertical="60" />

      <Flex as="ul" type="stack" gap="140" className={styles.list}>
        {posts.map(({ id, meta }) => (
          <Grid key={id} as="li">
            <Grid.Col span={7}>
              {meta.category && (
                <Text size="h06" as="strong" display="block">
                  {meta.category}
                </Text>
              )}

              <Text size="m02" color="muted">
                <FormattedDate date={meta.date} />
              </Text>

              <Spacer vertical="24" />

              <Link href={`/blog/${id}`}>
                <a className={styles.link}>
                  <Text as="h2" size="h02">
                    {meta.title}
                  </Text>
                </a>
              </Link>
              <Spacer vertical="32" />
              <Text as="p">{meta.intro}</Text>
            </Grid.Col>
          </Grid>
        ))}
      </Flex>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      posts: getPublishedPosts(),
    },
  };
};
