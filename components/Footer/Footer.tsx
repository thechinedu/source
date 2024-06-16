import { FC } from "react";

import { Github, LinkedIn, Twitter } from "@/components/Icons";

import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <a
          href="https://github.com/thechinedu"
          target="_blank"
          rel="noreferrer"
          aria-label="Github profile"
        >
          <Github />
        </a>
        <a
          href="https://twitter.com/the_chinedu"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter profile"
        >
          <Twitter />
        </a>
        <a
          href="https://linkedin.com/in/danielchinedu"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          <LinkedIn />
        </a>
        <span className={styles.pipe} />
        <span className={styles.info}>
          Designed and built by Chinedu Daniel &copy; {new Date().getFullYear()}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
