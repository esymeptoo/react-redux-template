// import { routerMiddleware } from 'react-router-redux'

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootStore from '../reducers'

export function configureStore() {
  const store = createStore(
    rootStore,
    compose(
      applyMiddleware(thunk),
    ),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
