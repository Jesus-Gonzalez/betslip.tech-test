import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.scss'

const propTypes = {
  className: PropTypes.string,
  isVisible: PropTypes.bool.isRequired
}

const defaultProps = {
  className: ''
}

export const Arrow = ({ className, isVisible, ...props }) => {
  const arrowClass = classnames(className, isVisible && styles.up)

  return (
    <img
      alt='arrow icon'
      aria-expanded={isVisible}
      src='/assets/images/down-arrow.svg'
      className={arrowClass}
      {...props}
    />
  )
}

Arrow.propTypes = propTypes

Arrow.defaultProps = defaultProps