import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.scss'

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string
}

const defaultProps = {
  alt: '',
  className: ''
}

export const Image = ({
  alt,
  className,
  ...props
}) => {
  const imageClass = React.useMemo(
    () => classnames(className, styles.image),
    [className]
  )

  return (
    <img
      {...props}
      alt={alt}
      className={imageClass}
    />
  )
}

Image.propTypes = propTypes
Image.defaultProps = defaultProps
