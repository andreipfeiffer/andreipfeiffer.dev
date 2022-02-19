import { Metadata } from "../../../../../lib/blog";
import { meta as common_meta } from "../meta";

import cover from "./css-processors-cover.png";

export const meta: Metadata = {
  ...common_meta,
  subtitle: "Part 3: CSS Processors",
  date: "2022-02-23",
  tags: ["css"],
  tags_extra: [
    "scalability",
    "maintainability",
    "styling",
    "sass",
    "less",
    "stylus",
    "postprocessors",
    "postcss",
  ],
  intro:
    "There are two types of tools regarding CSS processing that we'll analyze. Preprocessors introduce support for contextual styles, removing most source code duplication. Postprocessors optimize the final CSS output, while also paving the way for future tools that we'll touch upon in later chapters.",
  visibility: "unlisted",
  cover: cover.src,
};
