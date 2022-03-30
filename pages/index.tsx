import Home from "@components/Home";
import { Post } from "@components/Writing";
import { getSortedPostsData } from "@utils/posts";
import type { NextPage } from "next";

type HomePageProps = {
  allPostsData: Post[];
};

const HomePage: NextPage<HomePageProps> = ({ allPostsData }) => (
  <Home posts={allPostsData} />
);

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default HomePage;
