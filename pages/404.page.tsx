import React from "react";
import Link from "next/link";

import { Grid } from "../components/grid";
import { Text } from "../components/text";
import { Layout } from "../components/layout";
import { MetaTags } from "../components/meta_tags";

export default function Contact() {
  return (
    <Layout>
      <MetaTags />

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
