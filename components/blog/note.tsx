import React from "react";
import styles from "./note.module.scss";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export function Note({ children, title = "Note" }: Props) {
  return (
    <div className={styles.note}>
      <strong className={styles.title}>{title}</strong>
      {children}
    </div>
  );
}
