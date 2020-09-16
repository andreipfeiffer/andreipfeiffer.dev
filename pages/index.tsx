import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h1>
        Eclectic Code Designer
        <br />
        <small>UI Engineer, web &amp; mobile</small>
        <br />
        <small>Organizer of revo.js conf &amp; tim.js meetup</small>
      </h1>
    </Layout>
  );
}
