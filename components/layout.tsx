import React from "react";
import Head from "next/head";
import useDarkMode from "use-dark-mode";

import { Link } from "./Link";
import { Text } from "../components/text";
import styles from "./layout.module.scss";
import { Spacer } from "./spacer";
import classNames from "classnames";

export const SITE_TITLE = "Andrei Pfeiffer, personal website & blog";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Layout(props: Props) {
  const { children, className } = props;
  const darkMode = useDarkMode();
  const [logo, setLogo] = React.useState<"black" | "white">("black");

  let mainStyles = styles.main;
  className && (mainStyles += ` ${className}`);

  React.useEffect(() => {
    setLogo(darkMode.value ? "white" : "black");
  }, [darkMode.value]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Andrei Pfeiffer, Ecletic Code Designer, UI developer for Web and Mobile, Organizer of revo.js conference &amp; tim.js meetup"
        />
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
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@1&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={classNames(styles.padded, styles.header)}>
        <Link href="/">
          <a>
            <img
              src={`/images/logo_${logo}.svg`}
              alt="Andrei Pfeiffer logo"
              width={60}
              height={30}
            />
          </a>
        </Link>

        {/* <ul>
          <li>
            <Link href="/talks" activeClass={styles.active}>
              <a>Talks</a>
            </Link>
          </li>
          <li>
            <Link href="/workshops" activeClass={styles.active}>
              <a>Workshops</a>
            </Link>
          </li>
          <li>
            <Link href="/blog" activeClass={styles.active}>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/about" activeClass={styles.active}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" activeClass={styles.active}>
              <a>Get in touch</a>
            </Link>
          </li>
        </ul> */}

        <ToggleDarkMode />
      </header>

      <main className={mainStyles}>{children}</main>

      <Spacer vertical="100" />

      <footer className={classNames(styles.padded, styles.footer)}>
        <Text size="m01">
          Follow me on Twitter{" "}
          <a href="https://twitter.com/pfeiffer_andrei">@pfeiffer_andrei</a>
        </Text>

        <Text size="m02" color="muted" className={styles.copyright}>
          &copy; Andrei Pfeiffer, 2020. All rights reserved.
        </Text>
      </footer>
    </div>
  );
}

function ToggleDarkMode() {
  const darkMode = useDarkMode();

  return (
    <div className={styles.toggle}>
      <input
        id="toggle-dark-mode"
        type="checkbox"
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <label htmlFor="toggle-dark-mode">Toggle dark mode</label>
    </div>
  );
}
