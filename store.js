import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer';

//Inits server and client stores
export function initializeStore (initialState = {}) {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
}
