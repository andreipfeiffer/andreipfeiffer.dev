// 16px from 19px base
const SPACE = 0.84;
// 40px from 19px base
const SPACE_LARGE = 2.1;

export const theme = {
  space: {
    "0": `0`,
    "8": `${SPACE / 2}rem`,
    "16": `${SPACE}rem`,
    "24": `${SPACE * 1.5}rem`,
    "32": `${SPACE * 2}rem`,
    "40": `${SPACE_LARGE}rem`,
    "60": `${SPACE_LARGE * 1.5}rem`,
    "80": `${SPACE_LARGE * 2}rem`,
    "100": `${SPACE_LARGE * 2.5}rem`,
    "120": `${SPACE_LARGE * 3}rem`,
    "140": `${SPACE_LARGE * 3.5}rem`,
  },

  color: {
    dark: "#121212",
    light: "#ffffff",
    primary: "#fbc311",
  },
} as const;
