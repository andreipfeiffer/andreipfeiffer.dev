import { Metadata } from "../../../../../lib/blog";
import { meta as common_meta } from "../meta";

import cover from "./styles-encapsulation-cover.png";

export const meta: Metadata = {
  ...common_meta,
  subtitle: "Part 5: Styles Encapsulation",
  date: "2021-04-19",
  tags: ["css"],
  tags_extra: [
    "scalability",
    "maintainability",
    "styling",
    "css modules",
    "scoped css",
    "shadow dom"
  ],
  intro:
    "Styles encapsulation and CSS Modules elegantly solve all the CSS naming collisions problems, while keeping specificity low at the same time. These techniques profoundly changed the way we author semantic CSS nowadays and became an industry standard, adopted by all component-based JavaScript frameworks.",
  visibility: "unlisted",
  cover: cover.src,
};
