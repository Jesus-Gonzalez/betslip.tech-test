import { getActionTypesAsEntries } from 'store/utils'

const fetchBets = 'BETSLIP::FETCH_BETS'
const fetchBetsSuccess = 'BETSLIP::FETCH_BETS::SUCCESS'
const fetchBetsError = 'BETSLIP::FETCH_BETS::ERROR'
const onChangeStake = 'BETSLIP::ON_CHANGE_STAKE'
const onSubmit = 'BETSLIP::ON_SUBMIT'
const setBets = 'BETSLIP::SET_BETS'
const setError = 'BETSLIP::SET_ERROR'
const setLoading = 'BETSLIP::SET_LOADING'

export const ActionTypes = {
  fetchBets,
  fetchBetsSuccess,
  fetchBetsError,
  onChangeStake,
  onSubmit,
  setBets,
  setError,
  setLoading
}

export const ActionTypesEntries = getActionTypesAsEntries(ActionTypes)
