import React from "react";
import classNames from "classnames";
import styles from "./box.module.scss";

type Props = {
  children: React.ReactNode;
  as?: string;
  bg?: "none" | "primary" | "inversed";
  className?: string;
};

export function Box({ children, className, as = "div", bg = "none" }: Props) {
  return React.createElement(
    as,
    {
      className: classNames(className, {
        // from globals
        "bg-primary": bg === "primary",
        inversed: bg === "inversed",
      }),
    },
    children
  );
}
