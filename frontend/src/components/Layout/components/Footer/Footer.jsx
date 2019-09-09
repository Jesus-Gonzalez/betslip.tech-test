import React from 'react'

import { logo } from 'assets/images'

import { Image } from 'components'

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
    <Image
      className={styles.logo}
      src={logo}
    />
    <Social />
    <Links />
  </footer>
))
