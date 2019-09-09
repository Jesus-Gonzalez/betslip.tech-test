import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components'

import { errorMessages } from 'pages/betslip.error/data'

const propTypes = {
  error: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
}

export const ErrorBox = React.memo(({ error, goBack }) => (
  <main>
    <h2>An error occured on the Betslip</h2>
    <p>{errorMessages[error.type]}</p>
    <Button onClick={goBack}>Go Back</Button>
  </main>
))

ErrorBox.propTypes = propTypes
