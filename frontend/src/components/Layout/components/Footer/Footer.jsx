import React from 'react'

import { Logo } from 'components'

import { Links, Social } from './__components'

import styles from './styles.module.scss'

export const Footer = React.memo(({
  className,
  ...props
}) => (
  <footer
    {...props}
    className={styles.footer}
  >
    <Logo
      className={styles.logo}
    />
    <Social />
    <Links />
  </footer>
))
