import React from "react";
import Head from "next/head";
import styles from "./layout.module.scss";
import { Link } from "./Link";
import useDarkMode from "use-dark-mode";

const name = "Andrei Pfeiffer";
export const SITE_TITLE = "Andrei Pfeiffer, personal website & blog";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children, className } = props;
  const darkMode = useDarkMode();
  const [logo, setLogo] = React.useState<"black" | "white">("black");

  let mainStyles = styles.main;
  className && (mainStyles += ` ${className}`);

  React.useEffect(() => {
    setLogo(darkMode.value ? "white" : "black");
  }, [darkMode.value]);

  return (
    <div className={styles.container}>
      <Head>
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
      </Head>

      <header>
        <Link href="/">
          <a>
            <img
              src={`/images/logo_${logo}.svg`}
              alt="Andrei Pfeiffer logo"
              width={80}
              height={40}
            />
          </a>
        </Link>

        <ul>
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
        </ul>

        <ToggleDarkMode />
      </header>

      <main className={mainStyles}>{children}</main>

      <footer>
        Follow me on Twitter{" "}
        <a href="https://twitter.com/pfeiffer_andrei">@pfeiffer_andrei</a>
      </footer>
    </div>
  );
}

function ToggleDarkMode() {
  const darkMode = useDarkMode();
  return (
    <button type="button" onClick={darkMode.toggle}>
      {`Toggle dark mode`}
    </button>
  );
}
