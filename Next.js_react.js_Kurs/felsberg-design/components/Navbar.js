import Link from "next/link";
import styles from './../styles/Navbar.module.css'
export default function Navbar() {
    return (
      <div>
        <div className={styles.navbar}>
          <img src="./../content/img/df-logo.svg" alt="" />
          <Link className={styles.linknav} href="/">
            Home
          </Link>
          <Link className={styles.linknav} href="about">
            Über mich
          </Link>
          <Link className={styles.linknav} href="tech">
            {" "}
            Tech-Stack
          </Link>
          <Link className={styles.linknav} href="software">
            {" "}
            Software
          </Link>
          <Link className={styles.linknav} href="projects">
            {" "}
            Projekte
          </Link>
          <Link className={styles.linknav} href="contact">
            {" "}
            Kontakt
          </Link>
        </div>
      </div>
    );
}