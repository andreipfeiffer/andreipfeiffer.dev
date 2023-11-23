import { Metadata } from "../../../../lib/blog";

import cover from "./fixing-long-npm-installs-cover.png";

export const meta: Metadata = {
  title: "Fixing long npm installs",
  subtitle: "Case study",
  date: "2022-07-07",
  tags: ["javascript"],
  tags_extra: ["npm", "dependencies", "slow", "optimization"],
  intro:
    "In this case study, we'll analyze how to detect npm packages with long instalation times, use different techniques for debugging the cause of the problem, and optimize once we understand the issue.",
  visibility: "public",
  cover: cover.src,
};
