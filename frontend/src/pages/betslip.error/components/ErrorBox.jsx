import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components'

import { errorMessages } from 'pages/betslip.error/data'

import styles from './ErrorBox.module.scss'

const propTypes = {
  error: PropTypes.object,
  goBack: PropTypes.func.isRequired
}

const defaultProps = {
  error: {}
}

export const ErrorBox = React.memo(({ error, goBack }) => (
  <main>
    <h2>An error occured on the Betslip</h2>
    <p>{errorMessages[error.type]}</p>
    <Button
      className={styles.button}
      onClick={goBack}
    >
      Go Back
    </Button>
  </main>
))

ErrorBox.propTypes = propTypes

ErrorBox.defaultProps = defaultProps
