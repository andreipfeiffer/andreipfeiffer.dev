import React from "react";
import Head from "next/head";

import { Layout, SITE_TITLE } from "../components/layout";
import { useBreakpoint } from "../components/layout/useBreakpoint";
import { Grid } from "../components/grid";
import { Text } from "../components/text";
import { Spacer } from "../components/spacer";
import { Flex } from "../components/flex";

import { talks, Talk } from "../lib/talks";

import styles from "./talks.module.scss";

export default function Talks() {
  const { breakpoint } = useBreakpoint();

  return (
    <Layout>
      <Head>
        <title>Talks and Live coding: {SITE_TITLE}</title>
      </Head>

      {breakpoint && <Spacer vertical="100" />}

      <Grid.Full>
        <Text size="h00" as="h1">
          Talks &amp; <Text nowrap={!!breakpoint}>Live coding</Text>
        </Text>
      </Grid.Full>

      <Spacer vertical="60" />

      <Grid>
        <Grid.Col span={5}>
          <Text size="p01">
            During the past {new Date().getFullYear() - 2013} years, I gave
            various talks at conferences, meetups and private events, most of
            them focused on <strong>JavaScript</strong>,{" "}
            <strong>UI Development</strong>, <strong>Web</strong> and{" "}
            <strong>Mobile</strong>.
          </Text>
          <br />
          <br />
          <Text size="p01">
            Below is a non-comprehensive list of topics I've spoken about.
          </Text>
        </Grid.Col>
      </Grid>

      <Spacer vertical="120" />

      <Flex as="ul" type="stack" gap="140" className={styles.list}>
        {talks.map((talk, index) => renderTalk(talk, index))}
      </Flex>
    </Layout>
  );

  function renderTalk(talk: Talk, index: number) {
    const image = (
      <Grid.Col span={5}>
        <div
          style={{ background: "#888888", opacity: 0.1, paddingTop: "66%" }}
        ></div>
      </Grid.Col>
    );

    const header = (
      <>
        <Text size="h06" display="block">
          {talk.date}
        </Text>
        <Spacer vertical="8" />
        <Text as="em" size="m02" color="muted" display="block">
          {talk.type}
        </Text>
        <Spacer vertical="8" />
        <Text size="h02_5" as="h2">
          {talk.title}
        </Text>
      </>
    );

    if (breakpoint === "" || breakpoint === "sm") {
      return (
        <Grid.Full as="li" key={index}>
          {header}
          <Spacer vertical="32" />
          {image}
          <Spacer vertical="32" />
          {talk.abstract}
        </Grid.Full>
      );
    }

    const content = (
      <Grid.Col span={6}>
        {header}
        <Spacer vertical="32" />
        {talk.abstract}
      </Grid.Col>
    );

    const item =
      index % 2 === 0 ? (
        <>
          {content}
          <Grid.Col span={1} />
          {image}
        </>
      ) : (
        <>
          {image}
          <Grid.Col span={1} />
          {content}
        </>
      );

    return (
      <Grid as="li" key={index}>
        {item}
      </Grid>
    );
  }
}
