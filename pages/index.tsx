import Head from "next/head";
import { Layout, SITE_TITLE } from "../components/layout";
// import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <h1>Andrei Pfeiffer</h1>

      <h2>
        Eclectic Code Designer
        <br />
        <small>UI Engineer, web &amp; mobile</small>
        <br />
        <small>Organizer of revo.js conf &amp; tim.js meetup</small>
      </h2>
    </Layout>
  );
}
