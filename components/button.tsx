import React from "react";
import classNames from "classnames";

import { theme } from "./theme";
import { Text } from "../components/text";
import styles from "./button.module.scss";

type Props = {
  children: React.ReactNode;
  href: string;
};

export function Button({ children, href }: Props) {
  return (
    <a href={href} className={classNames(styles.button)}>
      <Text size="m02" as="div">
        {children}
      </Text>
    </a>
  );
}
