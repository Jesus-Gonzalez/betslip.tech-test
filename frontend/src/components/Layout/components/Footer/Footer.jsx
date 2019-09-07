import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const Footer = React.memo(({
  className,
  ...props
}) => {
  const footerClass = React.useMemo(
    () => classnames(className, styles.footer),
    [className]
  )

  return (
    <footer
      {...props}
      className={footerClass}
    >
      Developed by Jesus Gonzalez Jaen as a Technical Test for OddsChecker
    </footer>
  )
})
