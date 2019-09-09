import React from 'react'
import { Provider } from 'react-redux'

import 'styles/base/index.scss'

import { store } from 'store'

import { ErrorHandler } from 'containers'

import { Routing } from 'app'

export const App = () => (
  <ErrorHandler>
    <Provider store={store}>
      <Routing />
    </Provider>
  </ErrorHandler>
)
