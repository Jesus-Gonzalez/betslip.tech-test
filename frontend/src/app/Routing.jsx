import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import * as Pages from 'pages'

export const Routing = () => (
  <BrowserRouter>
    <Route
      path='/'
      render={() => <Redirect to='/betslip' />}
    />
    <Route
      path='/error'
      component={Pages.Error}
    />
    <Route
      exact
      path='/betslip'
      component={Pages.Betslip}
    />
    <Route
      exact
      path='/betslip/success'
      component={Pages.BetslipSuccess}
    />
    <Route
      exact
      path='/betslip/error'
      component={Pages.BetslipError}
    />
  </BrowserRouter>
)
