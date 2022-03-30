import { getSortedPostsData } from "@utils/posts";

export const getStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};

export { default } from "@components/Writing";
