import React from "react";
import Link from "next/link";

import { Button } from "../button";
import { TAGS, Tag as TagType } from "../../lib/blog";

import styles from "./tags_list.module.scss";

type Props = {
  tags: TagType[];
};

export function TagsList({ tags }: Props) {
  const tags_list = tags
    .map((tag) => {
      const tag_name = TAGS[tag]?.name;

      // some tags might not be added as separate pages
      // we'll exclude them from the listing, but they will appear in the head for SEO
      if (!tag_name) {
        return null;
      }

      return (
        <Link
          passHref
          key={tag}
          href={`/blog/tag/${encodeURI(tag.toLowerCase())}`}
        >
          <Button as="a">{tag_name}</Button>
        </Link>
      );
    })
    .filter((tag) => tag != null);

  return (
    <nav className={styles.tags}>
      <ul className={styles.list}>
        {tags_list.map((tag, i) => (
          <li key={tags[i]} className={styles.item}>
            {tag}
          </li>
        ))}
      </ul>
    </nav>
  );
}
