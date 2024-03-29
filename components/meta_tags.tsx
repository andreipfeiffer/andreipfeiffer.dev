import Head from "next/head";
import React, { ReactNode } from "react";

import { ATOM_FEED_URL } from "../lib/utils";

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
  image_width: number;
  image_height: number;
  children?: ReactNode;
};

export function MetaTags({ children, ...props }: Partial<MetaTags>) {
  const meta: MetaTags = { ...DEFAULT_META_TAGS, ...props };
  const publish_date = meta.article?.published_time ?? "";

  // append the publish date
  const image = !!meta.image
    ? `${WEB_URL}${meta.image}${publish_date && `?${publish_date}`}`
    : "";

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
          <meta property="og:publish_date" content={publish_date} />
          <meta property="og:article:published_time" content={publish_date} />
          <meta
            property="og:article:tag"
            content={meta.article.tags.join(", ")}
          />
          <meta name="keywords" content={meta.article.tags.join(", ")} />
        </>
      )}

      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:width" content={String(meta.image_width)} />
          <meta
            property="og:image:height"
            content={String(meta.image_height)}
          />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}

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
      <meta name="color-scheme" content="light dark" />
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
  image_width: 2400,
  image_height: 1260,
};
