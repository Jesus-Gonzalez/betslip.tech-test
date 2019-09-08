import { applyMiddleware, createStore, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { isProductionEnvironment } from 'utils'

import { reducers } from './reducers'

const composeEnhancers = !isProductionEnvironment ? composeWithDevTools : compose

const middlewareCollection = [
  reduxThunk
].filter(m => m)

const middleware = applyMiddleware(...middlewareCollection)

export const store = createStore(reducers, {}, composeEnhancers(middleware))
