import { Metadata } from "../../../../lib/blog";

import cover from "./my-2022-testing-approach-cover.png";

export const meta: Metadata = {
  title: "My 2022 testing approach",
  date: "2022-12-16",
  tags: ["testing"],
  tags_extra: ["frameworks", "unit testing", "integration testing", "end to end testing"],
  intro: "This post describes all the tools and practices I currently use to cover automated functional testing for an entire application: unit and integration testing, end-to-end system testing, and isolated UI components testing.",
  visibility: "private",
  cover: cover.src,
};
