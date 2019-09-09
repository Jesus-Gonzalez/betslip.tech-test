import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import * as Pages from 'pages'

export const Routing = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
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
      <Route
        path='/404'
        component={Pages.NotFound}
      />
      <Route
        render={() => <Redirect to='/404' />}
      />
    </Switch>
  </BrowserRouter>
)
