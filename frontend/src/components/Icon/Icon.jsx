import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.scss'

const propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired
}

const defaultProps = {
  className: ''
}

export const Icon = React.memo(({
  className,
  icon,
  ...props
}) => {
  const imgClass = React.useMemo(
    () => classnames(className, styles.icon, styles[icon], 'icon'),
    [className, icon]
  )

  return (
    <div
      {...props}
      className={imgClass}
    />
  )
})

Icon.propTypes = propTypes

Icon.defaultProps = defaultProps
