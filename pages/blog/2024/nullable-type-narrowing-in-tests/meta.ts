import { Metadata } from "../../../../lib/blog";

import cover from "./nullable-type-narrowing-cover.png";

let x: {x: 1} | null = null;

export const meta: Metadata = {
  title: "Nullable type narrowing in tests",
  date: "2024-08-17",
  tags: ["testing", "typescript"],
  tags_extra: ["assertion", "optional", "narrowing", "nullable", "jest", "vitest"],
  intro:
  "Non-trivial integration tests in TypeScript projects might require us to use functions that return Nullable types, especially when asserting side effects. This might force us to use less that ideal solutions such as type assertions or type-check ignoring comments. However, there is much better and elegant solution which we'll explore in detail.",
  visibility: "public",
  cover: cover.src,
};
