import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { LoadingIcon } from './LoadingIcon'

import styles from './Loading.module.scss'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string
}

const defaultProps = {
  children: null,
  className: ''
}

export const Loading = React.memo(({
  children,
  className,
  ...props
}) => {
  const wrapperClass = React.useMemo(
    () => classnames(className, styles.wrapper),
    [className]
  )

  return (
    <div className={wrapperClass}>
      <LoadingIcon />
      {children}
    </div>
  )
})

Loading.propTypes = propTypes

Loading.defaultProps = defaultProps
