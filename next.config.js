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
            properties: { className: ["permalink"] },
          },
        },
      ],
      [externalLinks, { target: false, rel: ["noopener"] }],
      [toc, { maxDepth: 2 }],
    ],
  },
});

module.exports = withPlugins([
  [withMDX, { pageExtensions: ["ts", "tsx", "mdx"] }],
  [optimizedImages, { optipng: { optimizeImagesInDev: true } }],
  {
    images: {
      deviceSizes: [320, 768, 1024, 1200, 1900],
    },
  },
  {
    trailingSlash: true,
  },
]);
