import Article from "@components/Article";
import { getAllPostPaths, getPostData } from "@utils/posts";
import type { NextPage } from "next";

type PathProps = {
  params: {
    // route matches /posts/:year/:month/:day/:slug so this becomes an array of strings
    // example: ["2020", "08", "01", "hello-world"]
    slug: string[];
  };
};

// TODO: Add proper type for postData
const Post: NextPage = ({ postData }: any) => <Article post={postData} />;

export const getStaticPaths = async () => {
  const paths = getAllPostPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: PathProps) => {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
