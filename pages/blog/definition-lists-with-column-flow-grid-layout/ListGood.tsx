import React from "react";
import s from "./ListGood.module.scss";

type Props = {
  flow: "row" | "column";
};

export default function List(props: Props) {
  const { flow = "row" } = props;

  return (
    <dl className={s.list} style={{ gridAutoFlow: flow }}>
      <dt className={s.label}>Posts</dt>
      <dd className={s.value}>123</dd>

      <dt className={s.label}>Followers</dt>
      <dd className={s.value}>456</dd>

      <dt className={s.label}>Likes</dt>
      <dd className={s.value}>9999</dd>
    </dl>
  );
}
