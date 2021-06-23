import React from "react";
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
import { Arrow } from "../arrow";
import { MetaTags } from "../meta_tags";

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
      <MetaTags title={`Blog, by Andrei Pfeiffer`} />

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
      const content =
        current_page === total_pages ? (
          <>
            <Spacer horizontal="16" />
            <Text size="m01">Previous</Text>
          </>
        ) : null;

      const arrow_text = current_page === total_pages ? "" : "Previous";

      return (
        <Link
          passHref
          href={
            current_page - 1 === 1 ? `/blog` : `/blog/page/${current_page - 1}`
          }
        >
          <Button size="large" as="a" title="Previous page">
            <Arrow direction="left" text={arrow_text} color="dark" />
            {content}
          </Button>
        </Link>
      );
    }

    return null;
  }

  function renderNextPage() {
    if (current_page < total_pages) {
      const content =
        current_page === 1 ? (
          <>
            <Text size="m01">Next</Text>
            <Spacer horizontal="16" />
          </>
        ) : null;

      const arrow_text = current_page === 1 ? "" : "Next";

      return (
        <Link passHref href={`/blog/page/${current_page + 1}`}>
          <Button size="large" as="a" title="Next page">
            {content}
            <Arrow direction="right" text={arrow_text} color="dark" />
          </Button>
        </Link>
      );
    }

    return null;
  }
}
