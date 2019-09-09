import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components'

import styles from './ErrorBox.module.scss'

const propTypes = {
  error: PropTypes.object,
  goBack: PropTypes.func.isRequired
}

const defaultProps = {
  error: {}
}

export const ErrorBox = React.memo(({ goBack }) => (
  <main>
    <h1>Internal Application Error</h1>
    <p>An error occured and the application has crashed.</p>
    <p>Try again, and if the problem is persistent, please, contact the system administrator.</p>
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
