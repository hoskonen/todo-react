import React, {Component} from 'react';

const Input = ({todoName, changeHandler, clearHandler, placeHolder}) => {
  return (
    <input placeholder={placeHolder} onClick={clearHandler} onChange={changeHandler} value={todoName}></input>
  )
}

const ToDo = ({todo, deleteItem}) => {
  return (
    <li onClick={deleteItem}>{todo.content}</li>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: '',
      newTodo: '',
      ph: 'Watcha goin to do?'
    }
  }

  addToDo = (event) => {
    event.preventDefault()
    const {newTodo} = this.state.newTodo
    const toDoObj = {
      content: this.state.newTodo,
      id: this.state.todos.length + 1,
      priority: 1
    }

    const todos = this
      .state
      .todos
      .concat(toDoObj)

      if (toDoObj.content.length != 0) {
        this.setState({todos: todos, newTodo: ''})
      }
      else {
        false
      }

    }

  changeHandler = (event) => {
    this.setState({newTodo: event.target.value})
  }

  clearHandler = () => {
    this.setState({newTodo: ''})
  }

  removeItem = ({todo, todos}) => {

  }

  renderToDos = (todo) => {
    return (
      this
        .state
        .todos
        .map(todo => <ToDo key={todo.id} todo={todo} />)
    )
  }

  render() {

    return (
      <div>
        <h1>_helping demented people since '79</h1>
        <div className="container">
          <form className="form" onSubmit={this.addToDo}>
            <Input
              changeHandler={this.changeHandler}
              todoName={this.state.newTodo}
              clearHandler={this.clearHandler}
              placeHolder={this.state.ph} />
          </form>

          <div className="items">
            <ul className="todos">
              {this.renderToDos()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
