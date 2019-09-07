import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const Main = React.memo(({
  children,
  className,
  ...props
}) => {
  const mainClass = React.useMemo(
    () => classnames(className, styles.main),
    [className]
  )

  return (
    <section
      {...props}
      className={mainClass}
    >
      {children}
    </section>
  )
})
