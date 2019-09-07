import React from 'react'
import { Provider } from 'react-redux'

import { store } from 'store'

export const AppContainer = () => (
  <Provider store={store} />
)
