import React from "react";
import classNames from "classnames";
import styles from "./grid.module.scss";

type Props = {
  children: React.ReactNode;
  as?: string;
};

export function Grid({ children, as = "div" }: Props) {
  return React.createElement(
    as,
    { className: classNames(styles.grid, styles.layout) },
    children
  );
}

type ItemProps = Props & {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

function Item({ children, span = 1, as = "div" }: ItemProps) {
  return React.createElement(
    as,
    { className: classNames(styles.item, styles[`size_${span}`]) },
    children
  );
}

// used for single full width element
// similar with having a Grid + Col span 12
Grid.Full = ({ children, as = "div" }: Props) => {
  return React.createElement(as, { className: styles.layout }, children);
};

Grid.Col = Item;
