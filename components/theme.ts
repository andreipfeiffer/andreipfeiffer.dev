import vars from "../styles/theme.module.scss";

const {
  light,
  dark,
  yellow,
  blue,
  blue_light,
  breakpoint_sm,
  breakpoint_md,
  breakpoint_lg,
} = vars;

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
    yellow,
    blue,
    blue_light,
  },

  breakpoint: {
    sm: parseInt(breakpoint_sm.replace("px", ""), 10),
    md: parseInt(breakpoint_md.replace("px", ""), 10),
    lg: parseInt(breakpoint_lg.replace("px", ""), 10),
  },
} as const;
