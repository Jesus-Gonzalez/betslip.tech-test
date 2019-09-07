import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const Body = React.memo(({
  children,
  className,
  ...props
}) => {
  const bodyClass = React.useMemo(
    () => classnames(className, styles.body),
    [className]
  )

  return (
    <div
      {...props}
      className={bodyClass}
    >
      {children}
    </div>
  )
})
