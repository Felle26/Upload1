import styles from './../../styles/Home.module.css'
import Head from 'next/head';
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
      
      <h1>Artikelübersicht</h1>
      {['1', '2', '3', '4', '5', '6'].map(path => {
        return (
          <div key={path}>
            <Image src={`/bilder/${path}.jpg`} alt="Artikel" width={600} height={600} />
          </div>
      )
      })}
    </div>
  );
}
