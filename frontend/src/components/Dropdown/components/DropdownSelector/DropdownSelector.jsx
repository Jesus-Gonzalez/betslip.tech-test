import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { DropdownOption } from 'components/Dropdown/components'

import styles from './styles.module.scss'

const propTypes = {
  className: PropTypes.string,
  labelKey: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.object
}

const defaultProps = {
  className: '',
  labelKey: '',
  selected: null
}

export const DropdownSelector = ({
  className,
  labelKey,
  onChange,
  options,
  selected,
  ...props
}) => {
  const selectorClass = React.useMemo(
    () => classnames(className, styles.selector),
    [className]
  )

  const renderedOptions = React.useMemo(
    () => options.map(option => (
      <DropdownOption
        key={option.value}
        labelKey={labelKey}
        onChange={onChange}
        option={option}
        selected={selected}
      />
    )),
    [options, labelKey, onChange, selected]
  )

  return (
    <ul className={selectorClass}>
      {renderedOptions}
    </ul>
  )
}

DropdownSelector.propTypes = propTypes

DropdownSelector.defaultProps = defaultProps
