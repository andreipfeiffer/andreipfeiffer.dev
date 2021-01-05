import Head from "next/head";
import Layout, { SITE_TITLE } from "../components/layout";
import Link from "next/link";
import styles from "./about.module.css";
import { getAge } from "../lib/utils";

export default function About() {
  return (
    <Layout className={styles.about}>
      <Head>
        <title>About me: {SITE_TITLE}</title>
      </Head>

      <h1>About me</h1>
      <p>I'm {getAge()} years old, living in Timişoara, Romania.</p>

      <p>
        I've been designing &amp; developing websites and web apps since 2000
        and went through all the stages: from HTML3/jQuery to HTML5/ES6 and
        beyond. I like to think of myself as an{" "}
        <strong>eclectic code designer</strong>.
      </p>

      <p>
        <strong>Eclectic</strong> because I don't follow a specific technology
        or a school of thought in a dogmatic way. Instead, I apply various
        practices and technologies that suit the problem I'm facing, in a
        pragmatic fashion.
      </p>

      <p>
        <strong>Code designer</strong> has a double meaning. First of all, I'm
        very keen about code design and maintaining a clean code base. But I'm
        also a hybrid between designer and developer, because I enjoy
        aesthetics, animations, interactions and everything related to{" "}
        <strong>design</strong>.
      </p>

      <section>
        <h2>UI Engineer for web &amp; mobile</h2>
        <p>
          I'm currently working as <strong>UI Engineer</strong> switching
          between <strong>web and mobile</strong> at{" "}
          <a href="https://www.e-spres-oh.com/">[e-spres-oh]</a>.
        </p>
        <p>
          My everyday battles revolve around Clean Code Design, User &amp;
          Developer Experience, UI Interaction &amp; Design, and fighting
          software entropy through constant Refactoring, Code Reviews, Unit
          Tests and Team Collaboration.
        </p>
        <p>
          My current preferred tech stack include React/React Native,
          TypeScript, MobX, Jest, React Styleguidist and Next.js.
        </p>
        <p>
          <a href="/andrei-pfeiffer-resume-v4.pdf">View full resumee</a>
        </p>
      </section>

      <section>
        <h2>Community involvement</h2>

        <p>
          Together with an wonderful team, we're organizing{" "}
          <a href="http://revojs.ro">revo.js</a>, an annual not-for-profit,
          community driven, JavaScript conference.
        </p>
        <p>
          Since 2013, I've been involved in the local JavaScript community,
          co-organizing <a href="http://timjs.ro">tim.js</a>, a monthly meetup
          dedicated to the entire JavaScript ecosystem.
        </p>
        <p>
          I enjoy sharing my knowledge during meetup and conference{" "}
          <Link href="/talks">
            <a>talks</a>
          </Link>
          , hands-on{" "}
          <Link href="/workshops">
            <a>workshops and trainings</a>
          </Link>
          , or in written{" "}
          <Link href="/blog">
            <a>articles</a>
          </Link>
          .
        </p>
      </section>
    </Layout>
  );
}
