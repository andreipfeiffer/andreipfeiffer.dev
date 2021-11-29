import React from "react";

import styles from "./emoji-list.module.scss";

type EmojiListProps = {
  children: any;
};

export function EmojiList({ children }: EmojiListProps) {
  return <ul className={styles.list}>{children}</ul>;
}

type EmojiListItemProps = {
  emoji: string;
  children: any;
};

EmojiList.Item = function EmojiListItem({
  children,
  emoji,
}: EmojiListItemProps) {
  return (
    <li data-emoji={emoji} className={styles.item}>
      {children}
    </li>
  );
};
