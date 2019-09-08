import { ActionTypesEntries } from 'store/actionTypes/betslip'

import * as reducers from './lib'

const initialState = {
  bets: [],
  error: null,
  isLoading: false,
  selectedFilter: null
}

export const Reducer = (state = initialState, { type, ...payload }) => {
  const actionType = ActionTypesEntries[type]
  const reducer = actionType ? reducers[actionType] : reducers[type]

  return reducer ? reducer(state, payload) : state
}
