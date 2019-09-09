import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import classnames from 'classnames'

import { Input } from './Input'

import styles from './styles.module.scss'

export const RenderInput = ({ className, component, ...props }) => {
  const inputClass = React.memo(
    () => classnames(className, styles.input),
    [className]
  )

  return (
    <Field
      className={inputClass}
      component={component}
      {...props}
    />
  )
}

RenderInput.propTypes = {
  className: PropTypes.string,
  component: PropTypes.func
}

RenderInput.defaultProps = {
  className: '',
  component: Input
}
