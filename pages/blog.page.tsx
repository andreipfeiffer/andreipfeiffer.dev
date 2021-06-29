import React from "react";
import { GetStaticProps } from "next";

import {
  getPostsForPage,
  // getPublishedPosts,
  getTotalPages,
} from "../lib/blog";

import { BlogListing, BlogListingProps } from "../components/blog/blog_listing";

export default function Blog(props: BlogListingProps) {
  return <BlogListing {...props} />;
}

export const getStaticProps: GetStaticProps<BlogListingProps> = async () => {
  const FIRST_PAGE = 1;

  // const posts = getPublishedPosts();
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
