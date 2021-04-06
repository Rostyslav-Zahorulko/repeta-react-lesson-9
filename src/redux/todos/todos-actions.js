// Vanilla Redux

// import { nanoid } from 'nanoid';
// import { ADD, DELETE, UPDATE, FILTER } from './todos-types';

// export const addTodo = text => ({
//   type: ADD,
//   payload: {
//     id: nanoid(),
//     text,
//     completed: false,
//   },
// });

// export const deleteTodo = id => ({
//   type: DELETE,
//   payload: id,
// });

// export const updateTodo = id => ({
//   type: UPDATE,
//   payload: id,
// });

// export const filterTodos = value => ({
//   type: FILTER,
//   payload: value,
// });

// ___________________________________________________________________________________________

// Redux Toolkit

import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTodo = createAction('todos/add', text => ({
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
}));
export const deleteTodo = createAction('todos/delete');
export const updateTodo = createAction('todos/update');
export const filterTodos = createAction('todos/filter');
