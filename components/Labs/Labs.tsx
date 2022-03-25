import styles from "@components/Home/Home.module.css";

import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const Labs: FC = () => {
  return (
    <>
      <Head>
        <title>Chinedu Daniel - Full Stack Developer | Labs</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>Labs</h1>

          <p>
            Welcome to the lab. Herein lies my projects, experiments and
            whatnot. Have a look around, you might see something you like.
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

export default Labs;
