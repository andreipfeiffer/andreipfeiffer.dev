import { Metadata } from "../../../../../lib/blog";

import cover from "./styles-encapsulation-cover.png";

export const meta: Metadata = {
  title: "The evolution of scalable CSS",
  subtitle: "Part 5: Styles Encapsulation",
  date: "2021-12-28",
  tags: ["css"],
  tags_extra: [
    "scalability",
    "maintainability",
    "styling",
    "css modules",
    "scoped css",
  ],
  intro:
    "CSS Modules and styles encapsulation in general elegantly solve all the CSS naming collisions problems, while keeping specificity low at the same time. These techniques profoundly changed the way we author semantic CSS nowadays and became an industry standard, adopted by all component-based JavaScript frameworks.",
  visibility: "private",
  cover: cover.src,
};
