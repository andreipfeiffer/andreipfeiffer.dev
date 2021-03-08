import React from "react";
import classNames from "classnames";

import { theme } from "./theme";
import styles from "./box.module.scss";

type Props = {
  children: React.ReactNode;
  as?: string;
  bg?: "none" | "primary" | "inversed";
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
        // from globals
        "bg-primary": bg === "primary",
        inversed: bg === "inversed",
        [styles.padded]: padded,
      }),
      style: css_vars,
    },
    children
  );
}
