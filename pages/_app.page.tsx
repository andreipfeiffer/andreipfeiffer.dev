import { AppProps } from "next/app";

import "../styles/global.scss";
import "../styles/highlight-dark.scss";
import "../styles/highlight-light.scss";
import "../styles/highlight.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
