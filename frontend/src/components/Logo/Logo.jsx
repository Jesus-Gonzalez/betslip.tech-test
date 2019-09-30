import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.scss'

const propTypes = {
  className: PropTypes.string,
  component: PropTypes.string
}

const defaultProps = {
  className: '',
  component: 'h1'
}

export const Logo = ({
  className,
  component: Component,
  ...props
}) => {
  const logoClass = classnames(className, styles.logo)

  return (
    <Component className={logoClass}>gitcasino</Component>
  )
}

Logo.propTypes = propTypes
Logo.defaultProps = defaultProps
