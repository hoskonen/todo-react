import React, {Component} from 'react';

const Item = ({todoName, changeHandler, clearHandler}) => {
  return (
    <input onClick={clearHandler} onChange={changeHandler} value={todoName}></input>
  )
}

const Submit = ({name, newTodo}) => {
  return (
    <button type="submit">
      {/* disabled={ !newTodo }> */}
      {name}
    </button>
  )
}

const ToDo = ({todo}) => {
  return (
    <li>{todo.content}</li>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: '',
      newTodo: 'Watcha goin to do?'
    }
  }

  addToDo = (event) => {
    event.preventDefault()

    const toDoObj = {
      content: this.state.newTodo,
      id: this.state.todos.length + 1
    }

    const todos = this
      .state
      .todos
      .concat(toDoObj)

    this.setState({todos: todos, newTodo: ''})
  }

  changeHandler = (event) => {
    this.setState({newTodo: event.target.value})
  }

  clearHandler = () => {
    this.setState({newTodo: ''})
  }

  render() {
    return (
      <div>
        <div>My ToDo</div>
        <form onSubmit={this.addToDo}>
          <Item
            changeHandler={this.changeHandler}
            todoName={this.state.newTodo}
            clearHandler={this.clearHandler}/>
          <Submit name="Add"/>
        </form>
        <div>
          <ul>
            {this
              .state
              .todos
              .map(todo => <ToDo key={todo.id} todo={todo}/>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
