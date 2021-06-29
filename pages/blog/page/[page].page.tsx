import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { getPostsForPage, getTotalPages } from "../../../lib/blog";
import {
  BlogListing,
  BlogListingProps,
} from "../../../components/blog/blog_listing";

export default function Blog(props: BlogListingProps) {
  return <BlogListing {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPages = getTotalPages();

  /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */
  const paths = [];
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogListingProps> = async ({
  params,
}) => {
  const current_page = Number(params?.page);
  const posts = getPostsForPage(current_page);
  const total_pages = getTotalPages();

  return {
    props: {
      posts,
      total_pages,
      current_page,
    },
  };
};
