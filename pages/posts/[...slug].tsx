import Article from "@components/Article";
import { getAllPostPaths, getPostData } from "@utils/posts";
import type { NextPage } from "next";

// TODO: Add proper type for postData
const Post: NextPage = ({ postData }: any) => <Article post={postData} />;

export const getStaticPaths = async () => {
  const paths = getAllPostPaths();

  return {
    paths,
    fallback: false,
  };
};

// TODO: use better name for this type once you have a clear idea of what the type should be
type Foo = {
  params: {
    // route matches /posts/:year/:month/:day/:slug so this becomes an array of strings
    // example: ["2020", "08", "01", "hello-world"]
    slug: string[];
  };
};

export const getStaticProps = async ({ params }: Foo) => {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
