import { Metadata } from "../../../lib/blog";

export const meta: Metadata = {
  title: "CSS-in-JS styles output methods",
  date: "2021-09-06",
  tags: ["css", "javascript", "ui"],
  tags_extra: [
    "styling",
    "css-in-js",
    "performance",
    "first paint",
    "ssr",
    "csr",
    "critical css",
  ],
  intro:
    "There are two mutually exclusive methods that CSS-in-JS libraries use to generate and ship styles to the browser: Runtime Stylesheets and Static CSS Extraction. Both methods have benefits and downsides, so let’s analyze them in detail.",
  visibility: "public",
  cover: "/images/share/css-in-js-styles-output.png",
};
