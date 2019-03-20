import Types from '../actions/actionTypes'

export function add(payload) {
  return {
    payload,
    type: Types.Todo.add,
  }
}
