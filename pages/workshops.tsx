import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import Link from "next/link";

export default function Workshops() {
  return (
    <Layout>
      <Head>
        <title>Workshops: {siteTitle}</title>
      </Head>

      <h1>Workshops</h1>
    </Layout>
  );
}
