import classNames from "classnames";
import React from "react";

import styles from "./fullpage.module.scss";

type Props = {
  children: React.ReactNode;
};

export function Fullpage({ children }: Props) {
  return <div className={classNames(styles.full)}>{children}</div>;
}
