import React from "react";

import styles_grid from "./ListGrid.module.scss";
import styles_flex from "./ListFlex.module.scss";

type Props = {
  flow: "row" | "column";
};

export function ListGrid(props: Props) {
  const { flow = "row" } = props;

  return (
    <dl className={styles_grid.list} style={{ gridAutoFlow: flow }}>
      <dt className={styles_grid.label}>Posts</dt>
      <dd className={styles_grid.value}>123</dd>

      <dt className={styles_grid.label}>Followers</dt>
      <dd className={styles_grid.value}>456</dd>

      <dt className={styles_grid.label}>Likes</dt>
      <dd className={styles_grid.value}>9999</dd>
    </dl>
  );
}

export function ListFlex() {
  return (
    <div className={styles_flex.list}>
      <div className={styles_flex.group}>
        <span className={styles_flex.label}>Posts</span>
        <span className={styles_flex.value}>123</span>
      </div>

      <div className={styles_flex.group}>
        <span className={styles_flex.label}>Followers</span>
        <span className={styles_flex.value}>456</span>
      </div>

      <div className={styles_flex.group}>
        <span className={styles_flex.label}>Likes</span>
        <span className={styles_flex.value}>9999</span>
      </div>
    </div>
  );
}

export { default } from "./index.mdx";
