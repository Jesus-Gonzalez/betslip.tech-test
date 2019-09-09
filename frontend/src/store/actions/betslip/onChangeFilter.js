import { ActionTypes } from 'store/actionTypes/betslip'

export const onChangeFilter = filter => ({
  type: ActionTypes.onChangeFilter,
  filter
})
