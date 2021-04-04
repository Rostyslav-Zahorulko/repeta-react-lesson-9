import { nanoid } from 'nanoid';
import { ADD, DELETE, UPDATE, FILTER } from './todos-types';

export const addTodo = text => ({
  type: ADD,
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
});

export const deleteTodo = id => ({
  type: DELETE,
  payload: id,
});

export const filterTodos = value => ({
  type: FILTER,
  payload: value,
});
