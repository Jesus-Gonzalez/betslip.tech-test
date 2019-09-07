import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxDevtools from 'redux-devtools'

import { reducers } from './reducers'

const middleware = applyMiddleware(
  process.env !== 'production' && reduxDevtools,
  reduxThunk
)

export const store = createStore(reducers, null, middleware)
