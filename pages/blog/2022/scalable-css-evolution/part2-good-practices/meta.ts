import { Metadata } from "../../../../../lib/blog";
import { meta as common_meta } from "../meta";

import cover from "./good-practices-cover.png";

export const meta: Metadata = {
  ...common_meta,
  subtitle: "Part 2: Good practices",
  date: "2022-02-14",
  tags: ["css"],
  tags_extra: ["scalability", "maintainability", "styling", "specificity"],
  intro:
    "Avoiding naming collisions or specificity wars is not a trivial task. Therefore, let's explore in detail several fundamental practices that reached consensus within the development community when talking about scalable and maintainable CSS.",
  visibility: "unlisted",
  cover: cover.src,
};
