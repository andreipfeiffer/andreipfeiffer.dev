import React from "react";
import classNames from "classnames";

import { Text } from "../components/text";
import styles from "./button.module.scss";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?(): void;
  as?: "button" | "a";
  size?: "regular" | "large";
};

export const Button = React.forwardRef(
  (
    { children, href, onClick, as = "button", size = "regular" }: Props,
    ref
  ) => {
    if (as === "a" && !href) {
      throw Error("`href` prop needs to be provided for `a` elements");
    }

    if (as === "button" && !onClick) {
      throw Error("`onClick` prop needs to be provided for `button` elements");
    }

    const _default = typeof children === "string";
    const _default_size = size === "large" ? "m01" : "m02";

    return React.createElement(
      as,
      {
        className: styles.button,
        href,
        onClick,
        ref,
      },
      <div
        className={classNames(
          styles.button_inner,
          _default && styles.button_default,
          {
            [styles.button_large]: size === "large",
          }
        )}
      >
        {_default ? <Text size={_default_size}>{children}</Text> : children}
      </div>
    );
  }
);
