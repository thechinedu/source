import Head from "next/head";
import { FC } from "react";

import { CalendarDay } from "@/components/Icons";
import Markdown from "@/components/Markdown";
import type { Post } from "@/components/Writing";
import { format } from "@/utils/date";

import styles from "./Tidbits.module.css";

export type TidbitsProps = {
  bits: Post[];
};

const Tidbits: FC<TidbitsProps> = ({ bits }) => {
  return (
    <>
      <Head>
        <title>Tidbits | Chinedu Daniel - Full Stack Developer</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>Tidbits</h1>

          <p>
            Little nuggets of bite-sized goodness about things I have learnt on
            my coding journey.
          </p>
        </section>

        <section className={styles.recentPosts}>
          {bits.map(({ id, title, date, excerpt }) => (
            <article key={id} className={styles.post}>
              <p>
                <CalendarDay />
                {format(date)}
              </p>
              <h3>{title}</h3>

              <Markdown content={excerpt} />
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Tidbits;
