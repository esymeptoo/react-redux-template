import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import { configureStore } from '../store'

import TodoList from '../components/Todo/Todo'

const store = configureStore()
const history = createHistory()

export default class Root extends React.Component {
  render() {
    return <Provider store={store}>
      <ConnectedRouter history={history}>
        <TodoList />
      </ConnectedRouter>
    </Provider>
  }
}
