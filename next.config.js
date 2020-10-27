const html = require("remark-html");
const highlight = require("remark-highlight.js");
const slug = require("remark-slug");
const headings = require("remark-autolink-headings");
const externalLinks = require("remark-external-links");
const toc = require("remark-toc");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      html,
      highlight,
      slug,
      [
        headings,
        {
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

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "mdx"],
});
