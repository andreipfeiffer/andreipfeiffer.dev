import React from "react";

import styles from "./ListFlex.module.scss";

export function ListFlex() {
  return (
    <div className={styles.list}>
      <div className={styles.group}>
        <span className={styles.label}>Posts</span>
        <span className={styles.value}>123</span>
      </div>

      <div className={styles.group}>
        <span className={styles.label}>Followers</span>
        <span className={styles.value}>456</span>
      </div>

      <div className={styles.group}>
        <span className={styles.label}>Likes</span>
        <span className={styles.value}>9999</span>
      </div>
    </div>
  );
}
