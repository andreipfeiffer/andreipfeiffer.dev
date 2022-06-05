import { Metadata } from "../../../../../lib/blog";
import { meta as common_meta } from "../meta";

import cover from "./type-safe-css-cover.png";

export const meta: Metadata = {
  ...common_meta,
  subtitle: "Part 8: Type-safe CSS",
  date: "2022-06-06",
  tags: ["css", "typescript"],
  tags_extra: [
    "scalability",
    "maintainability",
    "styling",
    "type checking",
    "type safety",
    "refactoring",
  ],
  intro:
    "Adding TypeScript on top of CSS-in-JS enables safe refactorings and typed interfaces when authoring UI components. Therefore, CSS-in-TypeScript provides the missing puzzle piece when aiming to achieve complete type-safe code.",
  visibility: "unlisted",
  cover: cover.src,
};
