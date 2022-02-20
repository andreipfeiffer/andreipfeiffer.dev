import { Feed } from "feed";
import fs from "fs";
import { GetStaticProps } from "next";
import React from "react";

import { Button } from "../components/button";
import { Grid } from "../components/grid";
import { Layout } from "../components/layout";
import { MetaTags, META_TITLE, WEB_URL } from "../components/meta_tags";
import { Spacer } from "../components/spacer";
import { Text } from "../components/text";

import { getRssPosts } from "../lib/blog";
import { ATOM_FEED_URL, SUBSCRIBE_URL } from "../lib/utils";

interface Props {
  // rss_feed: string;
  atom_feed: string;
}

export default function Subscribe(props: Props) {
  return (
    <Layout>
      <MetaTags title={`Subscribe: ${META_TITLE}`} />

      <Grid.Full>
        <Text size="h01" as="h1">
          Subscribe for updates
        </Text>
      </Grid.Full>

      <Spacer vertical="24" />

      <Grid.Full>
        <Text nowrap>
          <Button href={SUBSCRIBE_URL} as="a" size="large">
            Email
          </Button>

          <Button href={`/${props.atom_feed}`} as="a" size="large">
            RSS/Atom Feed
          </Button>
        </Text>
      </Grid.Full>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  await generateRssFeed();
  return {
    props: {
      // rss_feed: RSS_FEED_URL,
      atom_feed: ATOM_FEED_URL,
    },
  };
};

const generateRssFeed = async () => {
  const posts = getRssPosts();
  const date = new Date();
  const author = {
    name: "Andrei Pfeiffer",
    email: "andrei@upsidedown.ro",
    link: "https://twitter.com/pfeiffer_andrei",
  };

  const feed = new Feed({
    title: "Andrei Pfeiffer, personal blog",
    description:
      "This blog if focused on technical content related to Front-End technologies and UI development.",
    language: "en",
    id: WEB_URL,
    link: WEB_URL,
    image: `${WEB_URL}/images/logo_black.svg`,
    favicon: `${WEB_URL}/favicon-32x32.png`,
    copyright: `All rights reserved 2020-${date.getFullYear()}, Andrei Pfeiffer`,
    updated: date,
    feedLinks: {
      // rss2: `${WEB_URL}/${RSS_FEED_URL}`,
      atom: `${WEB_URL}/${ATOM_FEED_URL}`,
    },
    author,
  });

  posts.forEach((post) => {
    // for some reason, the id starts with "./"
    const url = `${WEB_URL}/blog/${post.id.replace("./", "")}`;
    const { title, subtitle, intro, date, cover } = post.meta;

    feed.addItem({
      title: `${title}${subtitle ? ":" + subtitle : ""}`,
      id: url,
      link: url,
      description: intro,
      // content: ``,
      author: [author],
      date: new Date(date),
      image: cover,
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  // fs.writeFileSync(`./public/${RSS_FEED_URL}`, feed.rss2());
  fs.writeFileSync(`./public/${ATOM_FEED_URL}`, feed.atom1());
};
