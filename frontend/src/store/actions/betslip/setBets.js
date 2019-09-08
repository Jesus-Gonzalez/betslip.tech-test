import { ActionTypes } from 'store/actionTypes/betslip'

export const setBets = bets => ({
  type: ActionTypes.setBets,
  bets
})
