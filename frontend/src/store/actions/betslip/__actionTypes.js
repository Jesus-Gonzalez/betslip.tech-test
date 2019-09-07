import { getActionTypesAsEntries } from 'store/utils'

const fetchBets = 'BETSLIP::FETCH_BETS'
const fetchBetsSuccess = 'BETSLIP::FETCH_BETS::SUCCESS'
const fetchBetsError = 'BETSLIP::FETCH_BETS::ERROR'
const onChangeStake = 'BETSLIP::ON_CHANGE_STAKE'
const onSubmit = 'BETSLIP::ON_SUBMIT'

export const ActionTypes = {
  fetchBets,
  fetchBetsSuccess,
  fetchBetsError,
  onChangeStake,
  onSubmit
}

export const ActionTypesEntries = getActionTypesAsEntries(ActionTypes)
