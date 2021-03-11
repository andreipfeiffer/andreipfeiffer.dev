import React from "react";
import classNames from "classnames";

import { Text } from "../components/text";
import styles from "./button.module.scss";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?(): void;
  as?: "button" | "a";
};

export function Button({ children, href, onClick, as = "button" }: Props) {
  if (as === "a" && !href) {
    throw Error("`href` prop needs to be provided for `a` elements");
  }

  if (as === "button" && !onClick) {
    throw Error("`onClick` prop needs to be provided for `button` elements");
  }

  const _default = typeof children === "string";

  return React.createElement(
    as,
    {
      className: styles.button,
      href,
      onClick,
    },
    <div
      className={classNames(
        styles.button_inner,
        _default && styles.button_default
      )}
    >
      {_default ? <Text size="m02">{children}</Text> : children}
    </div>
  );
}
