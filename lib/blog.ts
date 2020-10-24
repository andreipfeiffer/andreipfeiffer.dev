/**
 * Blog posts are read from the file system:
 * - each post has its own folder, the folder name being the unique "id"
 * - I chose this approach because posts have their own assets (images, components, etc)
 */
export function getAllPosts(): Post[] {
  return importAll(require.context("../pages/blog", true, /\.mdx$/));
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) => post.meta.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();

  getAllPosts().forEach((post) => {
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
  tags: string[];
  category: Category;
};

type Category =
  | "mobile"
  | "javascript"
  | "css"
  | "development"
  | "non-technical";
