import { ActionTypesEntries } from 'store/actions/betslip'

import * as reducers from './lib'

const initialState = {
  bets: []
}

export const Reducer = (state = initialState, { type, ...payload }) => {
  const actionType = ActionTypesEntries[type]
  const reducer = actionType ? reducers[actionType] : reducers[type]

  return reducer ? reducer(payload) : state
}
