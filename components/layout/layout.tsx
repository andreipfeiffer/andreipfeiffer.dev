import React from "react";
import Head from "next/head";
import classNames from "classnames";
import useDarkMode from "use-dark-mode";

import { MainLink } from "./main_link";
import { Nav } from "./nav";
import { Footer } from "./footer";

import styles from "./layout.module.scss";

export const SITE_TITLE = "Andrei Pfeiffer, personal website & blog";
export const SITE_DESCR =
  "Hi, I'm Andrei Pfeiffer, an Ecletic Code Designer, UI developer for Web and Mobile, Organizer of revo.js conference &amp; tim.js meetup";

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
        <meta name="description" content={SITE_DESCR} />
        {/* <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />

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
