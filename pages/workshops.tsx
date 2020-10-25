import Head from "next/head";
import Layout, { SITE_TITLE } from "../components/layout";
// import Link from "next/link";

export default function Workshops() {
  return (
    <Layout>
      <Head>
        <title>Workshops: {SITE_TITLE}</title>
      </Head>

      <h1>Workshops &amp; Trainings</h1>

      <p>
        I've done many full-day and half-day workshops for meetups and
        conferences, and also multiple days on location trainings for companies.
      </p>

      <p>
        These workshops and trainings covered various software development
        topics, such as:
      </p>
      <ul>
        <li>JavaScript &amp; ECMAScript standard</li>
        <li>React Web</li>
        <li>React Native</li>
        <li>CSS</li>
        <li>Performance Optimisations</li>
        <li>UI Components Design</li>
        <li>Unit Testing</li>
      </ul>

      <hr />

      {/* <p>Below are some public workshops with detailed information.</p> */}

      <section>
        <h2>React Rendering Performance Optimizations</h2>
        <p>
          This workshop takes an hands-on approach to{" "}
          <strong>identify performance problems</strong>,{" "}
          <strong>measure</strong> them using the{" "}
          <strong>React Profiler</strong> and <strong>fix</strong> them using
          various optimization techniques such as{" "}
          <strong>
            <code>React.memo()</code>
          </strong>
          ,{" "}
          <strong>
            <code>useMemo()</code>
          </strong>
          ,{" "}
          <strong>
            <code>useCallback()</code>
          </strong>{" "}
          and{" "}
          <strong>
            <code>useRef()</code>
          </strong>
          .
        </p>

        <p>Advanced workshop, Half-day or Full-day</p>
      </section>

      <section>
        <h2>React Native Custom Modules</h2>

        <p>
          This workshop will walk you through the process of creating a{" "}
          <strong>Custom Native Module</strong> from scratch in{" "}
          <strong>React Native</strong>, for <strong>Android and iOS</strong>.
        </p>

        <p>Advanced workshop, Half-day or Full-day</p>
      </section>

      <section>
        <h2>JavaScript Citizens</h2>

        <p>
          This workshop dives deep into the fundamental building blocks of the
          ECMAScript language, like{" "}
          <strong>Primitives, Arrays, Objects, Functions</strong>, explaining in
          detail how they work &amp; why is it so important to understand them.
        </p>

        <p>Beginner/Intermediate workshop, Full-day</p>
      </section>

      <section>
        <h2>JavaScript Mechanics</h2>

        <p>
          In this workshop we will address the politics that govern the citizens
          of ECMAScript, such as{" "}
          <strong>Scope, Strict Mode, Values &amp; References, Context</strong>,
          etc.
        </p>

        <p>Beginner/Intermediate workshop, Full-day</p>
      </section>
    </Layout>
  );
}
