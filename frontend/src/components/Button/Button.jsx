import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const Button = ({
  children,
  className,
  ...props
}) => {
  const buttonClass = React.useMemo(
    () => classnames(className, styles.button),
    [className]
  )

  return (
    <button
      {...props}
      className={buttonClass}
    >
      {children}
    </button>
  )
}
