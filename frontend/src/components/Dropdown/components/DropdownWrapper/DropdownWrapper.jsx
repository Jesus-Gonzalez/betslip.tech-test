import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const DropdownWrapper = ({
  children,
  className,
  ...props
}) => {
  const wrapperClass = React.useMemo(
    () => classnames(className, styles.wrapper),
    [className]
  )

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  )
}
