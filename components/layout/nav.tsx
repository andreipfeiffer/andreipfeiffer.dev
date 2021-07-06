import classNames from "classnames";
import React from "react";

import { Box } from "../box";
import { Text } from "../text";

import { DarkModeToggle } from "./darkmode_toggle";
import { Hamburger } from "./hamburger";
import { MainLink } from "./main_link";
import { pages } from "./pages";

import styles from "./nav.module.scss";

export function Nav() {
  const [showMenu, toggleMenu] = React.useState(false);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={classNames(styles.menu, showMenu && styles.menu_open)}>
        <Box as="ul" bg="theme" className={styles.menu_list}>
          <MenuItem text="Home" href="/" exact={true} />

          {pages.map(({ text, url }) => (
            <MenuItem key={text} text={text} href={url} />
          ))}
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
  exact?: boolean;
};

function MenuItem({ text, href, exact = false }: MenuItemProps) {
  return (
    <li>
      <MainLink href={href} activeClass={styles.menuitem_active} exact={exact}>
        <a className={styles.menuitem}>
          <Text size="h06" as="strong">
            {text}
          </Text>
        </a>
      </MainLink>
    </li>
  );
}
