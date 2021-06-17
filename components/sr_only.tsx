import React from "react";

import styles from "./sr_only.module.scss";

type Props = {
  children: string;
};

export function SRonly({ children }: Props) {
  return <span className={styles.sr}>{children}</span>;
}
