import Immutable from 'immutable'
import createReducer from '../utils/createReducer'
import Types from '../actions/actionTypes'

const initialState = Immutable.fromJS({
  todoList: [
    {
      id: Date.now(),
      desc: '写代码',
    },
  ],
})

export default createReducer(initialState, {
  [Types.Todo.add](state, { payload }) {
    return state.update('todoList', val => val.push(Immutable.Map(payload)))
  },
})
