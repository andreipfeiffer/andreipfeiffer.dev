import { GetStaticProps } from "next";
import React from "react";

import { BlogListing, BlogListingProps } from "../components/blog/blog_listing";

import { getPostsForPage, getTotalPages } from "../lib/blog";

export default function Blog(props: BlogListingProps) {
  return <BlogListing {...props} />;
}

export const getStaticProps: GetStaticProps<BlogListingProps> = async () => {
  const FIRST_PAGE = 1;

  const posts = getPostsForPage(FIRST_PAGE);
  const total_pages = getTotalPages();

  return {
    props: {
      posts,
      total_pages,
      current_page: FIRST_PAGE,
    },
  };
};
