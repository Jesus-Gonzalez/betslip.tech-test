import React from 'react'

import styles from './Header.module.scss'

export const Header = React.memo(() => (
  <header>
    <h1 className={styles.title}>Receipt</h1>
  </header>
))
