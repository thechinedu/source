import styles from "./Footer.module.css";

import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <a
          href="https://github.com/thechinedu"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://twitter.com/the_chinedu"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter" />
        </a>
        <a
          href="https://linkedin.com/in/danielchinedu"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin" />
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
