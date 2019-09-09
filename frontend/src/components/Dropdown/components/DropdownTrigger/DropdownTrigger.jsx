import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

import { Arrow } from './__components'

export const DropdownTrigger = ({
  className,
  isVisible,
  selected,
  setIsVisible,
  ...props
}) => {
  const triggerClass = React.useMemo(
    () => classnames(className, styles.trigger),
    [className]
  )

  return (
    <div className={triggerClass} onClick={() => setIsVisible(!isVisible)}>
      <label>{selected.label}</label>
      <Arrow isVisible={isVisible} />
    </div>
  )
}
