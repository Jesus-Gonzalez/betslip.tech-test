import React from 'react'
import { Provider } from 'react-redux'

import { store } from 'store'

export const App = () => (
  <Provider store={store}>
    <h1>Hola mundo</h1>
  </Provider>
)
