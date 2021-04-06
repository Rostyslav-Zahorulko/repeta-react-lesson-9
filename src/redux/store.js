// Vanilla Redux

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import counterReducer from './counter/counter-reducer';
// import todosReducer from './todos/todos-reducer';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// ___________________________________________________________________________________________

// Redux Toolkit (без redux-persistor)

// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import counterReducer from './counter/counter-reducer';
// import todosReducer from './todos/todos-reducer';

// const middleware = getDefaultMiddleware =>
//   getDefaultMiddleware().concat(logger);

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     todos: todosReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;

// ___________________________________________________________________________________________

// Redux Toolkit (с redux-persistor)

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

const todosPersistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};

const persistedTodosReducer = persistReducer(todosPersistConfig, todosReducer);

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: persistedTodosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
