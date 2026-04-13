import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState().todos));
});

export default store;