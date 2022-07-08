import { Metadata } from "../../../../lib/blog";

import cover from "./fixing-long-npm-installs-cover.png";

export const meta: Metadata = {
  title: "Fixing long npm installs",
  subtitle: "Case study",
  date: "2022-07-07",
  tags: ["javascript"],
  tags_extra: ["npm", "dependencies", "slow", "optimization"],
  intro:
    "In this case study, we'll analyze how to detect npm packages with long instalation times and how to potentially optimize them. We have faced this problem during builds on the CI server.",
  visibility: "public",
  cover: cover.src,
};
