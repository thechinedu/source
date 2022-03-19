import styles from "./Container.module.css";

import { FC } from "react";

const Container: FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
