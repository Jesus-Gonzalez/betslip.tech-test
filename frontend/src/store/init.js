import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxDevtools from 'redux-devtools'

import { reducers } from './reducers'

const middlewareCollection = [
  process.env.NODE_ENV !== 'production' && reduxDevtools,
  reduxThunk
].filter(m => m)

const middleware = applyMiddleware(...middlewareCollection)

export const store = createStore(reducers, {}, middleware)
