import vars from "../styles/theme.module.scss";

const { light, dark, primary } = vars;

export const theme = {
  space: {
    "8": `var(--space-8)`,
    "16": `var(--space-16)`,
    "24": `var(--space-24)`,
    "32": `var(--space-32)`,
    "40": `var(--space-40)`,
    "60": `var(--space-60)`,
    "80": `var(--space-80)`,
    "100": `var(--space-100)`,
    "120": `var(--space-120)`,
    "140": `var(--space-140)`,
  },

  color: {
    dark,
    light,
    primary,
  },
} as const;
