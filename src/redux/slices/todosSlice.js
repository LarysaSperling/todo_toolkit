import { createSlice } from '@reduxjs/toolkit';

const loadTodos = () => {
  try {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch {
    return [];
  }
};

const initialState = loadTodos();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCompleted: (state) => {
      return state.filter((todo) => !todo.completed);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((item) => item.id === id);

      if (todo && text.trim()) {
        todo.text = text.trim();
      }
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted,
  editTodo,
} = todosSlice.actions;

export default todosSlice.reducer;