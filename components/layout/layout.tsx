import classNames from "classnames";
import Head from "next/head";
import React from "react";
import useDarkMode from "use-dark-mode";

import { MetaTags } from "../meta_tags";

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
  const darkMode = useDarkMode(false, {
    onChange: (value) =>
      document.body.setAttribute("data-darkmode", String(value)),
  });

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
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        ></meta>

        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      <MetaTags />

      {/* use this to have a static element before main, so we can center align main using flex */}
      <div style={{ height: "80px" }}>
        <header className={headerStyles}>
          <MainLink href="/">
            <a className={styles.logo}>
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
