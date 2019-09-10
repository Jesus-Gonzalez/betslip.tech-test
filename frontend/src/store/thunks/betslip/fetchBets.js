import { compose } from 'redux'

import * as Actions from 'store/actions/betslip'

import { fetchAllBets, fetchBetsByFilter } from 'api/betslip'

export const fetchBets = ({ value: filter = 'all' }) => async dispatch => {
  const Dispatcher = ['setBets', 'setError', 'setLoading']
    .reduce((obj, action) => ({
      ...obj,
      [action]: compose(dispatch, Actions[action])
    }), {})

  const fetchBetsFn = filter === 'all' ? fetchAllBets : fetchBetsByFilter

  const betsAsync = fetchBetsFn(filter)

  const delayAsync = new Promise(resolve => setTimeout(resolve, 2345))

  Dispatcher.setLoading(true)

  await delayAsync

  betsAsync
    .then(bets => {
      Dispatcher.setBets(bets)
      // uncomment to test API error handling page
      // throw new Error('fetchBets')
    })
    .catch(exception => {
      Dispatcher.setError({
        type: 'fetch',
        exception: JSON.stringify(exception),
        method: 'fetchBets.betsAsync'
      })
    })
    .finally(() => {
      Dispatcher.setLoading(false)
    })
}
