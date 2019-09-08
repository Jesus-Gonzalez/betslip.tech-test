import React from 'react'

import { NumericInput } from 'components'

export const BetInput = ({ bet, index }) => (
  <NumericInput
    name={`bet[${index}]`}
  />
)
