import React from "react";
import useDarkMode from "use-dark-mode";
import styles from "./code.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Code({ children }: Props) {
  const darkMode = useDarkMode(false);
  return (
    <div
      className={`${styles.container} ${
        darkMode.value === true && styles.container_dark
      }`}
    >
      <code className={styles.code}>{children}</code>
    </div>
  );
}
