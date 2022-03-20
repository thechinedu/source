import styles from "./Home.module.css";

import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

import Container from "@components/Container";

const Home: FC = () => {
  return (
    <Container>
      <Head>
        <title>Chinedu Daniel - Software developer</title>
      </Head>
      <nav className={styles.navWrapper}>
        <Link href="/">
          <a className={styles.logo}>CD</a>
        </Link>

        <div className={styles.navLinksWrapper}>
          <ul className={styles.navLinks}>
            <li>Home</li>
            <li>Writing</li>
            <li>Labs</li>
            <li>Tidbits</li>
          </ul>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.intro}>
          <p>
            Psst <span className={styles.wave}>👋🏾</span>my name is
          </p>

          <h1>Chinedu Daniel</h1>
          <h2>I build software for the web</h2>

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

        <section>
          <div>
            <p>8th March, 2020</p>
            <h3>Reimplementing slice in pure JavaScript</h3>

            <p>
              The slice method in JavaScript is a useful utility method, when it
              is called on an array, it will return a shallow copy of a part of
              that array…
            </p>
          </div>
          <div>
            <p>8th March, 2020</p>
            <h3>Reimplementing slice in pure JavaScript</h3>

            <p>
              The slice method in JavaScript is a useful utility method, when it
              is called on an array, it will return a shallow copy of a part of
              that array…
            </p>
          </div>
          <div>
            <p>8th March, 2020</p>
            <h3>Reimplementing slice in pure JavaScript</h3>

            <p>
              The slice method in JavaScript is a useful utility method, when it
              is called on an array, it will return a shallow copy of a part of
              that array…
            </p>
          </div>
          <div>
            <p>8th March, 2020</p>
            <h3>Reimplementing slice in pure JavaScript</h3>

            <p>
              The slice method in JavaScript is a useful utility method, when it
              is called on an array, it will return a shallow copy of a part of
              that array…
            </p>
          </div>
          <div>
            <p>8th March, 2020</p>
            <h3>Reimplementing slice in pure JavaScript</h3>

            <p>
              The slice method in JavaScript is a useful utility method, when it
              is called on an array, it will return a shallow copy of a part of
              that array…
            </p>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default Home;
