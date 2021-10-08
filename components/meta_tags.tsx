import Head from "next/head";
import React, { ReactNode } from "react";

import { ATOM_FEED_URL } from "../pages/subscribe.page";

type MetaTags = {
  title: string;
  description: string;
  // https://ogp.me/#types
  type: "website" | "article";
  article?: {
    tags: string[];
    /** YYYY-mm-DD */
    published_time: string;
  };
  image: string;
  children?: ReactNode;
};

export function MetaTags({ children, ...props }: Partial<MetaTags>) {
  const meta: MetaTags = { ...DEFAULT_META_TAGS, ...props };

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      ></meta>

      <title>{meta.title}</title>
      <meta name="author" content="Andrei Pfeiffer" />
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} key="og_title" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content="andreipfeiffer.dev" />
      <meta property="og:type" content="article" />
      {!!meta.article && (
        <>
          <meta property="og:article:author" content="Andrei Pfeiffer" />
          <meta
            property="og:article:published_time"
            content={meta.article.published_time}
          />
          <meta
            property="og:article:tag"
            content={meta.article.tags.join(", ")}
          />
          <meta name="keywords" content={meta.article.tags.join(", ")} />
        </>
      )}
      {!!meta.image && (
        <>
          <meta property="og:image" content={`${WEB_URL}${meta.image}`} />
          <meta property="og:image:width" content="2400" />
          <meta property="og:image:height" content="1260" />
          <meta name="twitter:image" content={`${WEB_URL}${meta.image}`} />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:creator" content="@pfeiffer_andrei" />

      {children}

      <link
        rel="alternate"
        type="application/atom+xml"
        title="andreipfeiffer.dev Blog"
        href={`/${ATOM_FEED_URL}`}
      />

      <link rel="preconnect" href="https://fonts.gstatic.com" />

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
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400&amp;display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

export const META_TITLE = "Andrei Pfeiffer, personal website and blog";
export const WEB_URL = "https://andreipfeiffer.dev";

const DEFAULT_META_TAGS: MetaTags = {
  title: META_TITLE,
  description:
    "Hi, I'm Andrei Pfeiffer, an Eclectic Code Designer, UI developer for Web and Mobile and Organizer of revo.js conference and tim.js meetup",
  type: "website",
  image: "/images/share/andreipfeiffer.dev.png",
};
