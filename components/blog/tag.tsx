import classNames from "classnames";
import Link from "next/link";
import React from "react";

import { Text } from "../../components/text";
import { TAGS, Tag as TagType } from "../../lib/blog";

import styles from "./tag.module.scss";

type Props = {
  tag: TagType;
  size: "sm" | "lg";
};

export function Tag({ tag, size }: Props) {
  const { name, color, text } = TAGS[tag];
  const tag_style = { ["--tag-color"]: color } as React.CSSProperties;

  return (
    <Link href={`/blog/tag/${tag}`}>
      <a
        style={tag_style}
        className={classNames(styles.tag, {
          [styles.large]: size === "lg",
          [styles.inverted]: text === "light",
        })}
      >
        <Text size="h06" as="strong" display="block" color="default">
          {name}
        </Text>
      </a>
    </Link>
  );
}
