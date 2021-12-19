import { Metadata } from "../../../../../lib/blog";
import { meta as common_meta } from "../meta";

import cover from "./atomic-css-cover.png";

export const meta: Metadata = {
  ...common_meta,
  subtitle: "Part 6: Atomic CSS",
  date: "2021-12-28",
  tags: ["css", "ui"],
  tags_extra: [
    "scalability",
    "maintainability",
    "styling",
    "utility-first",
    "functional css",
  ],
  intro:
    "Atomic CSS contradicts and breaks all the principles of Semantic CSS. However, this mindset shift gave birth to a whole new set of frameworks, based solely on single-purpose utility classes.",
  visibility: "draft",
  cover: cover.src,
};
