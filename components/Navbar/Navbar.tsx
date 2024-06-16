import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

import { CookieBite, Flask, Home, PenClip } from "@/components/Icons";

import styles from "./Navbar.module.css";

const links = (pathName: string) => [
  {
    href: "/",
    label: "Home",
    icon: <Home />,
    isActive: pathName === "/",
  },
  {
    href: "/writing",
    label: "Writing",
    icon: <PenClip />,
    isActive: pathName === "/writing",
  },
  {
    href: "/labs",
    label: "Labs",
    icon: <Flask />,
    isActive: pathName === "/labs",
  },
  {
    href: "/tidbits",
    label: "Tidbits",
    icon: <CookieBite />,
    isActive: pathName === "/tidbits",
  },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.navWrapper}>
      <Link href="/" className={styles.logo}>
        CD
      </Link>

      <div className={styles.navLinksWrapper}>
        <ul className={styles.navLinks}>
          {links(pathname).map(({ href, label, icon, isActive }) => (
            <li key={label} className={isActive ? styles.activeLink : ""}>
              <Link href={href} passHref>
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
