import React from "react";
import { Fullpage } from "./fullpage";
import s from "./sidebyside.module.scss";

type Props = {
  children: JSX.Element[];
};

export function SideBySide(props: Props) {
  return (
    <Fullpage>
      <div className={s.container}>{props.children}</div>
    </Fullpage>
  );
}
