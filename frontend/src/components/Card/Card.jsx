import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const Card = ({
  children,
  className,
  ...props
}) => {
  const cardClass = React.useMemo(
    () => classnames(className, styles.card),
    [className]
  )

  return (
    <div
      {...props}
      className={cardClass}
    >
      {children}
    </div>
  )
}
