import { getSortedPostsData } from "@utils/posts";
import path from "path";

export const getStaticProps = async () => {
  const tidbitsDirectory = path.join(process.cwd(), "tidbits");
  const bits = getSortedPostsData(tidbitsDirectory);
  return {
    props: {
      bits,
    },
  };
};

export { default } from "@components/Tidbits";
