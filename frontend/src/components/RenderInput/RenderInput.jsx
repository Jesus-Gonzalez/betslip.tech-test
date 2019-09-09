import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { Input } from './Input'

export const RenderInput = ({ className, component, ...props }) => (
  <Field
    component={component}
    {...props}
  />
)

RenderInput.propTypes = {
  className: PropTypes.string,
  component: PropTypes.func
}

RenderInput.defaultProps = {
  className: '',
  component: Input
}
