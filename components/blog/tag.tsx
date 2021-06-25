import Link from "next/link";
import React from "react";

import { Text } from "../../components/text";
import { TAGS, Tag as TagType } from "../../lib/blog";

import styles from "./tag.module.scss";

type Props = {
  tag: TagType;
};

export function Tag({ tag }: Props) {
  const { name, color } = TAGS[tag];
  const tag_style = { ["--tag-color"]: color } as React.CSSProperties;

  return (
    <Link href={`/blog/tag/${tag}`}>
      <a style={tag_style} className={styles.tag}>
        <Text size="h06" as="strong" display="block" color="default">
          {name}
        </Text>
      </a>
    </Link>
  );
}
