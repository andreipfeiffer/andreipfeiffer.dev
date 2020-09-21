import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import Link from "next/link";
import styles from "./talks.module.css";

export default function Talks() {
  return (
    <Layout className={styles.talks}>
      <Head>
        <title>Talks: {siteTitle}</title>
      </Head>

      <h1>Talks &amp; Live coding sessions</h1>

      <p>
        During the past {new Date().getFullYear() - 2013} years, I had various
        talks and presentations at conferences, meetups and private events, most
        of them focused on JavaScript, UI Development, Web and Mobile.
      </p>

      <p>Here's a non-comprehensive list of topics I've spoken about:</p>

      <ul className={styles.list}>
        <li>
          <strong>Simple vs. Easy</strong>
          <p>
            In this talk, I touch upon a correlation between "simplicity" and
            "ease of use" in regard to software, by analysing these traits from
            the application wide high-level decisions that we have to tackle now
            and then, to the low-level component design that we have to deal
            with on a daily basis.
          </p>
          <p>
            <i>Slides only, Includes Code, Theoretical</i>
          </p>
        </li>
        <li>
          <strong>i18n &amp; l10n</strong>
          <p>
            This talk discusses what Internationalisation and Localisation is,
            and how to implement translations and pluralisation with i18next,
            and various localised formatting using the Intl API.
          </p>
          <p>
            <i>Slides and Live code</i>
          </p>
        </li>
        <li>
          <strong>CSS layout tricks</strong>
          <p>
            This talk walks through various layout techniques using purely CSS.
            It mostly covers some obscure properties that are not widely used.
          </p>
          <p>
            <i>Live code</i>
          </p>
        </li>
        <li>
          <strong>Game of Life, and Performance</strong>
          <p>
            This is a 2-part talk. The first part talks about what is John
            Conway's Game of Life and some of it's practical application today.
            The second part walks through an implementation of Game of Life, and
            it's tehnical implementation challenges in regard to performance.
          </p>
          <p>
            <i>Slides and Live demo</i>
          </p>
        </li>
        <li>
          <strong>Memoization in React</strong>
          <p>
            This talk walks through the limitations of React's rendering
            performance, taking a hands-on approach to identifying, measuring
            and fixing performance bottlenecks.
          </p>
          <p>
            <i>Slides and Live code</i>
          </p>
        </li>
        <li>
          <strong>The Trichotomy of UI Development</strong>
          <p style={{ color: "red" }}>
            This talk builds upon Chris Coyers (link) talk about the dichotomy
            in front-end development. I'm takeing this one step forward,
            debating over different types of User Interfaces, concluding that
            there's actually a tricotomy.
          </p>
          <p>
            <i>Slides only, Theoretical</i>
          </p>
        </li>
        <li>
          <strong>Isolated Components Driven Development</strong>
          <p>
            This talks describes the challenges of developing UIs that are
            integrated with external APIs. Using tools such as React
            Styleguidist or Storybook eliminate the need for an integration,
            enabling us to develop components in isolation, outside the
            application.
          </p>
          <p>
            <i>Slides and Live demo</i>
          </p>
        </li>
        <li>
          <strong>Bridging Swift and React Native</strong>
          <p style={{ color: "red" }}>
            This talk is a live coding session based on my Ultimate Guide (link)
            during which we'll create a native module in Swift and implement a
            React Native bridge to allow us to exchange data back and forth
            between JavaScript code and native Swift code.
          </p>
          <p>
            <i>Live code</i>
          </p>
        </li>
        <li>
          <strong>Mobx and friends</strong>
          <p>
            This talk describes MobX as a complex state management solution, in
            comparison to the simpler Redux library. It covers the basic
            concepts, syntax, features and performance.
          </p>
          <p>
            <i>Slides and Live demo</i>
          </p>
        </li>
        <li>
          <strong>JS Tips &amp; Tricks (lightning talk)</strong>
          <p>
            This is a short talk that goes through various practical debugging
            tips using Chrome's Devtools.
          </p>
          <p>
            <i>Live code</i>
          </p>
        </li>
        {/* <li>
          <strong>Dealing with State</strong>
        </li> */}
        <li>
          <strong>How full is your stack?</strong>
          <p style={{ color: "red" }}>
            This talk debates on the title of "full stack developer and
            development", looking at the history of the term, but also how it is
            percieved by developers and managers.
          </p>
          <p>
            <i>Slides only</i>
          </p>
        </li>
        <li>
          <strong>To ASI or not to ASI (lightning talk)</strong>
          <p>
            This talk describes what Automatic Semicolon Insertion (ASI) is and
            presents the contrast between 2 different ways of writting
            JavaScript code.
          </p>
          <p>
            <i>Slides only</i>
          </p>
        </li>
        <li>
          <strong>JavaScript is different</strong>
          <p>This talk tries to answer questions like: </p>
        </li>
        <li>
          <strong>A Vue over React</strong>
        </li>
        <li>
          <strong>WAT iz dat code?</strong>
        </li>
        <li>
          <strong>Testing layers</strong>
        </li>
        <li>
          <strong>Promises: past, present &amp; future</strong>
        </li>
        <li>
          <strong>ES6 under the microscope</strong>
        </li>
        <li>
          <strong>Looping Events</strong>
        </li>
        <li>
          <strong>Source Maps</strong>
        </li>
        <li>
          <strong>Task automation with Grunt</strong>
        </li>
      </ul>
    </Layout>
  );
}
