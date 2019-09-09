import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.scss'

const propTypes = {
  className: PropTypes.string,
  country: PropTypes.string.isRequired
}

const defaultProps = {
  className: ''
}

export const Flag = React.memo(({
  className,
  country,
  ...props
}) => {
  const imgClass = React.useMemo(
    () => classnames(className, styles.flag, styles[`flag${country}`]),
    [className, country]
  )

  return (
    <div
      {...props}
      className={imgClass}
    />
  )
})

Flag.propTypes = propTypes

Flag.defaultProps = defaultProps
