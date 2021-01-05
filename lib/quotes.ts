import { getAge } from "./utils";

const age = getAge();
const age_career = age - 22;
const age_js = age - 26;

export const quotes = {
  spaces:
    "I usually use spaces, because it seems that's the de facto choice within the JavaScript ecosystem. But I'll use whatever the auto-formatter is configured to do.",
  tabs:
    "I usually use spaces, because it seems that's the de facto choice within the JavaScript ecosystem. But I'll use whatever the auto-formatter is configured to do.",
  "full-stack":
    "I'm pretty opinionated about full-stack development or developers, so let's chat about this while enjoying a bottle of wine.",
  css: "I'm one of the few developers that really enjoy CSS.",
  age: `I'm currently ${age} years old, ${age_career} professional years, and ${age_js} JavaScript years.`,
  timjs: "I'm organizing tim.js since 2013, and encourage you to join us.",
};
