import React from "react";
import { theme } from "./theme";

type Props = {
  vertical?: keyof typeof theme.space;
  horizontal?: keyof typeof theme.space;
};

export function Spacer({ vertical, horizontal }: Props) {
  const width = horizontal ? theme.space[horizontal] : 0;
  const height = vertical ? theme.space[vertical] : 0;

  if (width) {
    return <span style={{ width }}></span>;
  }

  if (height) {
    return <div style={{ height }}></div>;
  }

  return null;
}
