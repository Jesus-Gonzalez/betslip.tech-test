import merge from 'lodash/merge'

import { common } from './common'

const baseUrl = 'http://localhost:4000/'

const baseUrlEndpoint = ([endpoint]) => baseUrl.concat(endpoint)

export const API = merge(common, {
  decimalOddsMoreThanTwo: baseUrlEndpoint`decimalOddsMoreThanTwo`,
  decimalOddsLessThanTwo: baseUrlEndpoint`decimalOddsLessThanTwo`
})
