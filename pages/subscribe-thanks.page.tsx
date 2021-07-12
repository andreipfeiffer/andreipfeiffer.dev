import React from "react";

import { Grid } from "../components/grid";
import { Layout } from "../components/layout";
import { useBreakpoint } from "../components/layout/useBreakpoint";
import { MetaTags } from "../components/meta_tags";
import { Spacer } from "../components/spacer";
import { Text } from "../components/text";

export default function Contact() {
  const { breakpoint } = useBreakpoint();

  return (
    <Layout>
      <MetaTags title={`Thank you for subscribing to andreipfeiffer.dev`} />

      {breakpoint && <Spacer vertical="100" />}

      <Grid.Full>
        <Text size="h00" as="h1">
          Thank you for subscribing!
        </Text>
      </Grid.Full>

      <Spacer vertical="60" />

      <Grid.Full>
        <Text as="p" size="p01">
          Your subscription is confirmed!
        </Text>

        <br />

        <Text as="p">
          I really appreciate your interest in my content. <br />
          <strong>Thank you dearly for your support.</strong>
        </Text>
      </Grid.Full>
    </Layout>
  );
}
