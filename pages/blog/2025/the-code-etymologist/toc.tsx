import Link from "next/link";
import React, { ReactNode } from "react";



import { Text } from "../../../../components/text";

import { Metadata } from "../../../../lib/blog";

import { meta as part0 } from "./meta";
import { meta as part1 } from "./part1-project-setup/meta";
import { meta as part2 } from "./part2-coding-guidelines/meta";
import { meta as part3 } from "./part3-development-workflows/meta";
import { meta as part4 } from "./part4-features/meta";
import { meta as part5 } from "./part5-ui-components-library/meta";
import { meta as part6 } from "./part6-data-structures/meta";
import { meta as part7 } from "./part7-technical-decisions/meta";

import styles from "./toc.module.scss";

type PartId = (typeof SERIES)[number]["id"];

const LAST_PUBLISHED_PART: PartId = 7;

const SERIES_BASE_URL = "/blog/2025/the-code-etymologist";

type Part = Metadata & {
  id: PartId;
  path: string;
};

const SERIES = [
  { ...part0, id: 0, path: "", subtitle: "Preface" },
  { ...part1, id: 1, path: "part1-project-setup" },
  { ...part2, id: 2, path: "part2-coding-guidelines" },
  { ...part3, id: 3, path: "part3-development-workflows" },
  { ...part4, id: 4, path: "part4-features" },
  { ...part5, id: 5, path: "part5-ui-components-library" },
  { ...part6, id: 6, path: "part6-data-structures" },
  { ...part7, id: 7, path: "part7-technical-decisions" },
] as const;

const DISPLAY_NEW = LAST_PUBLISHED_PART < SERIES[SERIES.length - 1].id;

type Props = {
  current: PartId;
};

export function TOC(props: Props) {
  return (
    <div>
      <Text as="p">
        <strong>The Code Etymologist</strong> is a multi-part series that covers
        typical software knowledge that deserves to be documented and shared
        within development teams.
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

    return <LinkTo part={part.id as PartId} scrollToTop={false} muted />;
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
  muted?: boolean;
};

export function LinkTo({
  part: id,
  hash,
  children,
  scrollToTop = true,
  muted = false,
}: LinkToProps) {
  const part = getPart(id);

  if (!part) {
    return null;
  }

  const path = getPath(id, hash);
  const text = children || part.subtitle;

  if (id > LAST_PUBLISHED_PART) {
    return (
      <Text color={muted ? "muted" : "default"}>
        {text} {id === LAST_PUBLISHED_PART + 1 && <i>(coming soon)</i>}
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