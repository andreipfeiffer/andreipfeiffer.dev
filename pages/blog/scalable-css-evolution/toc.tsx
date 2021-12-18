import Link from "next/link";
import React, { ReactNode } from "react";

import { Text } from "../../../components/text";

import { Metadata } from "../../../lib/blog";

import { meta as part0 } from "./meta";
import { meta as part1 } from "./part1-scalability-issues/meta";
import { meta as part2 } from "./part2-good-practices/meta";
import { meta as part3 } from "./part3-css-processors/meta";
import { meta as part4 } from "./part4-methologies-and-semantics/meta";
import { meta as part5 } from "./part5-styles-encapsulation/meta";
import { meta as part6 } from "./part6-atomic-css/meta";
import { meta as part7 } from "./part7-css-in-js/meta";
import { meta as part8 } from "./part8-type-safe-css/meta";
import { meta as part9 } from "./part9-epilogue/meta";

import styles from "./toc.module.scss";

type PartId = typeof SERIES[number]["id"];

const LAST_PUBLISHED_PART: PartId = 9;
const DISPLAY_NEW = true;

const SERIES_BASE_URL = "/blog/scalable-css-evolution";

type Part = Metadata & {
  id: PartId;
  path: string;
};

const SERIES = [
  { ...part0, id: 0, path: "", subtitle: "Introduction" },
  { ...part1, id: 1, path: "part1-scalability-issues" },
  { ...part2, id: 2, path: "part2-good-practices" },
  { ...part3, id: 3, path: "part3-css-processors" },
  { ...part4, id: 4, path: "part4-methologies-and-semantics" },
  { ...part5, id: 5, path: "part5-styles-encapsulation" },
  { ...part6, id: 6, path: "part6-atomic-css" },
  { ...part7, id: 7, path: "part7-css-in-js" },
  { ...part8, id: 8, path: "part8-type-safe-css" },
  { ...part9, id: 9, path: "part9-epilogue" },
] as const;

type Props = {
  current: PartId;
};

export function TOC(props: Props) {
  return (
    <div>
      <Text as="p">
        <strong>The evolution of scalable CSS</strong> is a multi-part chronicle
        intended to document the progress of tools, practices and techniques
        that enable us to write <em>maintainable CSS at scale</em>.
      </Text>

      <ol className={styles.list}>
        {(SERIES as Readonly<Part[]>).map((part) => {
          return (
            <li key={part.id}>
              {renderText(part)}
              {renderNew(part)}
            </li>
          );
        })}
      </ol>

      <hr />
    </div>
  );

  function renderText(part: Part): ReactNode {
    const isMatch = part.subtitle === getPart(props.current)?.subtitle;

    if (isMatch) {
      return <strong>{part.subtitle}</strong>;
    }

    return <LinkTo part={part.id as PartId} scrollToTop={false} />;
  }

  function renderNew(part: Part): ReactNode {
    if (DISPLAY_NEW && LAST_PUBLISHED_PART === part.id) {
      return (
        <>
          {" "}
          <span className={styles.new}>new</span>
        </>
      );
    }

    return null;
  }
}

type LinkToProps = {
  part: PartId;
  hash?: string;
  children?: ReactNode;
  scrollToTop?: boolean;
};

export function LinkTo({
  part: id,
  hash,
  children,
  scrollToTop = true,
}: LinkToProps) {
  const part = getPart(id);

  if (!part) {
    return null;
  }

  const path = getPath(id, hash);
  const text = children || part.subtitle;

  if (id > LAST_PUBLISHED_PART) {
    return (
      <Text color="muted">
        {text} <i>(coming soon)</i>
      </Text>
    );
  }

  return (
    <Link href={path} scroll={scrollToTop}>
      <a>{text}</a>
    </Link>
  );
}

function getPart(id: PartId): Part | undefined {
  return SERIES.find((p) => p.id === id);
}

function getPath(id: PartId, hash?: string): string {
  const part = getPart(id);

  if (!part) {
    return "";
  }

  let result = `${SERIES_BASE_URL}/${part.path}`;

  if (hash) {
    result += `#${hash}`;
  }

  return result;
}
