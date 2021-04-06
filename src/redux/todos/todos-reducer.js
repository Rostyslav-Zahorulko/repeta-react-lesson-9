// Vanilla Redux

// import { combineReducers } from 'redux';
// import { ADD, DELETE, UPDATE, FILTER } from './todos-types';

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];

//     case DELETE:
//       return state.filter(({ id }) => id !== payload);

//     case UPDATE:
//       return state.map(todo =>
//         todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
//       );

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// ___________________________________________________________________________________________

// Redux Toolkit

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as todosActions from './todos-actions';

const itemsReducer = createReducer([], {
  [todosActions.addTodo]: (state, { payload }) => [...state, payload],
  [todosActions.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [todosActions.updateTodo]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});

const filterReducer = createReducer('', {
  [todosActions.filterTodos]: (_, { payload }) => payload,
});

const todosReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todosReducer;
