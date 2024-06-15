import styles from "./Writing.module.css";

import { format } from "@utils/date";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

export type Post = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  url: string;
};

type WritingProps = {
  posts: Post[];
};

const Writing: FC<WritingProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Writing | Chinedu Daniel - Full Stack Developer</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>Writing</h1>

          <p>
            Welcome to my writer&apos;s corner where I get to write about
            anything I want (mostly technical articles but sometimes other
            thoughts).
          </p>
        </section>

        <section className={styles.recentPosts}>
          {posts.map(({ id, title, date, excerpt, url }) => (
            <article key={id} className={styles.post}>
              <Link href={url} passHref>
                <p>
                  <i className="fa-solid fa-calendar-day" />
                  {format(date)}
                </p>
                <h3>{title}</h3>

                <p>{excerpt}</p>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Writing;
