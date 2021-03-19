import React from "react";
import { Text } from "../components/text";

export type Talk = {
  title: React.ReactNode;
  date: string;
  type: string;
  abstract: React.ReactNode;
  old?: boolean;
  image?: string;
  slides?: string;
  video?: string;
};

export const talks: Talk[] = [
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
          each of them provides a unique combination of features.
        </p>
        <br />
        <p>
          Instead of reviewing each individual library, we’ll analyse the
          various features that these libraries have to offer, to better
          understand what solution might work best for specific use-cases.
        </p>
      </>
    ),
  },

  {
    title: "i18n & l10n",
    date: "September 2020",
    type: "Slides and Live code",
    abstract: (
      <>
        <p>
          This talk discusses what <em>Internationalisation</em> and{" "}
          <em>Localisation</em> is and how to implement translations and
          pluralisations with{" "}
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
          websites and back office web applications.
        </p>
        <br />
        <p>
          But, when dealing with wep apps that are also client facing, we
          witness a blend of design and engineering skills that are required to
          build such UIs.
        </p>
      </>
    ),
  },

  {
    title: "Isolated Components Driven Development",
    date: "February 2019",
    type: "Slides and Live demo",
    abstract: (
      <>
        <p>
          This talks describes the challenges of developing UIs that are need to
          communicate with external APIs. Using tools such as{" "}
          <strong>React Styleguidist</strong> or <strong>Storybook</strong> can
          help us to eliminate the need for an integration, enabling us to
          develop components in isolation, outside the application.
        </p>
      </>
    ),
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
          code and native iOS code written in.
        </p>
      </>
    ),
    image: "javaswift.png",
    video: "https://www.youtube.com/watch?v=0KLy6ikf0uI",
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
          manipulations, XHR requests or DOM events.
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
          It takes the more popular and simpler Redux library, as comparison to
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
          Developers want to become "full stack". Companies hire full stack
          developers. Some say they are{" "}
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
