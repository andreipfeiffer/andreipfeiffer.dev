import Head from "next/head";
// import Link from "next/link";

import { Layout, SITE_TITLE } from "../components/layout";
import { Text } from "../components/text";
import { Grid } from "../components/grid";
import { Spacer } from "../components/spacer";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <Grid.Full>
        <Text size="h00" as="h1">
          Andrei Pfeiffer
        </Text>
        <Spacer vertical="24" />
        <Text size="h03" as="p" color="muted">
          Eclectic Code Designer
        </Text>
        <Text size="h03" as="p">
          UI Engineer, web &amp; mobile
        </Text>
        <Text size="h03" as="p">
          Organizer of <a href="http://revojs.ro">revo.js</a> conf &amp;{" "}
          <a href="http://timjs.ro">tim.js</a> meetup
        </Text>
      </Grid.Full>
    </Layout>
  );
}
