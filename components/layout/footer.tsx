import React from "react";
import classNames from "classnames";

import { Text } from "../text";
import { Box } from "../box";
import { Flex } from "../flex";
import { getCurrentYear, SUBSCRIBE_URL } from "../../lib/utils";

import { pages } from "./pages";
import { MainLink } from "./main_link";
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
        <a href={SUBSCRIBE_URL}>subscribe</a> for updates.
      </Text>

      <Text size="m02" color="muted" className={styles.copyright}>
        &copy; Andrei Pfeiffer, 2020-{getCurrentYear()}
      </Text>
    </Box>
  );
}
