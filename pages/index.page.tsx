import React from "react";

import { Grid } from "../components/grid";
// import Link from "next/link";
import { Layout } from "../components/layout";
import { MetaTags } from "../components/meta_tags";
import { Spacer } from "../components/spacer";
import { Text } from "../components/text";

export default function Home() {
  return (
    <Layout>
      <MetaTags />

      <Grid.Full>
        <Text size="h01" as="h1">
          Andrei Pfeiffer
        </Text>

        <Spacer vertical="24" />

        <Text size="h03" as="p">
          Eclectic Code Designer
        </Text>

        <Spacer vertical="16" />

        <Text size="h03" as="p">
          Organizer of{" "}
          <Text nowrap>
            <a href="http://revojs.ro">revo.js</a> conference
          </Text>{" "}
          &amp;{" "}
          <Text nowrap>
            <a href="http://timjs.ro">tim.js</a> meetup
          </Text>
        </Text>
      </Grid.Full>
    </Layout>
  );
}
