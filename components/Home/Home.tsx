import styles from "./Home.module.css";

import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Chinedu Daniel - Full Stack Developer | Home</title>
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
            <a href="https://forto.com" target="_blank" rel="noreferrer">
              Forto
            </a>{" "}
            building useful products for humans.
          </p>

          <a href="mailto:chinedudaniel7@gmail.com?subject=Hi+Chinedu">
            Say Hi
          </a>
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

export default Home;
