import React from 'react'
import PropTypes from 'prop-types'

import { Bet } from 'pages/betslip/components'

const propTypes = {
  bets: PropTypes.arrayOf(PropTypes.object).isRequired
}

export const BetList = React.memo(({ bets }) => (
  bets.map((bet, index) => (
    <Bet
      key={bet.betId}
      index={index}
      bet={bet}
    />
  ))
))

BetList.propTypes = propTypes
