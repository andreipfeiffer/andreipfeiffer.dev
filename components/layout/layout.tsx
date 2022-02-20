import classNames from "classnames";
import React from "react";

import { useCustomDarkMode } from "../useCustomDarkMode";

import { Footer } from "./footer";
import { MainLink } from "./main_link";
import { Nav } from "./nav";

import styles from "./layout.module.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Layout(props: Props) {
  const { children, className } = props;

  const darkMode = useCustomDarkMode();

  const [logo, setLogo] = React.useState<"black" | "white">("black");

  const headerStyles = classNames(styles.padded, styles.header);
  const mainStyles = classNames(styles.main, className);

  React.useEffect(() => {
    setLogo(darkMode.value ? "white" : "black");
  }, [darkMode.value]);

  React.useEffect(() => {
    function onScroll() {
      document
        .querySelector("body")!
        .setAttribute("data-scrolled", String(window.scrollY > 100));
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* use this to have a static element before main, so we can center align main using flex */}
      <div style={{ height: "80px" }}>
        <header className={headerStyles}>
          <MainLink href="/">
            <a className={styles.logo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/logo_${logo}.svg`}
                alt="Andrei Pfeiffer logo"
                width={60}
                height={30}
              />
            </a>
          </MainLink>

          <Nav />
        </header>
      </div>

      <main className={mainStyles}>{children}</main>

      <Footer />
    </div>
  );
}
