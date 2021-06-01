import React from "react";
import { Fullpage } from "./fullpage";
import s from "./sidebyside.module.scss";

type Header = { lang?: string; file?: string };

type Props = {
  children: JSX.Element[];
  left?: Header;
  right?: Header;
};

export function SideBySide({ children, left, right }: Props) {
  return (
    <Fullpage>
      <div className={s.container}>
        <div className={s.side}>
          {renderHeader(left)}
          {children[0]}
        </div>
        <div className={s.side}>
          {renderHeader(right)}
          {children[1]}
        </div>
      </div>
    </Fullpage>
  );

  function renderHeader(header?: Header) {
    if (!header) {
      return null;
    }
    return (
      <header className={s.header}>
        <span className={s.file}>{header.file}</span>
        <span className={s.lang}>{header.lang}</span>
      </header>
    );
  }
}
