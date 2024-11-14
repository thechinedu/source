import fs from "fs";
import matter from "gray-matter";
import path from "path";

type PostFrontMatter = {
  title: string;
  date: string;
  excerpt: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
export const getSortedPostsData = (dir = postsDirectory) => {
  // Get file names under /posts
  const fileNames =
    process.env.NODE_ENV === "development"
      ? getAllFiles(dir)
      : getNonDraftFiles(dir);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents, { excerpt: true });
    const matterData = {
      ...matterResult.data,
      excerpt: matterResult.excerpt,
    };
    const [year, month, date, ...slug] = id.split("-");
    const url = `/posts/${year}/${month}/${date}/${slug
      .join("-")
      .replace(/\.md$/, "")}`;

    // Combine the data with the id
    return {
      id,
      ...(matterData as PostFrontMatter),
      url,
    };
  });
  // Sort posts by date
  return allPostsData.sort(
    ({ date: dateA }, { date: dateB }) => +new Date(dateB) - +new Date(dateA)
  );
};

// https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths
export function getAllPostPaths() {
  const fileNames =
    process.env.NODE_ENV === "development"
      ? getAllFiles(postsDirectory)
      : getNonDraftFiles(postsDirectory);

  return fileNames.map((fileName) => {
    const [year, month, date, ...slug] = fileName.split("-");
    return {
      params: {
        slug: [year, month, date, slug.join("-").replace(/\.md$/, "")],
      },
    };
  });
}

// https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops
export const getPostData = (
  pathSegments: string[]
): Omit<PostFrontMatter, "excerpt"> & { content: string } => {
  const fullPath = path.join(postsDirectory, `${pathSegments.join("-")}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const content = getMarkdownContent(matterResult.content);

  return {
    ...(matterResult.data as PostFrontMatter),
    content,
  };
};

const getMarkdownContent = (content: string) => content.split("---")[1]; // remove excerpt from markdown content

const getNonDraftFiles = (dir: string) => {
  const fileNames = fs.readdirSync(dir);
  return fileNames.filter((fileName) => !fileName.startsWith("draft"));
};

const getAllFiles = (dir: string) => {
  return fs.readdirSync(dir);
};
