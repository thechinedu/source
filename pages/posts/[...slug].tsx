import Article from "@components/Article";
import type { ArticleProps as PostProps, PostData } from "@components/Article";
import { getAllPostPaths, getPostData } from "@utils/posts";
import type { NextPage } from "next";

type PathProps = {
  params: {
    // route matches /posts/:year/:month/:day/:slug so this becomes an array of strings
    // example: ["2020", "08", "01", "hello-world"]
    slug: string[];
  };
};

const Post: NextPage<PostProps> = ({ post }) => <Article post={post} />;

export const getStaticPaths = async () => {
  const paths = getAllPostPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: PathProps) => {
  const post: PostData = getPostData(params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
