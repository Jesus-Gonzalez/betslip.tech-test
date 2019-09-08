import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const Button = ({
  children,
  className,
  ...props
}) => {
  const  = React.useMemo(
    () => classnames(className, styles.button),
    [className]
  )

  return (

  )
}
