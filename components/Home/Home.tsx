import styles from "./Home.module.css";

import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

import Container from "@components/Container";

const Home: FC = () => {
  return (
    <Container>
      <Head>
        <title>Chinedu Daniel - Full Stack Developer</title>
      </Head>
      <nav className={styles.navWrapper}>
        <Link href="/">
          <a className={styles.logo}>CD</a>
        </Link>

        <div className={styles.navLinksWrapper}>
          <ul className={styles.navLinks}>
            <li className={styles.activeLink}>
              <Link href="/">
                <a>
                  <i className="fa-solid fa-house-signal" />
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/writing">
                <a>
                  <i className="fa-solid fa-pen-clip" />
                  <span>Writing</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/labs">
                <a>
                  <i className="fa-solid fa-flask" />
                  <span>Labs</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/tidbits">
                <a>
                  <i className="fa-solid fa-cookie-bite" />
                  <span>Tidbits</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

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
    </Container>
  );
};

export default Home;
