import React from "react";
import { Grid } from "../grid";
import { Text } from "../text";
import { Fullpage } from "./fullpage";
import styles from "./figure.module.scss";
import classNames from "classnames";

type Status = "ok" | "err" | undefined;

type Props = {
  children: React.ReactNode;
  caption?: React.ReactNode;
  status?: Status;
  /** "content" -> default content width; "grid" -> 12 columns grid width; "page" -> full page width */
  width?: "content" | "grid" | "page";
  background?: string | boolean;
};

export function Figure({
  children,
  caption,
  width = "content",
  background,
  status,
}: Props) {
  const backgroundColor = background
    ? background === true
      ? "#88888822"
      : background
    : undefined;

  const content = (
    <figure>
      <div
        className={classNames(backgroundColor && styles.content)}
        style={{ backgroundColor }}
      >
        {children}
      </div>

      {!!caption && (
        <Text
          size="m02"
          align="center"
          as="figcaption"
          className={styles.caption}
        >
          {renderStatus(status)} {caption}
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

  function renderStatus(status: Status) {
    if (!status) {
      return null;
    }

    return (
      <span
        className={classNames(styles.status, {
          [styles.status_ok]: status === "ok",
          [styles.status_err]: status === "err",
        })}
      ></span>
    );
  }
}
