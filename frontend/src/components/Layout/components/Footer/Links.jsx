import React from 'react'

import styles from './Links.module.scss'

export const Links = React.memo(({
  className,
  ...props
}) => (
  <ul className={styles.list}>
    <li>About Us</li>
    <li>Advertising</li>
    <li>Contact Us</li>
    <li>Help</li>
    <li>Careers</li>
    <li>Privacy & Cookies</li>
    <li>Mobile</li>
  </ul>
))
