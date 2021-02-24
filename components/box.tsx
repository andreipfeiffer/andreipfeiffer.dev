import React from "react";
import classNames from "classnames";

import { theme } from "./theme";
import styles from "./box.module.scss";

type Props = {
  children: React.ReactNode;
  as?: string;
  bg?: "none" | "primary" | "inversed";
  gap?: keyof typeof theme.space;
  className?: string;
};

export function Box({
  children,
  className,
  as = "div",
  bg = "none",
  gap = "0",
}: Props) {
  return React.createElement(
    as,
    {
      className: classNames(className, {
        // from globals
        "bg-primary": bg === "primary",
        inversed: bg === "inversed",
        [styles[`gap${gap}`]]: gap !== "0",
      }),
    },
    children
  );
}
