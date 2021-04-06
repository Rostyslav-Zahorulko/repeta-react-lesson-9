import { connect } from 'react-redux';
import * as todosActions from '../../redux/todos/todos-actions';
import classNames from 'classnames';
import Todo from '../Todo';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onUpdateTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onDelete={() => onDeleteTodo(id)}
          onUpdate={() => onUpdateTodo(id)}
        />
      </li>
    ))}
  </ul>
);

const getFilteredTodos = (filter, allTodos) => {
  const lowercasedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(lowercasedFilter),
  );
};

// const mapStateToProps = ({ todos }) => {
//   const { filter, items } = todos;
//   const filteredTodos = getFilteredTodos(filter, items);

//   return {
//     todos: filteredTodos,
//   };
// };

const mapStateToProps = ({ todos: { filter, items } }) => ({
  todos: getFilteredTodos(filter, items),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosActions.deleteTodo(id)),
  onUpdateTodo: id => dispatch(todosActions.updateTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
