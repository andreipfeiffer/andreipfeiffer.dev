import React from "react";
import { Fullpage } from "./fullpage";
import s from "./sidebyside.module.scss";

type Header = { lang?: string; file?: string };

type SideBySideProps = {
  children: JSX.Element[];
  left?: Header;
  right?: Header;
};

export function SideBySide({ children, left, right }: SideBySideProps) {
  return (
    <Fullpage>
      <div className={s.container}>
        <Side header={left}>{children[0]}</Side>
        <Side header={right}>{children[1]}</Side>
      </div>
    </Fullpage>
  );
}

type SideProps = {
  children: JSX.Element;
  header?: Header;
};

export function Side({ children, header }: SideProps) {
  return (
    <div className={s.side}>
      {renderHeader(header)}
      {children}
    </div>
  );

  function renderHeader(header?: Header) {
    if (!header) {
      return null;
    }

    return (
      <header className={s.header}>
        <span className={s.file}>{header.file}</span>
        {!!header.lang && <span className={s.lang}>{header.lang}</span>}
      </header>
    );
  }
}
