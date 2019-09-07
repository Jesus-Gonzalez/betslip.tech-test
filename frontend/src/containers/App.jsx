import React from 'react'
import { Provider } from 'react-redux'

import { store } from 'store'

import { Routing } from 'app'

export const App = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
)
