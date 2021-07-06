import classNames from "classnames";
import React from "react";

import styles from "./subheading.module.scss";

type Props = {
  children: React.ReactNode;
  uppercase?: boolean;
};

export function Subheading({ children, uppercase = false }: Props) {
  return (
    <strong
      className={classNames(styles.subheading, {
        [styles.uppercase]: uppercase,
      })}
    >
      {children}
    </strong>
  );
}
