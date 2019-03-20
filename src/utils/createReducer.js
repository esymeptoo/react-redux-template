export default function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    const handler = handlers[action.type]
    if (!handler) return state

    state = handler(state, action)
    return state
  }
}
