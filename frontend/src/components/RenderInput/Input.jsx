import React from 'react'
import classnames from 'classnames'

import styles from './Input.module.scss'

export const Input = ({ className, input, ...props }) => {
  const inputClass = React.useMemo(
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
