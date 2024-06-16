import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

import { CalendarDay } from "@/components/Icons";
import { Post } from "@/components/Writing";
import { format } from "@/utils/date";

import styles from "./Home.module.css";

export type HomeProps = {
  posts: Post[];
};

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Chinedu Daniel - Full Stack Developer</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.intro}>
          <p>
            Psst <span className={styles.wave}>👋🏾</span>my name is
          </p>

          <h1>Chinedu Daniel</h1>
          <h2>
            I <span>build</span> software for the <span>web</span>
          </h2>

          <p>
            I am a software developer with a penchant for building great
            experiences on the web. Welcome to my own slice of the internet.
          </p>

          <p>
            I currently work at{" "}
            <a href="https://leanix.net" target="_blank" rel="noreferrer">
              SAP LeanIX
            </a>{" "}
            where I build{" "}
            <a
              href="https://www.leanix.net/en/enterprise-architecture/features"
              target="_blank"
              rel="noreferrer"
            >
              useful products
            </a>{" "}
            for humans.
          </p>

          <a href="mailto:chinedudaniel7@gmail.com?subject=Hi+Chinedu">
            Say Hi
          </a>
        </section>

        <section className={styles.recentPosts}>
          {posts.map(({ id, title, date, excerpt, url }) => (
            <article key={id} className={styles.post}>
              <Link href={url} passHref>
                <p>
                  <CalendarDay />
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

export default Home;
