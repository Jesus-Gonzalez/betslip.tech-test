import { compose } from 'redux'

import * as Actions from 'store/actions/betslip'

import { fetchAllBets, fetchBetsByFilter } from 'api/betslip'

export const fetchBets = ({ value: filter = 'all' }) => dispatch => {
  const Dispatcher = ['setBets', 'setError', 'setLoading']
    .reduce((obj, action) => ({
      ...obj,
      [action]: compose(dispatch, Actions[action])
    }), {})

  const fetchBetsFn = filter === 'all' ? fetchAllBets : fetchBetsByFilter

  const betsAsync = fetchBetsFn(filter)

  Dispatcher.setLoading(true)

  betsAsync
    .then(bets => {
      Dispatcher.setBets(bets)
    })
    .catch(exception => {
      Dispatcher.setError({
        type: 'fetch',
        exception,
        method: 'fetchBets.betsAsync'
      })
    })
    .finally(() => {
      Dispatcher.setLoading(false)
    })
}