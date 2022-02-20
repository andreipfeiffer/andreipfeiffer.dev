import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400&amp;display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="/dark-mode-no-flash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
