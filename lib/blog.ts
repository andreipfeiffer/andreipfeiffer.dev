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
    .filter(
      (post) => post.meta.isPublished === true && post.meta.isArchived === false
    )
    .sort(sortPosts);
}

export function getArchivedPosts(): Post[] {
  return getAllPosts()
    .filter(
      (post) => post.meta.isPublished === true && post.meta.isArchived === true
    )
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

export type Post = {
  id: string;
  meta: Metadata;
};

export type Metadata = {
  date: string;
  title: string;
  tags: Tag[];
  /** og:image url */
  cover?: string;
  /** text content displayed on the listing page */
  intro: string;
  isPublished: boolean;
  isArchived: boolean;
};

export type Tag = keyof typeof TAGS;

export const TAGS = {
  css: { name: "CSS", color: "#3d9cd7" },
  html: { name: "HTML", color: "#f2662b" },
  react: { name: "React", color: "#62dafb" },
  javascript: { name: "JavaScript", color: "#f7e014" },
  typescript: { name: "TypeScript", color: "#047acb" },
  code_design: { name: "Code Design", color: "#e343ff" },
  ui_development: { name: "UI Development", color: "#ff4343" },
  react_native: { name: "React Native", color: "#47d07c" },
} as const;
