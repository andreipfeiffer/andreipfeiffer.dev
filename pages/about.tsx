import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import Link from "next/link";
import styles from "./about.module.css";

export default function About() {
  return (
    <Layout className={styles.about}>
      <Head>
        <title>About me: {siteTitle}</title>
      </Head>

      <h1>About me</h1>

      <p>
        I'm {new Date().getFullYear() - 1982} years old, living in Timişoara,
        Romania.
      </p>

      <p>
        I've been designing &amp; developing websites, web apps &amp; mobile
        applications since 2000 and went through all the stages: from HTML3,
        jQuery to HTML5, ES6 and beyond. I like to think of myself as an{" "}
        <strong>eclectic code designer</strong>.
      </p>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li>
            <strong>HTML:</strong> <br />
            I'm able to write valid, standard compliant markup using HTML5. I
            have a deep understanding of semantics, document outlining and
            accessibility.
          </li>

          <li>
            <strong>CSS:</strong> <br />
            I've worked with LESS, SASS and scalable CSS inspired by BEM &amp;
            SMACCS.
          </li>

          <li>
            <strong>ECMAScript:</strong> <br />
            I'm comfortable writing ES6 and up-to-date with the upcoming
            editions. I have both Object-Oriented and Functional paradigms
            experience.
          </li>

          <li>
            <strong>TypeScript:</strong> <br />I wouldn't start a new project
            without it. Its benefits are undeniable.
          </li>

          <li>
            <strong>Web development:</strong> <br />I have deep understanding of
            DOM and its related APIs, template engines like Jade, TWIG,
            handlebars and design patterns. I have experience with jQuery,
            Knockout, Vue, and most tools from the React ecosystem: Redux, MobX,
            Gatsby, Next.JS.
          </li>

          <li>
            <strong>Mobile development:</strong> <br />I have relevant hands-on
            experience with React Native and Android/iOS mobile development.
          </li>

          <li>
            <strong>Testing:</strong> <br />I have significant experience
            writing automated tests with QUnit, Jasmine, Mocha, Jest, Sinon,
            Cucumber, both on client &amp; server.
          </li>

          <li>
            <strong>PHP:</strong> <br />
            I've worked for 6 years on back-end development using PHP and MySQL.
          </li>
          <li>
            <strong>ActionScript:</strong> <br />
            I've worked for 4 years with AS2 &amp; AS3, implementing rich-media
            interfaces, interactions and animations.
          </li>
          <li>
            <strong>Adobe Photoshop:</strong> <br />I have extensive experience
            with raster editors, mostly in regard to image editing &amp; assets
            optimizations.
          </li>
        </ul>
      </section>

      <section>
        <h2>Non-technical Skills</h2>
        <ul>
          <li>
            <strong>Agile:</strong> <br />
            I'm a big fan of Agile practices and enjoy working in an iterative
            &amp; pragmatic fashion, constantly adapting and improving.
          </li>

          <li>
            <strong>UI/UX:</strong> <br />
            I'm capable of creating both visual and functional prototypes with
            focus on User eXperience, from a design or technical point of view.
          </li>

          <li>
            <strong>Leadership:</strong> <br />
            during all these years I've played many other roles, such as Team
            Lead, Technical Consultant, Mentor and Trainer.
          </li>
        </ul>
      </section>

      <section>
        <h2>Career milestones</h2>

        <p>
          Currently I work at [e-spres-oh] as a UI Developer, switching between
          web and mobile.
        </p>

        <section>
          <h3>Mobile Developer at [e-spres-oh]</h3>
          Mar. 2017 – present
          <br />
          Develop iOS & Android native apps using React Native;
          <br />
          Write articles & tutorials related to React Native development;
          <br />
        </section>

        <section>
          <h3>Technical Mentor at [e-spres-oh]</h3>
          Dec. 2014 – Mar. 2017
          <br />
          Lead a small team for a mid-size project in a Kanban environment;
          <br />
          Maintain a clean code base through constant refactoring, tests and
          code reviews;
          <br />
          Prepare talks, workshops & trainings;
          <br />
          Get deeply involved in the recruiting process;
          <br />
        </section>

        <section>
          <h3>UI/UX Developer at [e-spres-oh]</h3>
          Oct. 2012 – Dec. 2014
          <br />
          Develop a large & scalable web app, in distributed Scrum teams;
          <br />
          Refactor & optimize using DRY and KISS principles;
          <br />
        </section>

        <section>
          <h3>Lead Front-End Developer at New HairCut (ex DXB)</h3>
          Aug. 2010 – Oct. 2012
          <br />
          Work closely with designers, prototyping and tweaking user interfaces;
          <br />
          Seeking elegancy when writing code & dealing with problems;
          <br />
          Guide and assist junior developers;
          <br />
        </section>

        <section>
          <h3>Web Developer at New HairCut (ex RealNet)</h3>
          Feb. 2004 – Aug. 2010
          <br />
          Initially hired as a web designer, I've switched to PHP/MySQL,
          developing websites, e-commerce & custom solutions;
          <br />
          Use Flash & ActionScript 3.0 for rich-media UIs, animations &
          interactions;
          <br />
        </section>
      </section>

      <section>
        <h2>Hobbies</h2>

        <p>
          I'm a passionate amateur photographer since 2005. I've attended two
          photography courses, in 2006 and 2007 and had the Alter Ego personal
          exhibition. I've been awarded honorable mentions in 2012, 2017 and
          nominations in 2010, 2012 and 2014 at Black & White Spider Awards;
        </p>

        <p>
          I enjoy skiing in the winter, hiking in the summer, visiting friends
          across Europe in autumn and playing Dota2 in between.
        </p>
      </section>

      <a href="/andrei-pfeiffer-resume-v4.pdf">View full resumee</a>
    </Layout>
  );
}
