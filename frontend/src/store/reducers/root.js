import { reducer as form } from 'redux-form'
import { combineReducers } from 'redux'

import { Reducer as Betslip } from './betslip'

export const reducers = combineReducers({
  Betslip,
  form
})
