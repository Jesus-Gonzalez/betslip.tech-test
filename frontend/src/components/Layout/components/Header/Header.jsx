import React from 'react'
import classnames from 'classnames'

import { Logo } from 'components'

import styles from './styles.module.scss'

export const Header = React.memo(({
  children,
  className,
  ...props
}) => {
  const headerClass = React.useMemo(
    () => classnames(className, styles.header),
    [className]
  )

  return (
    <header
      {...props}
      className={headerClass}
    >
      <Logo
        className={styles.logo}
      />
    </header>
  )
})
