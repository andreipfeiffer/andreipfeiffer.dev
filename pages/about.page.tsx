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

      {breakpoint && <Spacer vertical="100" />}

      <Grid.Full>
        <Text size="h00" as="h1">
          {"Hi, I'm Andrei"}
        </Text>
      </Grid.Full>

      <Spacer vertical="60" />

      <Grid>
        <Grid.Col span={8}>
          <p>
            {"I'm currently"} {getAge()} years old, living in Timişoara,
            Romania.
          </p>

          <p>
            {"I've"} been designing &amp; developing websites and web apps since
            2000 and went through all the stages: from HTML3/jQuery to HTML5/ES6
            and beyond. I like to think of myself as an{" "}
            <strong>eclectic code designer</strong>.
          </p>

          <Spacer vertical="100" />

          <section>
            <Text size="h02" as="h2">
              Eclectic Code Designer
            </Text>

            <p>
              <strong>Eclectic</strong> because I {"don't"} follow a specific
              technology or a school of thought in a dogmatic way. Instead, I
              apply various practices and technologies that suit the problem{" "}
              {"I'm "}
              facing, in a pragmatic fashion.
            </p>

            <p>
              <strong>Code designer</strong> has a double meaning. First of all,{" "}
              {"I'm"} very keen about <strong>code design</strong> and
              maintaining a clean code base. Additionally, {"I'm"} also a hybrid
              between a <em>designer</em> and a <em>developer</em>. Besides
              being a software engineer working with <strong>code</strong>, I
              also have a strong passion for aesthetics, animations,
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
            <p>
              My primary tech stack currently include React/React Native,
              TypeScript and Next.js.
            </p>

            <br />

            <Button as="a" href="/andrei-pfeiffer-resume-v5.1.pdf" size="large">
              View full resumee
            </Button>
          </section>

          <Spacer vertical="100" />

          <section>
            <Text size="h02" as="h2">
              Community involvement
            </Text>

            <p>
              Since 2013, {"I've"} been deeply involved in the local JavaScript
              community, co-organizing{" "}
              <a href="http://timjs.ro">
                <strong>tim.js</strong>
              </a>
              , a monthly meetup dedicated to the entire JavaScript ecosystem.
            </p>
            <p>
              Together with an wonderful team, {"we're"} organizing{" "}
              <a href="http://revojs.ro">
                <strong>revo.js</strong>
              </a>
              , an annual technically focused, not-for-profit, and community
              driven JavaScript conference.
            </p>
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
        </Grid.Col>
      </Grid>
    </Layout>
  );
}
