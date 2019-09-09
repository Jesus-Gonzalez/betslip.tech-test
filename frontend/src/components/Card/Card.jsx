import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.scss'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  corner: PropTypes.bool
}

const defaultProps = {
  className: '',
  corner: false
}

export const Card = ({
  children,
  className,
  corner,
  ...props
}) => {
  const cardClass = React.useMemo(
    () => classnames(className, styles.card, corner && styles.corner),
    [className, corner]
  )

  return (
    <div
      {...props}
      className={cardClass}
    >
      {children}
    </div>
  )
}

Card.propTypes = propTypes

Card.defaultProps = defaultProps
