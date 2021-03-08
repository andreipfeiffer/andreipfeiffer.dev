import React from "react";
import classNames from "classnames";

import styles from "./hamburger.module.scss";

type Props = {
  label: string;
  active: boolean;
  onClick(): void;
  darkMode: boolean;
};

export function Hamburger({ active, label, onClick, darkMode }: Props) {
  return (
    <button
      aria-label={label}
      className={classNames(styles.hamburger, {
        [styles.active]: active,
      })}
      onClick={onClick}
    >
      <span className={styles.hamburger_inner} />
    </button>
  );
}
