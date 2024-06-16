import Head from "next/head";
import { FC } from "react";

import { JS, Tag, TS } from "@/components/Icons";

import styles from "./Labs.module.css";

const Labs: FC = () => {
  return (
    <>
      <Head>
        <title>Labs | Chinedu Daniel - Full Stack Developer</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>Labs</h1>

          <p>
            Welcome to the lab. Herein lies my projects, experiments and
            whatnot. Have a look around, you might see something you like.
          </p>
        </section>

        <section className={styles.labs}>
          <article className={styles.lab}>
            <a
              href="https://github.com/thechinedu/prisma-prime"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                <TS />
              </p>
              <h3>
                <Tag className={styles.tagIcon} />
                Prisma Prime
              </h3>

              <p>Schema definition for Prisma in JavaScript/TypeScript.</p>
            </a>
          </article>
          <article className={styles.lab}>
            <a
              href="https://github.com/thechinedu/overhaul"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                <JS />
              </p>
              <h3>
                <Tag className={styles.tagIcon} />
                Overhaul
              </h3>

              <p>
                Chrome extension that gives a new look and feel to
                Nairaland&apos;s desktop site.
              </p>
            </a>
          </article>
        </section>
      </main>
    </>
  );
};

export default Labs;
