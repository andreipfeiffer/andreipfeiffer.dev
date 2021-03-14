import React from "react";
import { Text } from "../components/text";

export type Talk = {
  title: React.ReactNode;
  date: string;
  type: string;
  abstract: React.ReactNode;
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
      <p>
        This talk discusses what <em>Internationalisation</em> and{" "}
        <em>Localisation</em> is and how to implement translations and
        pluralisations with{" "}
        <code>
          <strong>i18next</strong>
        </code>
        . We'll also take a look at the ECMAScript{" "}
        <code>
          <strong>Intl</strong>
        </code>{" "}
        standard and how to use its APIs to apply localised formatting to
        numbers, currencies, dates and times.
      </p>
    ),
  },

  {
    title: "Simple vs. Easy",
    date: "July 2020",
    type: "Slides only",
    abstract: (
      <p>
        In this talk, I touch upon a correlation between <em>simplicity</em> and{" "}
        <em>ease of use</em> in regard to software, by analysing these traits
        from the application wide high-level decisions that we have to tackle
        now and then, to the low-level component design that we have to deal
        with on a daily basis.
      </p>
    ),
  },

  {
    title: "CSS layout tricks",
    date: "August 2020",
    type: "Live code",
    abstract:
      "This talk walks through various layout techniques using purely CSS. It mostly covers some obscure properties that are not widely used.",
  },

  {
    title: "Game of Life and Performance",
    date: "April 2020",
    type: "Slides and Live demo",
    abstract:
      "This is a 2-part talk. The first part talks about what is John Conway's Game of Life and some of it's practical application today. The second part walks through an implementation of Game of Life, and it's tehnical implementation challenges in regard to performance.",
  },

  {
    title: "Memoization in React",
    date: "January 2020",
    type: "Slides and Live code",
    abstract:
      "This talk walks through the limitations of React's rendering performance, taking a hands-on approach to identifying, measuring and fixing performance bottlenecks.",
  },

  {
    title: "The Trichotomy of UI Development",
    date: "November 2019",
    type: "Slides only",
    abstract:
      "?!?!?! This talk builds upon Chris Coyers (link) talk about the dichotomy in front-end development. I'm takeing this one step forward, debating over different types of User Interfaces, concluding that there's actually a tricotomy.",
  },

  {
    title: "Isolated Components Driven Development",
    date: "February 2019",
    type: "Slides and Live demo",
    abstract:
      "This talks describes the challenges of developing UIs that are integrated with external APIs. Using tools such as React Styleguidist or Storybook eliminate the need for an integration, enabling us to develop components in isolation, outside the application.",
  },

  {
    title: "Bridging Swift and React Native",
    date: "October 2018",
    type: "Live code",
    abstract:
      "?!?!?! This talk is a live coding session based on my Ultimate Guide (link) during which we'll create a native module in Swift and implement a React Native bridge to allow us to exchange data back and forth between JavaScript code and native Swift code.",
  },

  {
    title: "?!?!?! JS Tips & Tricks (lightning talk)",
    date: "July 2018",
    type: "Live code",
    abstract:
      "This is a short talk that goes through various practical debugging tips using Chrome's Devtools.",
  },

  {
    title: "Mobx and friends",
    date: "June 2018",
    type: "Slides and Live demo",
    abstract:
      "This talk describes MobX as a complex state management solution, in comparison to the simpler Redux library. It covers the basic concepts, syntax, features and performance.",
  },

  {
    title: "How full is your stack?",
    date: "November 2017",
    type: "Slides only",
    abstract:
      "This talk debates on the title of <em>full stack developer and development</em>, looking at the history of the term, but also how it is percieved by developers and managers.",
  },

  {
    title: "JavaScript is different",
    date: "October 2017",
    type: "Slides only",
    abstract:
      "This talk tries to answer questions like: <em>Why does JavaScript still has bad features and poor design?</em>, <em>Why do developers hate JavaScript?</em> and <em>Why is JavaScript different than other languages?</em>.",
  },
];
