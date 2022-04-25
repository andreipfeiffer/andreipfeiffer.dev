import React from "react";
import styles from "./code.module.css";

type Props = {
  children: React.ReactNode;
};

export function Code({ children }: Props) {
  return (
    <div className="remark-highlight">
      <pre className="language-custom">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function Err({ children }: Props) {
  return <span className={styles.err}>{children}</span>;
}
