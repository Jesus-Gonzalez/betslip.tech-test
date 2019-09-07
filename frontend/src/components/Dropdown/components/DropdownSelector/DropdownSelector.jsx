import React from 'react'
import classnames from 'classnames'

import { DropdownOption } from 'components/Dropdown/components'

import styles from './styles.module.scss'

export const DropdownSelector = ({
  className,
  options,
  selectedOption,
  ...props
}) => {
  const selectorClass = React.useMemo(
    () => classnames(className, styles.selector),
    [className]
  )

  const renderedOptions = React.useMemo(
    () => options.map(option => (
      <DropdownOption
        {...props}
        key={option.value}
        option={option}
      />
    )),
    [options]
  )

  return (
    <ul className={selectorClass}>
      {renderedOptions}
    </ul>
  )
}
