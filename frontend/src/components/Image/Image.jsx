import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const Image = ({
  className,
  ...props
}) => {
  const imageClass = React.useMemo(
    () => classnames(className, styles.image),
    [className]
  )

  return (
    <img
      {...props}
      className={imageClass}
    />
  )
}
