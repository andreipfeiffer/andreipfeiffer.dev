import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import Link from "next/link";

export default function Talks() {
  return (
    <Layout>
      <Head>
        <title>Talks: {siteTitle}</title>
      </Head>

      <h1>Talks</h1>
    </Layout>
  );
}
