import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import useDarkMode from "use-dark-mode";

const name = "Andrei Pfeiffer";
export const siteTitle = "Andrei Pfeiffer, personal website & blog";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
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
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <h1>{name}</h1>
        ) : (
          <h2>
            <Link href="/">
              <a>{name}</a>
            </Link>
          </h2>
        )}

        <ToggleDarkMode />
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
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
