import axios from 'axios'

import { API } from 'app/configuration/api'

export const fetchBetsByFilter = filter => (
  axios(API.endpoints.betslip[filter], {
    method: 'get'
  }).then(response => response.data)
)
