import styles from "./Writing.module.css";

import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const Writing: FC = () => {
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
          <article className={styles.post}>
            <Link href="/">
              <a>
                <p>
                  <i className="fa-solid fa-calendar-day" />
                  8th March, 2020
                </p>
                <h3>Reimplementing slice in pure JavaScript</h3>

                <p>
                  The slice method in JavaScript is a useful utility method,
                  when it is called on an array, it will return a shallow copy
                  of a part of that array…
                </p>
              </a>
            </Link>
          </article>
          <article className={styles.post}>
            <Link href="/">
              <a>
                <p>
                  <i className="fa-solid fa-calendar-day" />
                  8th March, 2020
                </p>
                <h3>Reimplementing slice in pure JavaScript</h3>

                <p>
                  The slice method in JavaScript is a useful utility method,
                  when it is called on an array, it will return a shallow copy
                  of a part of that array…
                </p>
              </a>
            </Link>
          </article>
          <article className={styles.post}>
            <Link href="/">
              <a>
                <p>
                  <i className="fa-solid fa-calendar-day" />
                  8th March, 2020
                </p>
                <h3>Reimplementing slice in pure JavaScript</h3>

                <p>
                  The slice method in JavaScript is a useful utility method,
                  when it is called on an array, it will return a shallow copy
                  of a part of that array…
                </p>
              </a>
            </Link>
          </article>
          <article className={styles.post}>
            <Link href="/">
              <a>
                <p>
                  <i className="fa-solid fa-calendar-day" />
                  8th March, 2020
                </p>
                <h3>Reimplementing slice in pure JavaScript</h3>

                <p>
                  The slice method in JavaScript is a useful utility method,
                  when it is called on an array, it will return a shallow copy
                  of a part of that array…
                </p>
              </a>
            </Link>
          </article>
          <article className={styles.post}>
            <Link href="/">
              <a>
                <p>
                  <i className="fa-solid fa-calendar-day" />
                  8th March, 2020
                </p>
                <h3>Reimplementing slice in pure JavaScript</h3>

                <p>
                  The slice method in JavaScript is a useful utility method,
                  when it is called on an array, it will return a shallow copy
                  of a part of that array…
                </p>
              </a>
            </Link>
          </article>
        </section>
      </main>
    </>
  );
};

export default Writing;
