import React from "react";

import { Grid } from "../components/grid";
import { Text } from "../components/text";
import { Spacer } from "../components/spacer";
import { Layout } from "../components/layout";
import { useBreakpoint } from "../components/layout/useBreakpoint";
import { MetaTags, META_TITLE } from "../components/meta_tags";

export default function Contact() {
  const { breakpoint } = useBreakpoint();

  return (
    <Layout>
      <MetaTags title={`Get in touch: ${META_TITLE}`} />

      {breakpoint && <Spacer vertical="100" />}

      <Grid.Full>
        <Text size="h00" as="h1">
          Get in touch
        </Text>
      </Grid.Full>

      <Spacer vertical="60" />

      <Grid.Full>
        <Text as="p">
          If you want to contact me, my DMs are open on Twitter{" "}
          <a href="https://twitter.com/pfeiffer_andrei">
            <strong>@pfeiffer_andrei</strong>
          </a>
          .
        </Text>
      </Grid.Full>

      {/* <p>
        <strong>Subscribe to blog posts:</strong>
      </p> */}
    </Layout>
  );
}

function ContactForm() {
  return (
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
  );
}

function SubscribeForm() {
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
