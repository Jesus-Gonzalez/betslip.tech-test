import { fetchBetsByFilter } from './fetchBetsByFilter'

const endpoints = ['decimalOddsMoreThanTwo', 'decimalOddsLessThanTwo']

// Promise.all on fetch demo
export const fetchAllBets = () => (
  Promise.all(endpoints
    .map(endpoint =>
      fetchBetsByFilter(endpoint)
    )
  ).then(responses => (
    responses.reduce((acc, bets) => acc.concat(bets), [])
  ))
)
