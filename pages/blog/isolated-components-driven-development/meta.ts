import { Metadata } from "../../../lib/blog";

export const meta: Metadata = {
  title: "Isolated Components Driven Development",
  date: "2021-10-10",
  tags: ["ui", "react"],
  tags_extra: [
    "decoupling",
    "components",
    "documentation",
    "isolation",
    "debugging",
    "storybook",
  ],
  intro:
    "In unit tests, we execute code in isolation, outside the application. The same approach could be applied to UI components, proving to be a very convenient method during development and debugging. As a bonus, this technique also provides documentation, valuable to all team members working on the project.",
  visibility: "public",
  cover: "/images/share/isolated-components-driven-development.png",
};
