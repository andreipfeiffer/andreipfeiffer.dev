import fs from "fs";
import path from "path";
import matter, { GrayMatterFile, Input } from "gray-matter";
import remark from "remark";
import html from "remark-html";
// remark plugins
import highlight from "remark-highlight.js";
import slug from "remark-slug";
import headings from "remark-autolink-headings";
import externalLinks from "remark-external-links";
import toc from "remark-toc";

type FrontMatter = {
  date: string;
  title: string;
  tags?: string;
};

type Article = {
  id: string;
  date: string;
  title: string;
  tags?: string;
  content: string;
};

export type ArticlePreview = Omit<Article, "content">;

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(): ArticlePreview[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as FrontMatter),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(toc, { maxDepth: 2 })
    .use(slug)
    // heading links can be customized: https://github.com/remarkjs/remark-autolink-headings
    .use(headings, {
      content: {
        type: "element",
        tagName: "span",
        properties: { className: ["permalink"] },
      },
    })
    .use(highlight)
    .use(externalLinks, { target: false, rel: ["noopener"] })
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
