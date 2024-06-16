import path from "path";

import { getSortedPostsData } from "@/utils/posts";

export const getStaticProps = async () => {
  const tidbitsDirectory = path.join(process.cwd(), "tidbits");
  const bits = getSortedPostsData(tidbitsDirectory);
  return {
    props: {
      bits,
    },
  };
};

export { default } from "@/components/Tidbits";
