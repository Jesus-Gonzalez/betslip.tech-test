import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

import { Arrow } from './__components'

export const DropdownTrigger = ({
  className,
  isVisible,
  selectedOption,
  ...props
}) => {
  const triggerClass = React.useMemo(
    () => classnames(className, styles.trigger),
    [className]
  )

  return (
    <div className={triggerClass}>
      <label>{selectedOption.label}</label>
      <Arrow isVisible={isVisible} />
    </div>
  )
}
