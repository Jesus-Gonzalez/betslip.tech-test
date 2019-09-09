import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { downArrow as downArrowIcon } from 'assets/images'

import styles from './Arrow.module.scss'

const propTypes = {
  className: PropTypes.string,
  isVisible: PropTypes.bool.isRequired
}

const defaultProps = {
  className: ''
}

export const Arrow = ({ className, isVisible, ...props }) => {
  const arrowClass = classnames(className, styles.arrow, isVisible && styles.up)

  return (
    <img
      alt='arrow icon'
      aria-expanded={isVisible}
      src={downArrowIcon}
      className={arrowClass}
      {...props}
    />
  )
}

Arrow.propTypes = propTypes

Arrow.defaultProps = defaultProps
