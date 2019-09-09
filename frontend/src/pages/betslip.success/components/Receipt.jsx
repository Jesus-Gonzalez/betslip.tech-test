import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components'

const propTypes = {
  goBack: PropTypes.func.isRequired,
  totalStake: PropTypes.number.isRequired
}

export const Receipt = React.memo(({ goBack, totalStake }) => (
  <main>
    <h2>Your bet has been placed</h2>
    <label>Total Stake: <output>{totalStake}</output></label>
    <Button onClick={goBack}>Go to betslip</Button>
  </main>
))

Receipt.propTypes = propTypes
