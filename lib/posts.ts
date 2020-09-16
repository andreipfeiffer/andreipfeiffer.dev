import fs from "fs";
import path from "path";
import matter, { GrayMatterFile, Input } from "gray-matter";
import remark from "remark";
import html from "remark-html";
import highlight from "remark-highlight.js";
import slug from "remark-slug";
import headings from "remark-autolink-headings";
import externalLinks from "remark-external-links";
import toc from "remark-toc";
import readingTime from "reading-time";

type Category =
  | "mobile"
  | "javascript"
  | "css"
  | "development"
  | "non-technical";

type FrontMatter = {
  date: string;
  title: string;
  tags: string[];
  category: Category;
};

export type Article = {
  id: string;
  content: string;
  minutes: number;
} & FrontMatter;

export type ArticlePreview = Pick<Article, "id"> & FrontMatter;

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
      ...getFrontMatter(matterResult),
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

export async function getPostData(id: string): Promise<Article> {
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

  const content = processedContent.toString();
  const readingStats = readingTime(content);

  // Combine the data with the id and content
  return {
    id,
    content,
    minutes: readingStats.minutes,
    ...getFrontMatter(matterResult),
  };
}

function getFrontMatter(matter: GrayMatterFile<string>): FrontMatter {
  const { date, title, category, tags } = matter.data;
  const _tags = tags ? tags.split(",") : [];
  const _category = category || null;

  return { date, title, category: _category, tags: _tags };
}
