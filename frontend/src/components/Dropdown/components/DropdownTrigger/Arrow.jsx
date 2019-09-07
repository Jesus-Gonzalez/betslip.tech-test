import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const Arrow = ({ className, isVisible, ...props }) => {
  const arrowClass = classnames(className, isVisible && styles.up)

  return (
    <img
      src='/assets/images/down-arrow.svg'
      className={arrowClass}
      {...props}
    />
  )
}
