import React from "react";
import s from "./ListFlex.module.scss";

export function ListFlex() {
  return (
    <div className={s.list}>
      <div className={s.group}>
        <span className={s.label}>Posts</span>
        <span className={s.value}>123</span>
      </div>

      <div className={s.group}>
        <span className={s.label}>Followers</span>
        <span className={s.value}>456</span>
      </div>

      <div className={s.group}>
        <span className={s.label}>Likes</span>
        <span className={s.value}>9999</span>
      </div>
    </div>
  );
}
