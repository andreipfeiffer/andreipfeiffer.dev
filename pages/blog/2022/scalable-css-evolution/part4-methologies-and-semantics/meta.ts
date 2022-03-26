import { Metadata } from "../../../../../lib/blog";
import { meta as common_meta } from "../meta";

import cover from "./methodologies-semantics-cover.png";

export const meta: Metadata = {
  ...common_meta,
  subtitle: "Part 4: Methodologies and Semantics",
  date: "2022-03-26",
  tags: ["css"],
  tags_extra: [
    "scalability",
    "maintainability",
    "styling",
    "bem",
    "oocss",
    "smacss",
    "css architecture",
    "semantics",
    "components",
    "user interface",
  ],
  intro:
    "Most CSS methodologies and architectures are built on top of many good practices that we've previously covered, providing a structured and cohesive set of principles and rules. In this chapter we'll focus on Semantic CSS, encouraged by the HTML5 specification, which most CSS methodologies and frameworks embrace.",
  visibility: "unlisted",
  cover: cover.src,
};
