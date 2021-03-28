import React from "react";
import { Text } from "../components/text";

type Video = { type: "video"; url: string };
type Slides = { type: "slides"; url: string };
type Code = { type: "code"; url: string; label: string };

export type Talk = {
  title: React.ReactNode;
  date: string;
  type: string;
  abstract: React.ReactNode;
  old?: boolean;
  image?: {
    path: string;
    bw?: boolean;
  };
  urls?: Array<Video | Slides | Code>;
};

export const talks: Talk[] = [
  {
    title: "Scalable CSS",
    date: "March 2021",
    type: "Slides only",
    abstract: (
      <>
        <p>
          CSS in easy to learn, but difficult to master, even at small scale.
          Developing and maintaining a large CSS code base requires a lot of
          effort, strict rules and proper tooling.
        </p>
        <br />
        <p>
          We'll analyze various solutions we have at our disposal to address the
          scalability limitations of CSS, looking at methodologies, CSS-in-JS
          and type systems.
        </p>
      </>
    ),
    urls: [],
    image: { path: "scalable-css.png" },
  },

  {
    title: (
      <>
        A thorough analysis of <Text nowrap>CSS-in-JS</Text>
      </>
    ),
    date: "February 2021",
    type: "Slides only",
    abstract: (
      <>
        <p>
          There are more than 50 different CSS-in-JS libraries out there and
          each of them provides a unique set of features.
        </p>
        <br />
        <p>
          Instead of reviewing each individual library, we’ll analyse the
          various features that these libraries have to offer, to better
          understand what approach better suits a specific use-case.
        </p>
      </>
    ),
    image: { path: "css-in-js.png" },
    urls: [
      {
        type: "code",
        url: "https://github.com/andreipfeiffer/css-in-js",
        label: "Docs",
      },
    ],
  },

  {
    title: "i18n & l10n",
    date: "September 2020",
    type: "Slides and Live code",
    abstract: (
      <>
        <p>
          This talk explains the difference between{" "}
          <em>Internationalisation</em> and <em>Localisation</em> and how to
          implement translations and pluralisations using{" "}
          <code>
            <strong>i18next</strong>
          </code>
          .
        </p>
        <br />
        <p>
          We'll also take a look at the ECMAScript{" "}
          <code>
            <strong>Intl</strong>
          </code>{" "}
          standard and how to use its APIs to apply localised formatting to
          numbers, currencies, dates and times.
        </p>
      </>
    ),
    image: { path: "i18n-l10n.png", bw: true },
    urls: [
      {
        type: "slides",
        url: "/slides/i18n-and-l10n.pdf",
      },
    ],
  },

  {
    title: "Simple vs. Easy",
    date: "July 2020",
    type: "Slides only",
    abstract: (
      <>
        <p>
          Simple solutions usually require a lot of effort during their usage,
          but they also provide a high level of control. Complex solutions are
          usually easy to use, but retain the control for themselves. This
          theory applies both at high-level architecture and also at low-level,
          day-to-day code design.
        </p>
        <br />
        <p>
          We'll explore different methods for tackling software complexity, by
          deeply understanding our users and deciding where to place the
          control: in the implementation, or in the consumer.
        </p>
      </>
    ),
    image: { path: "simple-vs-easy.png" },
    urls: [
      {
        type: "slides",
        url: "/slides/simple-vs-easy.pdf",
      },
    ],
  },

  {
    title: "CSS layout tricks",
    date: "August 2020",
    type: "Live code",
    abstract: (
      <p>
        This presentation walks through 3 different layout examples using CSS
        grids. We'll start by focusing on markup semantics, then sprinkle some
        lesser known CSS properties to implement solid and flexible layouts.
      </p>
    ),
    image: { path: "css-grid-layouts.png" },
    urls: [
      {
        type: "code",
        url: "https://github.com/andreipfeiffer/css-tricks",
        label: "Code",
      },
    ],
  },

  {
    title: "Game of Life and Performance",
    date: "April 2020",
    type: "Slides and Live demo",
    abstract: (
      <>
        <p>
          This is a 2-part talk. The first part is an introduction to John
          Conway's Game of Life and some of it's practical applications today.
          The second part walks through an implementation of Game of Life in
          React.
        </p>
        <br />
        <p>
          We'll measure rendering performance and code execution performance,
          identify bottlenecks and optimize our solution to run at 60fps.
        </p>
      </>
    ),
    image: { path: "game-of-life.png", bw: true },
    urls: [
      {
        type: "code",
        url: "https://github.com/andreipfeiffer/game-of-life",
        label: "Code",
      },
    ],
  },

  {
    title: "Memoization in React",
    date: "January 2020",
    type: "Live code",
    abstract: (
      <>
        <p>
          React is fast enough, until it becomes slow. In this talk we'll
          examine the limitations of React's rendering performance.
        </p>
        <br />
        <p>
          We'll take a look at different situations when rendering bottlenecks
          can occur, measure rendering performance using{" "}
          <strong>React Profiler</strong> and optimize it using{" "}
          <code>
            <strong>React.memo()</strong>
          </code>
          ,{" "}
          <code>
            <strong>useMemo()</strong>
          </code>{" "}
          and{" "}
          <code>
            <strong>useCallback()</strong>
          </code>
          .
        </p>
      </>
    ),
    image: { path: "memoization-in-react.png" },
    urls: [
      {
        type: "slides",
        url: "/slides/memoization-in-react.pdf",
      },
      {
        type: "code",
        url: "https://github.com/andreipfeiffer/workshop-react-rendering",
        label: "Code",
      },
    ],
  },

  {
    title: "The False Dichotomy of UI Development",
    date: "November 2019",
    type: "Slides only",
    abstract: (
      <>
        <p>
          We usually talk about 2 different types of Front-End/UI developers:
          the <strong>designer</strong> type focused on HTML &amp; CSS, and the{" "}
          <strong>engineer</strong> type focused on JS and frameworks. This
          dychotomy matches perfectly the difference between client facing
          websites and back office applications.
        </p>
        <br />
        <p>
          But, when dealing with wep apps that are also client facing, we
          witness a blend of design and engineering skills that are required to
          build such UIs.
        </p>
      </>
    ),
    image: { path: "" },
  },

  {
    title: "Isolated Components Driven Development",
    date: "February 2019",
    type: "Slides and Live demo",
    abstract: (
      <>
        <p>
          This talks describes the challenges of developing UIs that need to
          communicate with external APIs. Using tools such as{" "}
          <strong>React Styleguidist</strong> or <strong>Storybook</strong> can
          help us to eliminate the need for an integration, enabling us to
          develop components in isolation, outside the application.
        </p>
      </>
    ),
    image: { path: "isolated-components.png" },
    urls: [
      {
        type: "slides",
        url: "/slides/isolated-components-driven-development.pdf",
      },
    ],
  },

  {
    title: "Bridging Swift and React Native",
    date: "October 2018",
    type: "Live code",
    abstract: (
      <>
        <p>
          This is a live coding session based on my{" "}
          <a href="https://teabreak.e-spres-oh.com/swift-in-react-native-the-ultimate-guide-part-1-modules-9bb8d054db03">
            Ultimate Guide for Swift in React Native
          </a>
          . We'll create a native module in Swift and implement a React Native
          bridge, allowing us to exchange data back and forth between JavaScript
          code and native iOS code written in Swift.
        </p>
      </>
    ),
    image: { path: "javaswift.png" },
    urls: [
      { type: "video", url: "https://www.youtube.com/watch?v=0KLy6ikf0uI" },
    ],
  },

  {
    old: true,
    title: "Devtools breakpointing",
    date: "July 2018",
    type: "Lightning talk, Live code",
    abstract: (
      <>
        <p>
          Code breakpoints is something we're all used to. But Chrome Devtools
          provide additional debugging methods that allow us to break on DOM
          manipulations, XHR requests, and various DOM events.
        </p>
      </>
    ),
  },

  {
    old: true,
    title: "Mobx and friends",
    date: "June 2018",
    type: "Slides and Live demo",
    abstract: (
      <>
        <p>
          This is an introduction to MobX, a complex state management solution.
          It takes the more popular and simpler Redux library as comparison, to
          highlight the key differences in concepts, syntax, features and
          performance.
        </p>
      </>
    ),
  },

  {
    old: true,
    title: "How full is your stack?",
    date: "November 2017",
    type: "Slides only",
    abstract: (
      <>
        <p>
          Developers want to become "full-stack". Companies hire full-stack
          developers. Some say that full-stack means{" "}
          <em>"jack of all trades, master of none"</em>. The answer must be
          somewhere in the middle. We'll analyze the history of the term and
          debate what it really means from the developement and management point
          of view.
        </p>
      </>
    ),
  },

  {
    old: true,
    title: "JavaScript is different",
    date: "October 2017",
    type: "Slides only",
    abstract: (
      <>
        <p>
          Breaking changes are a great way to improve software, by changing poor
          design and removing the bad parts. It's what all languages do at some
          point. However, JavaScript cannot afford to do that. We'll explore why
          is JavaScript different in this regard and what options does it have
          for improvement.
        </p>
      </>
    ),
  },
];
