import { Metadata } from "../../../../../lib/blog";
import { meta as common_meta } from "../meta";

import cover from "./scalability-issues-cover.png";

export const meta: Metadata = {
  ...common_meta,
  subtitle: "Part 1: CSS scalability issues",
  date: "2021-12-28",
  tags: ["css"],
  tags_extra: ["scalability", "maintainability", "styling", "limitations"],
  intro:
    "Before discussing the solutions to CSS scalability issues, we must understand what these issues are in the first place. Thus, let's take a look at some of the most concerning problems when talking about long-term CSS maintainability.",
  visibility: "private",
  cover: cover.src,
};