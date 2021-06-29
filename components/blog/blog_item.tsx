import React from "react";
import Link from "next/link";

import { FormattedDate } from "../date";
import { Grid } from "../grid";
import { Spacer } from "../spacer";
import { Text } from "../text";
import { Tag } from "./tag";
import { Post } from "../../lib/blog";
import { useBreakpoint } from "../layout/useBreakpoint";

import styles from "./blog_item.module.scss";

type Props = {
  post: Post;
};

export function BlogItem({ post }: Props) {
  const { id, meta } = post;
  const { breakpoint } = useBreakpoint();

  return (
    <Grid key={id} as="li">
      <Grid.Col span={breakpoint === "md" ? 10 : 8}>
        <Tag tag={meta.tags[0]} type="sm" />

        <Text size="m02" color="muted" display="block">
          <FormattedDate date={meta.date} />
        </Text>

        <Spacer vertical="24" />

        <Link href={`/blog/${id}`}>
          <a className={styles.link}>
            <h2 className={styles.title}>{meta.title}</h2>
            <Spacer vertical="24" />
            <Text as="p">{meta.intro}</Text>
          </a>
        </Link>
      </Grid.Col>
    </Grid>
  );
}
