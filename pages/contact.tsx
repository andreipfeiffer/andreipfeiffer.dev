import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import Link from "next/link";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Get in touch: {siteTitle}</title>
      </Head>

      <h1>Get in touch</h1>

      <form action="#" method="post">
        <label>
          <span>Your email address:</span>
          <input type="text" autoFocus />
        </label>
        <br />
        <label>
          <span>Subject:</span>
          <input type="text" />
        </label>
        <br />
        <label>
          <span>Content:</span>
          <textarea></textarea>
        </label>
      </form>

      <br />

      <p>
        <strong>Subscribe to blog posts:</strong>
      </p>
      <Subscribe />
    </Layout>
  );
}

function Subscribe() {
  return (
    <form action="#" method="post">
      <label>
        <span>Email address:</span>
        <input type="text" />
      </label>
    </form>
  );
}
