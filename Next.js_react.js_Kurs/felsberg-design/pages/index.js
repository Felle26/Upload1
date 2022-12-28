import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <head>
        <title>Willkommen</title>
        <meta name="keywords" content="next.js, react" />
      </head>
      <h1>Willkommen bei Felsberg-Design</h1>
    </div>
  );
}
