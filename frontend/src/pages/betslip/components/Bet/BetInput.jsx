import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { NumericInput } from 'components'

import styles from './BetInput.module.scss'

const propTypes = {
  bet: PropTypes.object.isRequired,
  className: PropTypes.string,
  index: PropTypes.number.isRequired
}

const defaultProps = {
  className: ''
}

export const BetInput = ({ bet, className, index }) => {
  const wrapperClass = React.useMemo(
    () => classnames(className, styles.wrapper),
    [className]
  )

  const name = React.useMemo(() => `bet[${index}]`, [index])

  return (
    <div className={wrapperClass}>
      <NumericInput
        className={styles.input}
        id={name}
        name={name}
        placeholder='Stake'
      />
    </div>
  )
}

BetInput.propTypes = propTypes

BetInput.defaultProps = defaultProps
