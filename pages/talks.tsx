import React from "react";
import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";

import { Layout, SITE_TITLE } from "../components/layout";
import { useBreakpoint } from "../components/layout/useBreakpoint";
import { Grid } from "../components/grid";
import { Text } from "../components/text";
import { Spacer } from "../components/spacer";
import { Flex } from "../components/flex";
import { Button } from "../components/button";

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
            Below you'll find a non-comprehensive list of topics I've spoken
            about.
          </Text>
        </Grid.Col>
      </Grid>

      <Spacer vertical="120" />

      <Flex as="ul" type="stack" gap="140" className={styles.list}>
        {talks
          .filter((talk) => talk.old !== true)
          .map((talk, index) => renderTalk(talk, index))}
      </Flex>

      <Spacer vertical="140" />

      <Grid.Full>
        <Text as="h2" size="h02">
          Old and discontinued talks
        </Text>

        <Spacer vertical="40" />
      </Grid.Full>

      <Grid>
        <Grid.Col span={8}>
          <Flex as="ul" type="stack" gap="40" className={styles.list}>
            {talks
              .filter((talk) => talk.old === true)
              .map((talk, index) => renderOldTalk(talk, index))}
          </Flex>
        </Grid.Col>
      </Grid>
    </Layout>
  );

  function renderTalk(talk: Talk, index: number) {
    const image = (
      <Grid.Col span={5}>
        <figure className={styles.image}>
          {talk.image ? (
            <Image
              src={`/images/talks/${talk.image}`}
              width={1920}
              height={1080}
              layout="responsive"
            />
          ) : (
            <div
              style={{ background: "#888888", opacity: 0.1, paddingTop: "66%" }}
            ></div>
          )}

          {talk.urls && (
            <div className={styles.image_links}>
              {talk.urls.map((u) => (
                <PreviewButton type={u.type} url={u.url} key={u.type}>
                  {u.type === "code" ? u.label : u.type}
                </PreviewButton>
              ))}
            </div>
          )}
        </figure>
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

  function renderOldTalk(talk: Talk, index: number) {
    return (
      <li key={index}>
        <Text size="h06">{talk.date}</Text>
        <Text size="h04" as="h3">
          {talk.title}
        </Text>
        <Text size="m02" color="muted">
          {talk.type}
        </Text>
        {talk.abstract}
      </li>
    );
  }
}

type PreviewButtonProps = {
  children: string;
  url: string;
  type: "video" | "slides" | "code";
};

function PreviewButton({ url, type, children }: PreviewButtonProps) {
  return (
    <Button as="a" href={url}>
      <Text
        size="m02"
        className={classNames(styles.button, styles[`button_${type}`])}
      >
        {children}
      </Text>
    </Button>
  );
}
