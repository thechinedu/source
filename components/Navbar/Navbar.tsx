import styles from "./Navbar.module.css";

import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";

const links = (pathName: string) => [
  {
    href: "/",
    label: "Home",
    iconName: "house-signal",
    isActive: pathName === "/",
  },
  {
    href: "/writing",
    label: "Writing",
    iconName: "pen-clip",
    isActive: pathName === "/writing",
  },
  {
    href: "/labs",
    label: "Labs",
    iconName: "flask",
    isActive: pathName === "/labs",
  },
  {
    href: "/tidbits",
    label: "Tidbits",
    iconName: "cookie-bite",
    isActive: pathName === "/tidbits",
  },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.navWrapper}>
      <Link href="/">
        <a className={styles.logo}>CD</a>
      </Link>

      <div className={styles.navLinksWrapper}>
        <ul className={styles.navLinks}>
          {links(pathname).map(({ href, label, iconName, isActive }) => (
            <li key={label} className={isActive ? styles.activeLink : ""}>
              <Link href={href}>
                <a>
                  <i className={`fa-solid fa-${iconName}`} />
                  <span>{label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
