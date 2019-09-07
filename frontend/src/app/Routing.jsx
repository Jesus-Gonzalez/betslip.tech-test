import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import * as Pages from 'pages'

export const Routing = () => (
  <BrowserRouter>
    <Route path='/' render={() => <Redirect to='/betslip' />} />
    <Route path='/error' component={Pages.Error} />
    <Route path='/betslip'>
      <Route
        component={Pages.Betslip}
      />
      <Route
        path='/betslip/success'
        component={Pages.BetslipSuccess}
      />
      <Route
        path='/betslip/error'
        component={Pages.BetslipError}
      />
    </Route>
  </BrowserRouter>
)
