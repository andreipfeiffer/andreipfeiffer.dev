import React from "react";
import classNames from "classnames";

import { theme } from "./theme";
import styles from "./box.module.scss";

type Props = {
  children: React.ReactNode;
  as?: string;
  bg?: "none" | "theme" | "primary" | "inversed";
  padded?: keyof Pick<typeof theme.space, "8" | "16" | "24" | "32">;
  className?: string;
};

export function Box({
  children,
  className,
  as = "div",
  bg = "none",
  padded,
}: Props) {
  const css_vars = {
    ["--padding"]: `var(--space-${padded})`,
  } as React.CSSProperties;

  return React.createElement(
    as,
    {
      className: classNames(className, {
        [styles.padded]: !!padded,
        // from globals
        "bg-primary": bg === "primary",
        theme: bg === "theme",
        inversed: bg === "inversed",
      }),
      style: padded && css_vars,
    },
    children
  );
}
