import alt from './alt';
import TodoActions from '../actions/actions.js'

class TodoStore {
  constructor() {
    this.bindListeners({
      updateTodo: TodoActions.updateTodo
    });

    this.state = {
      todos: []
    };
  }

  updateTodo(todo) {
    this.setState({ todos: this.state.todos.concat(todo) });
  }
  registerUser() {
  
  }
}

export default alt.createStore(TodoStore, 'TodoStore');
