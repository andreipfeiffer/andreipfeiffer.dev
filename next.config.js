const withPlugins = require("next-compose-plugins");

const html = require("remark-html");
const prism = require("remark-prism");
const slug = require("remark-slug");
const headings = require("remark-autolink-headings");
const externalLinks = require("remark-external-links");
const toc = require("remark-toc");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [prism, { showSpotlight: true }],
      html,
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
      [toc, { maxDepth: 2 }],
    ],
  },
});

const nextConfig = {
  trailingSlash: false,
  images: {
    deviceSizes: [320, 768, 1024, 1200, 1900],
  },

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

module.exports = withPlugins([
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
    permanent: false,
  }));
}
