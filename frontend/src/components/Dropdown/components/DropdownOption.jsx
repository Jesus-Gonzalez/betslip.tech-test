import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './DropdownOption.module.scss'

const propTypes = {
  labelKey: PropTypes.string,
  option: PropTypes.object.isRequired
}

const defaultProps = {
  labelKey: 'label'
}

export const DropdownOption = ({
  className,
  labelKey,
  onChange,
  option,
  selected,
  ...props
}) => {
  const isSelected = React.useMemo(
    () => selected === option,
    [selected, option]
  )

  const optionClassname = React.useMemo(
    () => classnames(className, styles.option, isSelected && styles.selected),
    [className, isSelected]
  )

  return (
    <li
      className={optionClassname}
      data-dropdown-clickable
      onClick={() => onChange(option)}
    >
      {option[labelKey || 'label']}
    </li>
  )
}

DropdownOption.propTypes = propTypes

DropdownOption.defaultProps = defaultProps
