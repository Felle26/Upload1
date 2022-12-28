import Navbar from './Navbar'
import styles from './../styles/layout.module.css'

import React from 'react'

export default function Layout({children}) {
    return (
      <>
            <Navbar />
            
        <div className={styles.main}>{children}</div>
      </>
    );
}
