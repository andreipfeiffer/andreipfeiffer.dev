const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

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
    ];
  },
};

module.exports = withPlugins([
  // https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions
  [withMDX, { pageExtensions: ["page.ts", "page.tsx", "page.mdx"] }],
  [optimizedImages, { optipng: { optimizeImagesInDev: true } }],

  nextConfig,
]);
