import Home from "@components/Home";
import { getSortedPostsData } from "@utils/posts";
import type { NextPage } from "next";

type PostData = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  url: string;
};

type HomePageProps = {
  allPostsData: PostData[];
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
