import React from "react";
import classNames from "classnames";

import { SRonly } from "./sr_only";
import styles from "./arrow.module.scss";

type Props = {
  direction?: "right" | "left" | "up" | "down";
  color?: "color" | "dark" | "light";
  className?: string;
  text?: string;
};

export function Arrow({
  className,
  direction = "right",
  color = "color",
  text,
}: Props) {
  const css_props = {
    ["--linecolor"]: `var(--${color})`,
  } as React.CSSProperties;

  return (
    <span
      className={classNames(styles.arrow, className, styles[direction])}
      style={css_props}
    >
      {text ? <SRonly>{text}</SRonly> : null}
    </span>
  );
}
