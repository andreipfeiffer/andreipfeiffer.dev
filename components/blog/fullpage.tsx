import classNames from "classnames";
import React from "react";
import styles from "./fullpage.module.scss";

type Props = {
  children: React.ReactNode;
  padded?: boolean;
};

export function Fullpage({ children, padded = false }: Props) {
  return (
    <div
      className={classNames(styles.full, {
        [styles.padded]: padded,
      })}
    >
      {children}
    </div>
  );
}
