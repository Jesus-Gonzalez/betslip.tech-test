import React from 'react'
import PropTypes from 'prop-types'

import { DropdownOption } from 'components/Dropdown/components'

import styles from './DropdownSelector.module.scss'

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
    <div className={styles.wrapper}>
      <ul className={styles.selector}>
        {renderedOptions}
      </ul>
    </div>
  )
}

DropdownSelector.propTypes = propTypes

DropdownSelector.defaultProps = defaultProps
