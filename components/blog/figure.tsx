import React from "react";
import { Grid } from "../grid";
import { Text } from "../text";
import { Fullpage } from "./fullpage";
import styles from "./figure.module.scss";

type Props = {
  children: React.ReactNode;
  caption?: React.ReactNode;
  /** "content" -> default content width; "grid" -> 12 columns grid width; "page" -> full page width */
  width?: "content" | "grid" | "page";
};

export function Figure({ children, caption, width = "content" }: Props) {
  const content = (
    <figure>
      {children}

      {!!caption && (
        <Text
          size="m02"
          align="center"
          as="figcaption"
          className={styles.caption}
        >
          {caption}
        </Text>
      )}
    </figure>
  );

  switch (width) {
    case "page":
      return <Fullpage>{content}</Fullpage>;

    case "grid":
      return (
        <Fullpage>
          <Grid.Full>{content}</Grid.Full>
        </Fullpage>
      );

    default:
      return content;
  }
}
