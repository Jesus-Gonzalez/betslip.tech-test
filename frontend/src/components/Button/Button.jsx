import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.scss'

const propTypes = {
  submit: PropTypes.bool,
  type: PropTypes.string
}

const defaultProps = {
  submit: false,
  type: ''
}

export const Button = React.memo(({
  children,
  className,
  submit,
  type,
  ...props
}) => {
  const buttonClass = React.useMemo(
    () => classnames(className, styles.button),
    [className]
  )

  const buttonType = React.useMemo(
    () => type || submit ? 'submit' : 'button',
    [type, submit]
  )

  return (
    <button
      {...props}
      type={buttonType}
      className={buttonClass}
    >
      {children}
    </button>
  )
})

Button.propTypes = propTypes

Button.defaultProps = defaultProps
