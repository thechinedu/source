import fs from "fs";
import path from "path";
import matter from "gray-matter";

type PostFrontMatter = {
  title: string;
  date: string;
  excerpt: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
export const getSortedPostsData = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
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
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

// https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths
export function getAllPostPaths() {
  const fileNames = fs.readdirSync(postsDirectory);

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
export const getPostData = (pathSegments: string[]) => {
  const fullPath = path.join(postsDirectory, `${pathSegments.join("-")}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents, { excerpt: true });
  const content = getMarkdownContent(matterResult.content);
  // console.log(matterResult);

  // Combine the data with the id
  return {
    pathSegments,
    ...matterResult.data,
    content,
  };
};

const getMarkdownContent = (content: string) => content.split("---")[1]; // remove excerpt from markdown content
