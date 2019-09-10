import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './LoadingIcon.module.scss'

const propTypes = {
  className: PropTypes.string
}

const defaultProps = {
  className: ''
}

export const LoadingIcon = React.memo(({
  className,
  ...props
}) => {
  const imgClass = React.useMemo(
    () => classnames(className, styles.loading),
    [className]
  )

  return (
    <div className={imgClass}><div /><div /></div>
  )
})

LoadingIcon.propTypes = propTypes

LoadingIcon.defaultProps = defaultProps
