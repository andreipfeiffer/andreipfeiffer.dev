import React from "react";

import styles from "./ListGrid.module.scss";

type Props = {
  flow: "row" | "column";
};

export function ListGrid(props: Props) {
  const { flow = "row" } = props;

  return (
    <dl className={styles.list} style={{ gridAutoFlow: flow }}>
      <dt className={styles.label}>Posts</dt>
      <dd className={styles.value}>123</dd>

      <dt className={styles.label}>Followers</dt>
      <dd className={styles.value}>456</dd>

      <dt className={styles.label}>Likes</dt>
      <dd className={styles.value}>9999</dd>
    </dl>
  );
}
