import React from 'react'

import { Card } from 'components'

import { BetDetail } from './BetDetail'
import { BetInput } from './BetInput'

// import styles from './Bet.module.scss'

export const Bet = props => (
  <Card>
    <BetDetail {...props} />
    <BetInput {...props} />
  </Card>
)
