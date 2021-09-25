import classNames from "classnames";
import Link from "next/link";
import React from "react";

import { getCurrentYear } from "../../lib/utils";
import { Box } from "../box";
import { Flex } from "../flex";
import { Text } from "../text";

import { MainLink } from "./main_link";
import { pages } from "./pages";
import { useBreakpoint } from "./useBreakpoint";

import styles from "./footer.module.scss";

export function Footer() {
  const { breakpoint } = useBreakpoint();

  return (
    <Box
      bg={breakpoint === "" ? "inversed" : "none"}
      as="footer"
      className={classNames(styles.padded, styles.footer)}
    >
      <nav aria-label="Footer navigation" className={styles.footer_nav}>
        <Flex type="stack" gap="24">
          {pages.map(({ text, url }) => (
            <MainLink href={url} key={text}>
              <a className={styles.footer_nav_item}>
                <Text size="h05">{text}</Text>
              </a>
            </MainLink>
          ))}
        </Flex>
      </nav>

      <Text size="m02">
        Follow me on Twitter{" "}
        <a href="https://twitter.com/pfeiffer_andrei">@pfeiffer_andrei</a> or{" "}
        <Link href="/subscribe">
          <a>subscribe</a>
        </Link>{" "}
        for updates.
      </Text>

      <Text size="m02" color="muted" className={styles.copyright}>
        &copy; Andrei Pfeiffer, 2020-{getCurrentYear()}
      </Text>
    </Box>
  );
}
