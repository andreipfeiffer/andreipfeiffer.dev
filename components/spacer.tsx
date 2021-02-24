import React from "react";
// import classNames from "classnames";

import { theme } from "./theme";
// import styles from "./spacer.module.scss";

type Props = {
  vertical?: keyof typeof theme.space;
  horizontal?: keyof typeof theme.space;
  style?: React.CSSProperties;
};

export function Spacer({ vertical = "0", horizontal = "0" }: Props) {
  const width = theme.space[horizontal];
  const height = theme.space[vertical];

  if (width !== "0") {
    return <span style={{ width }}></span>;
  }

  if (height !== "0") {
    return <div style={{ height }}></div>;
  }

  return null;
}
