import { Metadata } from "../../../../lib/blog";

import cover from "./partial-test-assertions-cover.png";

export const meta: Metadata = {
  title: "Partial matching test assertions",
  date: "2024-08-09",
  tags: ["testing"],
  tags_extra: ["assertion", "objects", "arrays", "jest", "vitest"],
  intro:
    "This blog post explores two different approaches to describe partial test assertions: omitting insignificant data and picking only relevant data. Both approaches are useful, but they address different scenarios.",
  visibility: "public",
  cover: cover.src,
};
