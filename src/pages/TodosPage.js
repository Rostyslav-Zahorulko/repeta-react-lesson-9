// https://youtu.be/5G-dG__cS0o?t=5065 - Переписывание коллекции заметок на Redux (вебинар № 9)

import { Component } from 'react';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import TodoFilter from '../components/TodoFilter';
// import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosPage extends Component {
  state = {
    showModal: false,
  };

  //   componentDidMount() {
  //     console.log('App componentDidMount');

  //     const todos = localStorage.getItem('todos');
  //     // console.log('todos: ', todos);

  //     const parsedTodos = JSON.parse(todos);
  //     // console.log('parsedTodos :', parsedTodos);

  //     if (parsedTodos) {
  //       this.setState({ todos: parsedTodos });
  //     }
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log('App componentDidUpdate');
  //     // console.log(prevState.todos);
  //     // console.log(this.state.todos);

  //     const prevTodos = prevState.todos;
  //     const nextTodos = this.state.todos;

  //     if (nextTodos !== prevTodos) {
  //       // console.log('Изменились todos');

  //       localStorage.setItem('todos', JSON.stringify(nextTodos));
  //     }

  //     if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
  //       this.toggleModal();
  //     }
  //     // Это не сработает, если удалить все todos, а потом добавить 1 новую
  //     // (если в local storage лежит пустой массив todos)
  //   }

  updateTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    // const totalTodosCount = todos.length;
    // const completedTodosCount = this.calculateCompletedTodos();

    return (
      <>
        <div style={barStyles}>
          <TodoFilter />
          {/* <Stats total={totalTodosCount} completed={completedTodosCount} /> */}
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="32" height="32" fill="#fff" />
          </IconButton>
        </div>

        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor />
          </Modal>
        )}
      </>
    );
  }
}

export default TodosPage;
