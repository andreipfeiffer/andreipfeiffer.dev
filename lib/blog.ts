/**
 * Blog posts are read from the file system:
 * - each post has its own folder, the folder name being the unique "id"
 * - I chose this approach because posts have their own assets (images, components, etc)
 */
function getAllPosts(): Post[] {
  return importAll(require.context("../pages/blog", true, /\.mdx$/));
}

export function getPublishedPosts(): Post[] {
  return getAllPosts().filter(
    (post) => post.meta.isPublished === true && post.meta.isArchived === false
  );
}

export function getArchivedPosts(): Post[] {
  return getAllPosts().filter(
    (post) => post.meta.isPublished === true && post.meta.isArchived === true
  );
}

export function getPostsByTag(tag: string): Post[] {
  return getPublishedPosts().filter((post) =>
    post.meta.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAllTags(): Tag[] {
  const tags = new Set<Tag>();

  getPublishedPosts().forEach((post) => {
    post.meta.tags.forEach((tag) => tags.add(tag));
  });

  return [...tags];
}

function importAll(r: any /* __WebpackModuleApi.RequireContext */) {
  return r.keys().map((fileName: string) => ({
    // not the most solid approach to get the folder name
    id: fileName.replace("/index.mdx", ""),
    meta: r(fileName).meta as Metadata,
  }));
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
  css: { name: "CSS" },
  html: { name: "HTML" },
  react: { name: "React" },
  javascript: { name: "JavaScript" },
  typescript: { name: "TypeScript" },
  code_design: { name: "Code Design" },
  ui_development: { name: "UI Development" },
} as const;
