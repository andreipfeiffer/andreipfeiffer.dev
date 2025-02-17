import React from "react";

import { Grid } from "../components/grid";
import { Layout } from "../components/layout";
import { useBreakpoint } from "../components/layout/useBreakpoint";
import { MetaTags, META_TITLE } from "../components/meta_tags";
import { Spacer } from "../components/spacer";
import { Text } from "../components/text";

export default function Contact() {
  const { breakpoint } = useBreakpoint();

  return (
    <Layout>
      <MetaTags title={`Get in touch: ${META_TITLE}`} />

      <Grid.Full>
        <Text size="h00" as="h1">
          Get in touch
        </Text>
      </Grid.Full>

      <Spacer vertical="24" />

      <Grid.Full>
        <p>
          📧 The easiest way to get in touch is by email{" "}
          <a href="mailto:andrei@upsidedown.ro" className="code">
            <strong>andrei@upsidedown.ro</strong>
          </a>
          .
        </p>
        <Spacer vertical={breakpoint ? "16" : "32"} />
        <p>
          🐦 Using Twitter instead? my DMs are open{" "}
          <a href="https://twitter.com/pfeiffer_andrei" className="code">
            <strong>@pfeiffer_andrei</strong>
          </a>
          .
        </p>
        <Spacer vertical={breakpoint ? "16" : "32"} />
        <p>
          🦋 Have you left Twitter? You can also find me on Bluesky{" "}
          <a href="https://bsky.app/profile/andreipfeiffer.dev" className="code">
            <strong>@andreipfeiffer.dev</strong>
          </a>
          .
        </p>
        <Spacer vertical={breakpoint ? "40" : "60"} />
        <p>
          Prefer other methods? I also hang out on{" "}
          <a href="https://www.linkedin.com/in/andreipfeiffer/" className="code">
            <strong>Linkedin</strong>
          </a>{" "} and{" "}
          <a href="https://github.com/andreipfeiffer" className="code">
            <strong>Github</strong>
          </a>.
        </p>
      </Grid.Full>
    </Layout>
  );
}
