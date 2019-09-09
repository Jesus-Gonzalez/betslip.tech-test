import { ActionTypes } from 'store/actionTypes/betslip'

export const onSubmit = (...args) => ({
  type: ActionTypes.onSubmit,
  args
})
