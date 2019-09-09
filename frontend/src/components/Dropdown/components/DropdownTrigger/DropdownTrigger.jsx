import React from 'react'

import { Arrow } from './__components'

import styles from './DropdownTrigger.module.scss'

export const DropdownTrigger = ({
  className,
  isVisible,
  selected,
  setIsVisible,
  ...props
}) => (
  <div
    className={styles.trigger}
    data-dropdown-clickable
    onClick={() => setIsVisible(!isVisible)}
  >
    <label className={styles.label}>{selected.label}</label>
    <Arrow className={styles.arrow} isVisible={isVisible} />
  </div>
)
