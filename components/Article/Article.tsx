import styles from "./Article.module.css";

import Markdown from "@components/Markdown";
import { format } from "@utils/date";
import Head from "next/head";
import { FC } from "react";

export type PostData = {
  title: string;
  date: string;
  content: string;
};

export type ArticleProps = {
  post: PostData;
};

const Article: FC<ArticleProps> = ({ post: { title, date, content } }) => {
  return (
    <>
      <Head>
        <title>{title} | Chinedu Daniel - Full Stack Developer</title>
      </Head>
      <article className={styles.article}>
        <header>
          <h1>{title}</h1>
          <span>{format(date)}</span>
        </header>

        <main>
          <Markdown content={content} />
        </main>
      </article>
    </>
  );
};

export default Article;
