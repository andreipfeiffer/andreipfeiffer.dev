import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../components/button";
import { Grid } from "../components/grid";
import { Layout } from "../components/layout";
import { useBreakpoint } from "../components/layout/useBreakpoint";
import { MetaTags, META_TITLE } from "../components/meta_tags";
import { Spacer } from "../components/spacer";
import { Text } from "../components/text";

import { getAge } from "../lib/utils";

import styles from "./about.module.scss";

export default function About() {
  const { breakpoint } = useBreakpoint();

  return (
    <Layout className={styles.about}>
      <MetaTags title={`About me: ${META_TITLE}`} />

      {breakpoint && <Spacer vertical="40" />}

      <Grid.Full className={styles.heading}>
        <header>
          <Text size="h00" as="h1">
            {"Hi, I'm Andrei"}
          </Text>

          <Spacer vertical="60" />

          <Text size="p01" as="p">
            {"I'm currently"} {getAge()} years old, living in Timișoara,
            Romania.
          </Text>

          <Text size="p01" as="p">
            {"I've"} been designing &amp; developing websites and web apps since
            2000 and went through all the stages of web development: from
            HTML3/jQuery to HTML5/ES6/TS and beyond.
          </Text>
        </header>

        <figure className={styles.photo}>
          <Image
            src={`/images/andrei-pfeiffer.png`}
            layout={"fill"}
            unoptimized={true}
            alt={"Andrei Pfeiffer black and white close-up photo"}
          />
        </figure>
      </Grid.Full>

      <Spacer vertical="60" />

      <Grid>
        <Grid.Col span={8}>
          <Spacer vertical="100" />

          <section>
            <Text size="h02" as="h2">
              Eclectic Code Designer
            </Text>

            <Text size="p01" as="p">
              I like to think of myself as an{" "}
              <strong>eclectic code designer</strong>.
            </Text>

            <p>
              <strong>Eclectic</strong> because I {"don't"} follow a specific
              technology or a school of thought in a dogmatic way. Instead, I
              apply various principles, practices, and technologies that
              actually suit the problem {"I'm "}
              facing, in a pragmatic fashion.
            </p>

            <p>
              <strong>Code designer</strong> has a double meaning. First of all,{" "}
              {"I'm"} very keen about <strong>code design</strong> and
              maintaining a clean code base. Additionally, {"I'm"} also a hybrid
              between a <em>designer</em> and a <em>developer</em>. Besides
              being a software engineer working with <strong>code</strong>, I
              also have a strong passion for aesthetics, animations, structure,
              interaction, and everything related to <strong>design</strong> in
              a broad sense.
            </p>
          </section>

          <Spacer vertical="100" />

          <section>
            <Text size="h02" as="h2">
              UI Engineering
            </Text>

            <p>
              {"I'm"} currently working as an{" "}
              <strong>User Interface Developer</strong> switching between{" "}
              <strong>web</strong> and <strong>mobile</strong>.
            </p>
            <p>
              My everyday battles revolve around Clean Code Design, User &amp;
              Developer Experience, UI Interaction &amp; Design, and{" "}
              <strong>fighting software entropy</strong> through constant
              Refactoring, Automated Testing, Code Reviews, and Team
              Collaboration.
            </p>
            {/* <p>
              My primary tech stack currently include React/React Native,
              TypeScript and Next.js.
            </p> */}

            <br />

            <Button as="a" href="/andrei-pfeiffer-resume-v5.2.pdf" size="large">
              View full resumee
            </Button>
          </section>

          <Spacer vertical="100" />

          <section>
            <Text size="h02" as="h2">
              Community involvement
            </Text>

            <p>
              For more than 10 years I've been an active member of the local,
              national and international JavaScript Community, both as an
              attendee and as a speaker we well.
            </p>

            <Spacer vertical="16" />

            <dl className={styles.communities_list}>
              <dt className={styles.community_logo}>
                <span
                  style={{ maskImage: "url(/images/logo-timjs.svg)" }}
                ></span>
              </dt>
              <dd>
                Since 2013, {"I've"} been deeply involved in the local
                JavaScript community, co-organizing{" "}
                <a href="http://timjs.ro">
                  <strong>tim.js</strong>
                </a>
                , a monthly meetup dedicated to the entire JavaScript ecosystem.
              </dd>

              <dt className={styles.community_logo}>
                <span
                  style={{ maskImage: "url(/images/logo-revojs.svg)" }}
                ></span>
              </dt>
              <dd>
                Together with an wonderful team, {"we're"} organizing{" "}
                <a href="http://revojs.ro">
                  <strong>revo.js</strong>
                </a>
                , an annual technically focused, not-for-profit, and community
                driven JavaScript conference.
              </dd>

              <dt className={styles.community_logo}>
                <span
                  style={{ maskImage: "url(/images/logo-jsheroes.svg)" }}
                ></span>
              </dt>
              <dd>
                {"I'm"} also an <strong>Ambassador</strong> of{" "}
                <a href="https://jsheroes.io/">
                  <strong>JSHeroes</strong>
                </a>
                , a must-attend JavaScript conference organized by wonderful
                people in Cluj-Napoca, Romania.
              </dd>
            </dl>

            <Spacer vertical="16" />

            <p>
              Last, but not least, I enjoy sharing my knowledge during meetup
              and conference{" "}
              <Link href="/talks">
                <a>
                  <strong>talks</strong>
                </a>
              </Link>
              , hands-on{" "}
              <Link href="/workshops">
                <a>
                  <strong>workshops and trainings</strong>
                </a>
              </Link>
              , or in written{" "}
              <Link href="/blog">
                <a>
                  <strong>articles</strong>
                </a>
              </Link>
              .
            </p>
          </section>

          <Spacer vertical="100" />

          <section>
            <Text size="h02" as="h2">
              Backing & Support
            </Text>

            <p>
              {"I'm"} currently supporting with recurring donations several
              organizations that managed to achieve trully beneficial outcomes.
              This requires a collective effort and {"I'm"} thrilled to be their
              backer:
            </p>

            <ul className={styles.donations_list}>
              <li>
                <a href="https://en.wikipedia.org/">
                  <strong>Wikipedia</strong>
                </a>{" "}
                for providing open and free information for our entire
                civilisation. {"I'm"} an occasional supporter since 2016 and a
                regular donor since Mar 2023.
              </li>
              <li>
                <a href="https://daruiesteviata.ro/">
                  <strong>Daruieste Viata</strong>
                </a>{" "}
                for building a {"childrens'"} hospital, something that not even
                the romanian authorities are capable to do. {"I'm"} their backer
                since Oct 2018.
              </li>
              <li>
                <a href="https://recorder.ro/">
                  <strong>Recorder</strong>
                </a>{" "}
                for their trully meaningful press investigations and honest
                journalism. {"I've"} been supporting them since Feb 2024.
              </li>
            </ul>
          </section>
        </Grid.Col>
      </Grid>
    </Layout>
  );
}
