import React, { ReactNode } from "react";

import { Text } from "../../../components/text";

import { Metadata } from "../../../lib/blog";

import { meta as part1 } from "./part1-scalability-issues/meta";
import { meta as part2 } from "./part2-preprocessors/meta";
import { meta as part3 } from "./part3-good-practices/meta";
import { meta as part4 } from "./part4-methologies-and-frameworks/meta";
import { meta as part5 } from "./part5-encapsulation/meta";
import { meta as part6 } from "./part6-css-in-js/meta";
import { meta as part7 } from "./part7-type-safety/meta";

import styles from "./toc.module.scss";

type PartNr = 1 | 2 | 3 | 4 | 5 | 6 | 7;

type Part = Metadata & {
  path: string;
};

const SERIES: Array<Part> = [
  { ...part1, path: "part1-scalability-issues" },
  { ...part2, path: "part2-preprocessors" },
  { ...part3, path: "part3-good-practices" },
  { ...part4, path: "part4-methologies-and-frameworks" },
  { ...part5, path: "part5-encapsulation" },
  { ...part6, path: "part6-css-in-js" },
  { ...part7, path: "part7-type-safety" },
];

const LAST_PART: PartNr = 4;

type Props = {
  current: PartNr;
};

export function TOC(props: Props) {
  return (
    <ol className={styles.list}>
      {SERIES.map((part, index) => {
        // const current
        return <li key={index}>{renderText(part, index + 1)}</li>;
      })}
    </ol>
  );

  function renderText(part: Part, part_nr: number): ReactNode {
    const isMatch = part.subtitle === SERIES[props.current - 1]?.subtitle;

    if (part_nr > LAST_PART) {
      return (
        <Text color="muted">
          {part.subtitle} <i>(coming soon)</i>
        </Text>
      );
    }

    if (isMatch) {
      return <strong>{part.subtitle}</strong>;
    }

    return <a href={`./${part.path}`}>{part.subtitle}</a>;
  }
}
