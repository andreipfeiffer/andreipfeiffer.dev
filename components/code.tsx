import React from "react";
import styles from "./code.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Code({ children }: Props) {
  return <code className={styles.code}>{children}</code>;
}
