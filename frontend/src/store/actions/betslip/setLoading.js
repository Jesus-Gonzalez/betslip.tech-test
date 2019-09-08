import { ActionTypes } from 'store/actionTypes/betslip'

export const setLoading = isLoading => ({
  type: ActionTypes.setLoading,
  isLoading
})
