import Link from "next/link";
import React, { ReactNode } from "react";

import { Text } from "../../../components/text";

import { Metadata } from "../../../lib/blog";

import { meta as part1 } from "./part1-scalability-issues/meta";
import { meta as part2 } from "./part2-css-processors/meta";
import { meta as part3 } from "./part3-good-practices/meta";
import { meta as part4 } from "./part4-methologies-and-semantics/meta";
import { meta as part5 } from "./part5-atomic-css/meta";
import { meta as part6 } from "./part6-styles-encapsulation/meta";
import { meta as part7 } from "./part7-css-in-js/meta";
import { meta as part8 } from "./part8-type-safe-css/meta";

import styles from "./toc.module.scss";

type PartNr = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const LAST_PART: PartNr = 8;

const SERIES_BASE_URL = "/blog/scalable-css-evolution";

type Part = Metadata & {
  path: string;
};

const SERIES: Array<Part> = [
  { ...part1, path: "part1-scalability-issues" },
  { ...part2, path: "part2-css-processors" },
  { ...part3, path: "part3-good-practices" },
  { ...part4, path: "part4-methologies-and-semantics" },
  { ...part5, path: "part5-atomic-css" },
  { ...part6, path: "part6-styles-encapsulation" },
  { ...part7, path: "part7-css-in-js" },
  { ...part8, path: "part8-type-safe-css" },
];

type Props = {
  current: PartNr;
};

export function TOC(props: Props) {
  return (
    <div>
      <Text as="p">
        <strong>The evolution of scalable CSS</strong> is a multi-part chronicle
        intended to track the progress of tools and practices that enable us to
        write <em>maintainable CSS at scale</em>. The series is broken down into
        multiple parts:
      </Text>

      <ol className={styles.list}>
        <li>
          <Link href={SERIES_BASE_URL}>
            <a>Overview</a>
          </Link>
        </li>

        {SERIES.map((part, index) => {
          return <li key={index}>{renderText(part, index + 1)}</li>;
        })}
      </ol>

      <hr />
    </div>
  );

  function renderText(part: Part, part_nr: number): ReactNode {
    const isMatch = part.subtitle === getPart(props.current)?.subtitle;

    if (isMatch) {
      return <strong>{part.subtitle}</strong>;
    }

    return <LinkTo part={part_nr as PartNr} />;
  }
}

type LinkToProps = {
  part: PartNr;
  hash?: string;
  children?: string;
};

export function LinkTo({ part, hash, children }: LinkToProps) {
  const data = getPart(part);
  const path = getPath(part, hash);
  const text = children || data.subtitle;

  if (part > LAST_PART) {
    return (
      <Text color="muted">
        {text} <i>(coming soon)</i>
      </Text>
    );
  }

  return (
    <Link href={path}>
      <a>{text}</a>
    </Link>
  );
}

function getPart(part: PartNr): Part {
  return SERIES[part - 1];
}

function getPath(part: PartNr, hash?: string): string {
  let result = `${SERIES_BASE_URL}/${getPart(part).path}`;

  if (hash) {
    result += `#${hash}`;
  }

  return result;
}
