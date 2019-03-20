import React from 'react'
import { connect } from 'react-redux'

import { add } from '../../actions/todo'

import './style.scss'

class Todo extends React.Component {
  handleAdd() {
    this.props.add({
      desc: '看书',
      id: Date.now(),
    })
  }

  render() {
    return <div className="todo-list">
      <p>TODO LIST</p>
      {
        this.props.todoList.map(todo => (
          <li key={todo.get('id')}>{ todo.get('desc') }</li>
        ))
      }
      <button onClick={() => this.handleAdd()}>添加</button>
    </div>
  }
}

const mapStateToProps = state => ({
  todoList: state.todo.get('todoList'),
})

const mapDispatchToProps = dispatch => ({
  add: payload => dispatch(add(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
