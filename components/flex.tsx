import React from "react";
import classNames from "classnames";

import { theme } from "./theme";
import styles from "./flex.module.scss";
import { Spacer } from "./spacer";

type Props = {
  children: React.ReactNode;
  type: "stack" | "inline";
  as?: string;
  gap?: keyof typeof theme.space;
  className?: string;
};

export function Flex({
  children,
  type = "inline",
  className,
  as = "div",
  gap = "0",
}: Props) {
  return React.createElement(
    as,
    {
      className: classNames(className, {
        [styles[type]]: true,
      }),
    },
    renderChildren()
  );

  function renderChildren() {
    console.log(children);

    if (!Array.isArray(children) || gap === "0") {
      return children;
    }

    return children.map((child, index) => {
      return (
        <React.Fragment key={index}>
          {index > 0 ? (
            type === "inline" ? (
              <Spacer horizontal={gap} />
            ) : (
              <Spacer vertical={gap} />
            )
          ) : null}

          {child}
        </React.Fragment>
      );
    });
  }
}
