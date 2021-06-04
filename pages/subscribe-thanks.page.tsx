import React from "react";
import Head from "next/head";

import { Grid } from "../components/grid";
import { Text } from "../components/text";
import { Spacer } from "../components/spacer";
import { Layout, SITE_TITLE } from "../components/layout";
import { useBreakpoint } from "../components/layout/useBreakpoint";

export default function Contact() {
  const { breakpoint } = useBreakpoint();

  return (
    <Layout>
      <Head>
        <title>Thank you for subscribing at {SITE_TITLE}</title>
      </Head>

      {breakpoint && <Spacer vertical="100" />}

      <Grid.Full>
        <Text size="h00" as="h1">
          Thank you for subscribing!
        </Text>
      </Grid.Full>

      <Spacer vertical="60" />

      <Grid.Full>
        <Text as="p">
          I will only send emails when new content is available, like blog posts
          or workshops.
        </Text>

        <Text as="p">
          Your email is safe, as I will not share it with any 3rd party.
        </Text>
        <Text as="p">You can unsubscribe at anytime.</Text>
      </Grid.Full>
    </Layout>
  );
}
