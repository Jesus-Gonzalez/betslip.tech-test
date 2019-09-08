import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const Input = ({ className, input, ...props }) => {
  const inputClass = React.memo(
    () => classnames(className, styles.input),
    [className]
  )

  return (
    <input
      className={inputClass}
      {...input}
      {...props}
    />
  )
}
