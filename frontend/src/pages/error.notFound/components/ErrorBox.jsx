import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components'

const propTypes = {
  goBack: PropTypes.func.isRequired
}

export const ErrorBox = React.memo(({ goBack }) => (
  <main>
    <h2>Not found</h2>
    <p>The resource you're looking for was not found.</p>
    <p>It has been removed or its location has changed.</p>
    <Button onClick={goBack}>Go Back</Button>
  </main>
))

ErrorBox.propTypes = propTypes
