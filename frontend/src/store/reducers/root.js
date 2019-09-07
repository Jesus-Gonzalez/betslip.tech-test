import { combineReducers } from 'redux'

import { Reducer as BetslipReducers } from './betslip'

export const reducers = combineReducers(
  BetslipReducers
)
