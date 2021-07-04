import React from "react";
import styles from "./status.module.scss";
import classNames from "classnames";

export type StatusType = "ok" | "err";

type Props = {
  type: StatusType;
  className?: string;
};

export function Status({ type, className }: Props) {
  return (
    <span
      className={classNames(styles.status, className, {
        [styles.status_ok]: type === "ok",
        [styles.status_err]: type === "err",
      })}
    ></span>
  );
}
