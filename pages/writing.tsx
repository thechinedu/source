import Writing, { Post } from "@components/Writing";
import { getSortedPostsData } from "@utils/posts";
import type { NextPage } from "next";

type WritingPageProps = {
  allPostsData: Post[];
};

const WritingPage: NextPage<WritingPageProps> = ({ allPostsData }) => (
  <Writing posts={allPostsData} />
);

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default WritingPage;
