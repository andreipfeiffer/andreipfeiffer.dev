import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Grid } from "../grid";
import { Text } from "../text";
import { Spacer } from "../spacer";
import { Flex } from "../flex";
import { Layout } from "../layout";
import { Button } from "../button";
import { useBreakpoint } from "../layout/useBreakpoint";

import { Post } from "../../lib/blog";

import styles from "./blog_listing.module.scss";
import { BlogItem } from "../blog/blog_item";

export interface BlogListingProps {
  posts: Post[];
  current_page: number;
  total_pages: number;
}

export function BlogListing(props: BlogListingProps) {
  const { posts, current_page, total_pages } = props;
  const { breakpoint } = useBreakpoint();

  return (
    <Layout>
      <Head>
        <title>Blog, Andrei Pfeiffer</title>
      </Head>

      {breakpoint && <Spacer vertical="100" />}

      <Grid.Full>
        <Text size="h00" as="h1" className={styles.h1}>
          Blog
        </Text>
      </Grid.Full>

      <Spacer vertical="100" />

      <Flex as="ul" type="stack" gap={"100"} className={styles.list}>
        {posts.map((post) => (
          <BlogItem post={post} key={post.id} />
        ))}
      </Flex>

      <Spacer vertical="100" />

      <Grid.Full className={styles.page_nav}>
        {renderPrevPage()}
        {renderNextPage()}
      </Grid.Full>
    </Layout>
  );

  function renderPrevPage() {
    if (current_page > 1) {
      return (
        <Link
          passHref
          href={
            current_page - 1 === 1 ? `/blog` : `/blog/page/${current_page - 1}`
          }
        >
          <Button as="a">&lt; Prev page</Button>
        </Link>
      );
    }

    return <span></span>;
  }

  function renderNextPage() {
    if (current_page < total_pages) {
      return (
        <Link passHref href={`/blog/page/${current_page + 1}`}>
          <Button as="a">Next page &gt;</Button>
        </Link>
      );
    }

    return <span></span>;
  }
}
