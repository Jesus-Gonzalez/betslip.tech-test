import { ActionTypesEntries } from 'store/actionTypes/betslip'

import { availableFilters } from 'pages/betslip/data'

import * as reducers from './lib'

const initialState = {
  bets: [],
  error: null,
  isLoading: false,
  selectedFilter: availableFilters.find(filter => filter.default)
}

export const Reducer = (state = initialState, { type, ...payload }) => {
  const actionType = ActionTypesEntries[type]
  const reducer = actionType ? reducers[actionType] : reducers[type]

  return reducer ? reducer(state, payload) : state
}
