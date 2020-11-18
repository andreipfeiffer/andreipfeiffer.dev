import React from "react";
import s from "./SideBySide.module.scss";

type Props = {
  children: React.ReactChildren;
};

export default function SideBySide(props: Props) {
  return <div className={s.container}>{props.children}</div>;
}
