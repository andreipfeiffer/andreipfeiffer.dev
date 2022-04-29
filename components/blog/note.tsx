import classNames from "classnames";
import React from "react";

import styles from "./note.module.scss";

type Props = {
  children: React.ReactNode;
  title?: string;
  uppercase?: boolean;
};

export function Note({ children, title = "Note", uppercase = true }: Props) {
  return (
    <div className={styles.note}>
      <strong
        className={classNames(styles.title, { [styles.uppercase]: uppercase })}
      >
        {title}
      </strong>
      {children}
    </div>
  );
}
