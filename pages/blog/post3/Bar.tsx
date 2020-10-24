import React from "react";
import styles from "./Bar.module.css";

export default function Foo({ start }: { start: number }) {
  const [count, setCount] = React.useState(start || 0);
  return (
    <span className={styles.bar} onClick={() => setCount(count + 1)}>
      {count}
    </span>
  );
}
