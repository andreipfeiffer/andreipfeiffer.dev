import React from "react";
import Head from "next/head";

import { Grid } from "../components/grid";
import { Text } from "../components/text";
import { Spacer } from "../components/spacer";
import { Layout, SITE_TITLE } from "../components/layout";
import { useBreakpoint } from "../components/layout/useBreakpoint";
import Link from "next/link";

export default function Contact() {
  const { breakpoint } = useBreakpoint();

  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <Grid.Full>
        <Text size="h00" as="h1">
          Page not found ;(
        </Text>

        <br />
        <br />

        <Text>
          If you think there should have been a page here, please{" "}
          <Link href="/contact">
            <a>let me know</a>
          </Link>
          .
          <br />
          <strong>Thank you for your understanding.</strong>
        </Text>
      </Grid.Full>
    </Layout>
  );
}
