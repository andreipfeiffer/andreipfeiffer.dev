import React from "react";

import styles from "./quote.module.scss";

type Props = {
  children: React.ReactNode;
};

export function Quote({ children }: Props) {
  return <figure className={`blockquote ${styles.quote}`}>{children}</figure>;
}
