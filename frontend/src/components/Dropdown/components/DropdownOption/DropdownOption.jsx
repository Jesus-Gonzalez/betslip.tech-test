import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.scss'

const propTypes = {
  labelKey: PropTypes.string,
  option: PropTypes.shapeOf({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired
  })
}

const defaultProps = {
  labelKey: 'label'
}

export const DropdownOption = ({
  className,
  labelKey,
  onSelectDropdownOption,
  option,
  selectedOption,
  ...props
}) => {
  const selected = React.useMemo(
    () => selectedOption === option,
    [selectedOption, option]
  )

  const optionClassname = React.useMemo(
    () => classnames(className, styles.option, { selected }),
    [className]
  )

  return (
    <li
      className={optionClassname}
      onClick={() => onSelectDropdownOption(option)}
    >
      {option[labelKey]}
    </li>
  )
}

DropdownOption.propTypes = propTypes

DropdownOption.defaultProps = defaultProps
