const POSTS_PER_PAGE = 25;

/**
 * Blog posts are read from the file system:
 * - each post has its own folder, the folder name being the unique "id"
 * - I chose this approach because posts have their own assets (images, components, etc)
 */
function getAllPosts(): Post[] {
  return importAll(require.context("../pages/blog", true, /\.page.mdx$/));
}

export function getPublishedPosts(): Post[] {
  return getAllPosts()
    .filter((post) => isPublished(post) && post.meta.isArchived === false)
    .sort(sortPosts);
}

export function getArchivedPosts(): Post[] {
  return getAllPosts()
    .filter((post) => isPublished(post) && post.meta.isArchived === true)
    .sort(sortPosts);
}

export function getPostsByTag(tag: string): Post[] {
  return getPublishedPosts().filter((post) =>
    post.meta.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAllTags(): Tag[] {
  const tags = new Set<Tag>();

  getPublishedPosts().forEach((post) => {
    post.meta.tags
      .filter((tag) => TAGS[tag] !== undefined)
      .forEach((tag) => tags.add(tag));
  });

  return [...tags];
}

export function getPostsForPage(page: number): Post[] {
  return getPublishedPosts().filter(
    (_, index) =>
      index >= (page - 1) * POSTS_PER_PAGE && index < page * POSTS_PER_PAGE
  );
}

export function getTotalPages(): number {
  const totalPosts = getPublishedPosts();
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE);
  return totalPages;
}

function importAll(r: __WebpackModuleApi.RequireContext) {
  return r.keys().map((fileName: string) => ({
    // not the most solid approach to get the folder name
    // id: fileName.replace(/\/(index.page).mdx/gi, ""),
    id: fileName.replace("/index.page.mdx", ""),
    meta: r(fileName).meta as Metadata,
  }));
}

function sortPosts(a: Post, b: Post) {
  return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
}

function isPublished(post: Post) {
  // in development, display WIP articles also
  if (process.env.NODE_ENV === "development") {
    return true;
  }
  return post.meta.isPublished === true;
}

export interface Post {
  id: string;
  meta: Metadata;
}

export interface Metadata {
  date: string;
  title: string;
  tags: Tag[];
  /** og:image url */
  cover?: string;
  /** text content displayed on the listing page */
  intro: string;
  isPublished: boolean;
  isArchived: boolean;
}

// export type Tag = keyof typeof TAGS;
export type Tag =
  | "css"
  | "html"
  | "react"
  | "javascript"
  | "typescript"
  | "thoughts"
  | "misc";
// | "ui_development"
// | "react_native";

interface TagDetails {
  name: string;
  color: string;
  description: string;
}

export const TAGS: { [key in Tag]: TagDetails } = {
  css: {
    name: "CSS",
    color: "#3d9cd7",
    description:
      "Articles related to styling using either the plain CSS language, pre or post processors, tools, frameworks or methologies.",
  },
  html: {
    name: "HTML",
    color: "#f2662b",
    description: "Articles related to web content, semantics or accessibility.",
  },
  react: {
    name: "React",
    color: "#62dafb",
    description:
      "Articles related to any part of the React ecosystem, such as UI components design, JSX syntax, state management, or libraries and frameworks built on top of React.",
  },
  javascript: {
    name: "JavaScript",
    color: "#f7e014",
    description:
      "Articles related to ECMAScript language features, DOM / Node.js, libraries & frameworks or practices applied in UI and Front-End Development.",
  },
  typescript: {
    name: "TypeScript",
    color: "#047acb",
    description:
      "Articles related to TypeScript features or type systems in general",
  },
  thoughts: {
    name: "Thoughts",
    color: "#e343ff",
    description:
      "Personal thoughts related to software development and design, principles and practices, not bound to a specific language or tehnology.",
  },
  misc: {
    name: "Miscellaneous",
    color: "#888888",
    description: "Articles that don't fall under any specific category.",
  },
  // ui_development: { name: "UI Development", color: "#ff4343" },
  // react_native: { name: "React Native", color: "#47d07c" },
  // tutorial
  // how_to
  // opinions
  // analysis
};

// Unions of object keys in TypeScript
