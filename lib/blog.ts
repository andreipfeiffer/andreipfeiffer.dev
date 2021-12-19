const POSTS_PER_PAGE = 25;

/**
 * Blog posts are read from the file system:
 * - each post has its own folder, the folder name being the unique "id"
 * - I chose this approach because posts have their own assets (images, components, etc)
 */
function getAllPosts(): Post[] {
  return importAll(require.context("../pages/blog", true, /\.page.mdx$/));
}

export function getRssPosts(): Post[] {
  return getAllPosts()
    .filter(
      (post) =>
        post.meta.visibility === "public" || post.meta.visibility === "unlisted"
    )
    .sort(sortPosts);
}

export function getPublishedPosts(): Post[] {
  return getAllPosts()
    .filter((post) => isPublished(post) && post.meta.visibility !== "archived")
    .sort(sortPosts);
}

export function getArchivedPosts(): Post[] {
  return getAllPosts()
    .filter((post) => post.meta.visibility === "archived")
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
  // in development, display all articles
  if (process.env.NODE_ENV === "development") {
    return true;
  }
  return post.meta.visibility === "public";
}

export interface Post {
  id: string;
  meta: Metadata;
}

enum VisibilityEnum {
  // available on blog list + RSS + direct url
  "public" = "public",
  // available on RSS + direct url
  "unlisted" = "unlisted",
  // available on direct url
  "private" = "private",
  // available only in development
  "draft" = "draft",
  // available only on archive page
  "archived" = "archived",
}

export type Visibility = keyof typeof VisibilityEnum;

export interface Metadata {
  date: string;
  title: string;
  subtitle?: string;
  tags: Tag[];
  tags_extra: string[];
  /** og:image url */
  cover?: string;
  cover_width?: number;
  cover_height?: number;
  /** text content displayed on the listing page */
  intro: string;
  visibility: Visibility;
}

export type Tag =
  | "css"
  | "html"
  | "react"
  | "javascript"
  | "typescript"
  | "entropy"
  | "learning"
  | "misc"
  | "ui";

interface TagDetails {
  name: string;
  color: string;
  text: "dark" | "light";
  description: string;
}

export const TAGS: { [key in Tag]: TagDetails } = {
  css: {
    name: "CSS",
    color: "#3434FF",
    text: "light",
    description:
      "Articles related to styling using either the plain CSS language, pre or post processors, tools, frameworks, or methologies.",
  },
  html: {
    name: "HTML",
    color: "#FF7829",
    text: "light",
    description:
      "Articles related to web content, markup, semantics, or accessibility.",
  },
  react: {
    name: "React",
    color: "#61DAFB",
    text: "dark",
    description:
      "Articles related to any part of the React ecosystem, such as UI components design, JSX syntax, state management, or libraries and frameworks built on top of React.",
  },
  javascript: {
    name: "JavaScript",
    color: "#F7DF1E",
    text: "dark",
    description:
      "Articles related to ECMAScript language features, DOM / Node.js, libraries, frameworks, or practices applied in UI and Front-End Development.",
  },
  typescript: {
    name: "TypeScript",
    color: "#1C8FDC",
    text: "light",
    description:
      "Articles related to TypeScript features or type systems in general",
  },
  entropy: {
    name: "Software entropy",
    color: "#9163FF",
    text: "light",
    description:
      "Personal thoughts on fighting software entropy: principles, practices, code design and more.",
  },
  misc: {
    name: "Miscellaneous",
    color: "#888888",
    text: "light",
    description: "Articles that don't fall under any specific category.",
  },
  learning: {
    name: "Learning",
    color: "#cddc39",
    text: "dark",
    description:
      "Articles that touch upon continuous learning, teaching techniques, or knowledge sharing.",
  },
  ui: {
    name: "User Interface",
    color: "#0dec71",
    text: "dark",
    description:
      "Articles that cover any engineering or design aspects of UI development.",
  },
} as const;
