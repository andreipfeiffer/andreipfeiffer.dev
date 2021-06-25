import React from "react";
import Link from "next/link";

import { TAGS, Tag as TagType } from "../../lib/blog";
import { Tag } from "./tag";

import styles from "./tags_list.module.scss";

type Props = {
  tags: TagType[];
  activeTag?: TagType;
  filled?: boolean;
};

export function TagsList({ tags, activeTag, filled = false }: Props) {
  const tags_list = tags
    .map((tag) => {
      const tag_name = TAGS[tag].name;

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
          <Tag
            tag={tag}
            type={filled ? "filled" : "lg"}
            active={activeTag === tag}
          />
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
