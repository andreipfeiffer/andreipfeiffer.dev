import { Metadata } from "../../../../../lib/blog";
import { meta as common_meta } from "../meta";

import cover from "./good-practices-cover.png";

export const meta: Metadata = {
  ...common_meta,
  subtitle: "Part 2: Good practices",
  date: "2021-12-28",
  tags: ["css"],
  tags_extra: ["scalability", "maintainability", "styling", "specificity"],
  intro:
    "Avoiding naming collisions and specificity wars is not a trivial task. Therefore, let's explore some essential techniques, introduced by various thought leaders, which are crucial for writting maintainable CSS.",
  visibility: "private",
  cover: cover.src,
};