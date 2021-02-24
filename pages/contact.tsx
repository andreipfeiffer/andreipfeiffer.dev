import Head from "next/head";
import { Layout, SITE_TITLE } from "../components/layout";
// import Link from "next/link";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Get in touch: {SITE_TITLE}</title>
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
          <select>
            <option value="contact">General inquiry</option>
            <option value="speaking">Speaking engagement</option>
            <option value="workshop">Workhops or Trainings</option>
          </select>
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
    <div id="mc_embed_signup">
      <form
        action="https://dev.us2.list-manage.com/subscribe/post?u=a7ac7926ed477a5e810ed46f7&amp;id=51b196576b"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>

          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">First Name </label>
            <input
              type="text"
              defaultValue=""
              name="FNAME"
              className=""
              id="mce-FNAME"
            />
          </div>

          <div className="mc-field-group">
            <label htmlFor="mce-LNAME">Last Name </label>
            <input
              type="text"
              defaultValue=""
              name="LNAME"
              className=""
              id="mce-LNAME"
            />
          </div>

          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>

          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_a7ac7926ed477a5e810ed46f7_51b196576b"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
