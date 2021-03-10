import React from "react";
import classNames from "classnames";

import { Text } from "../text";
import { Hamburger } from "./hamburger";
import { DarkModeToggle } from "./darkmode_toggle";
import { MainLink } from "./main_link";
import styles from "./nav.module.scss";
import { Box } from "../box";

export function Nav() {
  const [showMenu, toggleMenu] = React.useState(false);

  return (
    <nav className={styles.nav}>
      <div className={classNames(styles.menu, showMenu && styles.menu_open)}>
        <Box as="ul" bg="theme" className={styles.menu_list}>
          <MenuItem text="Talks" href="/talks" />
          <MenuItem text="Workshops" href="/workshops" />
          <MenuItem text="Blog" href="/blog" />
          <MenuItem text="About" href="/about" />
          <MenuItem text="Get in touch" href="/contact" />
        </Box>
      </div>

      <DarkModeToggle />

      <Hamburger
        label="Toggle menu"
        active={showMenu}
        onClick={() => toggleMenu(!showMenu)}
      />
    </nav>
  );
}

type MenuItemProps = {
  text: string;
  href: string;
};

function MenuItem({ text, href }: MenuItemProps) {
  return (
    <li>
      <MainLink href={href} activeClass={styles.menuitem_active}>
        <a className={styles.menuitem}>
          <Text size="h06" as="strong">
            {text}
          </Text>
        </a>
      </MainLink>
    </li>
  );
}
