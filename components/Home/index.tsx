import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Writing</li>
          <li>Labs</li>
          <li>Tidbits</li>
        </ul>
      </nav>

      <main>
        <p>Psst, my name is</p>
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
      </main>
    </>
  );
};

export default Home;
