import React from "react";
import classNames from "classnames";

import { theme } from "./theme";
import styles from "./flex.module.scss";

type Props = {
  children: React.ReactNode;
  type: "stack" | "inline";
  as?: string;
  gap?: keyof typeof theme.space;
  className?: string;
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "space-between";
};

export function Flex({
  children,
  type = "inline",
  className,
  as = "div",
  gap,
  align = "start",
  justify = "start",
}: Props) {
  const css_vars = {
    ["--gap"]: gap ? `var(--space-${gap})` : "0px",
  } as React.CSSProperties;

  return React.createElement(
    as,
    {
      className: classNames(
        className,
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        {
          [styles[type]]: true,
        }
      ),
      style: css_vars,
    },
    renderChildren()
  );

  function renderChildren() {
    if (!Array.isArray(children)) {
      return children;
    }

    return children.map((child, index) => {
      return <React.Fragment key={index}>{child}</React.Fragment>;
    });
  }
}
