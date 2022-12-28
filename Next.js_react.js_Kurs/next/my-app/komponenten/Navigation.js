import Link from 'next/link'
import styles from '../styles/navigation.module.css'

export default function Navigation() {
  return (
    <ul className={styles.navbox}>
      <li className={styles.navitem}>
        <Link href="/">Startseite</Link>
      </li>
      <li className={styles.navitem}>
        <Link href="/artikel">Artikel</Link>
      </li>
      <li className={styles.navitem}>
        <Link href="/artikel/pullover">Pullover</Link>
      </li>
      <li className={styles.navitem}>
        <Link href="/artikel/hose">Hose</Link>
      </li>
      <li className={styles.navitem}>
        <Link href="/benutzer">Benutzer</Link>
      </li>
    </ul>
  );
}
