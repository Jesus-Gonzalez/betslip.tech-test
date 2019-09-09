import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}

export class ErrorHandler extends React.Component {
  componentDidCatch () {
    window.location = '/error'
  }

  render () {
    return this.props.children
  }
}

ErrorHandler.propTypes = propTypes
