import { Metadata } from "../../../../../lib/blog";
import { meta as common_meta } from "../meta";

import cover from "./atomic-css-cover.png";

export const meta: Metadata = {
  ...common_meta,
  subtitle: "Part 6: Atomic CSS",
  date: "2022-05-13",
  tags: ["css"],
  tags_extra: [
    "reusability",
    "semantics",
    "scalability",
    "maintainability",
    "styling",
    "utility-first",
    "atomic css",
    "functional css",
  ],
  intro:
    "Atomic CSS contradicts and breaks all the principles of Semantic CSS. This mindset gave birth to a new generation of frameworks based solely on single-purpose utility classes.",
  visibility: "unlisted",
  cover: cover.src,
};
