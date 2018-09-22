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

const PrioBtn = ({name, clickHandler, btnStyle}) => {
  return (
    <button className={btnStyle} onClick={clickHandler}>{name}</button>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: '',
      newTodo: '',
      ph: 'Watcha goin to do?',
      prio: ''
    }
  }

  addToDo = (event) => {
    event.preventDefault()
    const {newTodo} = this.state.newTodo
    const toDoObj = {
      content: this.state.newTodo,
      id: this.state.todos.length + 1,
      priority: this.state.prio
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

  prioHandler = (priority) => {
    this.setState({
      prio: priority
    })
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
          <form className="form" onSubmit={this.addToDo}>
            <Input
              changeHandler={this.changeHandler}
              todoName={this.state.newTodo}
              clearHandler={this.clearHandler}
              placeHolder={this.state.ph}
            />
            <PrioBtn name="Low" btnStyle="low" clickHandler={() => this.prioHandler(1)} />
            <PrioBtn name="Med" btnStyle="med" clickHandler={() => this.prioHandler(2)} />
            <PrioBtn name="High" btnStyle="high" clickHandler={() => this.prioHandler(3)} />
          </form>
          <span>*Write note and hit priority level!</span>
          <div className="items">
            <ul>
              {this.renderToDos()}
            </ul>
          </div>
      </div>
    );
  }
}

export default App;
