import { Metadata } from "../../../../../lib/blog";
import { meta as common_meta } from "../meta";

import cover from "./css-in-js-cover.png";

export const meta: Metadata = {
  ...common_meta,
  subtitle: "Part 7: CSS-in-JS",
  date: "2022-05-30",
  tags: ["css", "javascript"],
  tags_extra: ["scalability", "maintainability", "styling"],
  intro:
    "Moving style definitions to JavaScript files is a novel approach to CSS, resulting in countless benefits, such as explicit dependencies, shared variables, not to mention all the features of styles encapsulation, CSS preprocessors, Atomic CSS, and so much more.",
  visibility: "unlisted",
  cover: cover.src,
};
