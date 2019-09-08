import { ActionTypes } from 'store/actionTypes/betslip'

export const setError = error => ({
  type: ActionTypes.setError,
  error
})
