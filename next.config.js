import withPlugins from "next-compose-plugins";

import nextMDX from "@next/mdx";
import html from "remark-html";
import prism from "remark-prism";
import slug from "rehype-slug";
import headings from "rehype-autolink-headings";
import externalLinks from "rehype-external-links";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[prism, { showSpotlight: true }], html],
    rehypePlugins: [
      slug,
      [
        headings,
        {
          behavior: "append",
          content: {
            type: "element",
            tagName: "span",
            properties: { className: ["headinglink"] },
          },
        },
      ],
      [externalLinks, { target: false, rel: ["noopener"] }],
    ],
  },
});

const nextConfig = {
  trailingSlash: false,
  images: {
    deviceSizes: [320, 768, 1024, 1200, 1900],
  },
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/blog/page/1",
        destination: "/blog",
        permanent: false,
      },

      // move blog posts from root to year subfolders
      ...getPosts(2020),
      ...getPosts(2021),
    ];
  },
};

export default withPlugins([
  // https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions
  [withMDX, { pageExtensions: ["page.ts", "page.tsx", "page.mdx"] }],

  nextConfig,
]);

const moved_posts = {
  2020: [
    "definition-lists-with-grid-layout",
    "tech-debt-tech-loan",
    "empty-objects-initialization-with-typescript",
  ],
  2021: [
    "distinguishing-between-pages-and-components-in-next-js",
    "complementary-learning",
    "validating-our-understanding",
    "developing-uis-connected-to-web-apis",
    "css-in-js-styles-output",
    "react-components-anatomy",
    "isolated-components-driven-development",
  ],
};

function getPosts(year) {
  return moved_posts[year].map((post) => ({
    source: `/blog/${post}`,
    destination: `/blog/${year}/${post}`,
    permanent: true,
  }));
}
