// 16px from 19px base
const SPACE = 0.84;
// 40px from 19px base
const SPACE_LARGE = 2.1;

export const theme = {
  space: {
    "0": `0`,
    "1": `${SPACE / 2}rem`,
    "2": `${SPACE}rem`,
    "3": `${SPACE * 1.5}rem`,
    "4": `${SPACE * 2}rem`,
    "5": `${SPACE_LARGE}rem`,
    "6": `${SPACE_LARGE * 1.5}rem`,
    "7": `${SPACE_LARGE * 2}rem`,
    "8": `${SPACE_LARGE * 2.5}rem`,
    "9": `${SPACE_LARGE * 3}rem`,
    "10": `${SPACE_LARGE * 3.5}rem`,
  },

  color: {
    dark: "#121212",
    light: "#ffffff",
    primary: "#fbc311",
  },
} as const;
