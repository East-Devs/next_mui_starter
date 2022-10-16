import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: true,
  deleteId: null,
  updateId: null,
  editableTodo: null,
  edit: false,
  updateStatus: '',
  filter: { status: 'New', type: '' },
  todos: [],
  countall: {
    todos: [],
    alltodos: [],
    activeTodos: [],
  },
  leadTableContent: {
    count: 0,
    page: 0,
    rowsPerPage: 10,
  },
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleTheme: (state, _action) => {
      state.theme = !state.theme;
    },
    deleteId: (state, action) => {
      state.deleteId = action.payload;
    },
    deletedId: (state, _action) => {
      state.deleteId = null;
    },
    updateId: (state, action) => {
      state.updateId = action.payload.id;
      state.updateStatus = action.payload.status;
    },
    updatedId: (state, _action) => {
      state.updateId = null;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setCountall: (state, action) => {
      state.countall = action.payload;
    },
    setLeadTableContent: (state, action) => {
      state.leadTableContent = {
        ...state.leadTableContent,
        ...action.payload,
      };
    },
    editTodo: (state, action) => {
      state.edit = action.payload.edit;
      if (action.payload.edit) {
        state.editableTodo = action.payload.editableTodo;
      }
    },
  },
});

export const {
  toggleTheme,
  deletedId,
  deleteId,
  updateId,
  updatedId,
  setFilter,
  setCountall,
  setTodos,
  setLeadTableContent,
  editTodo,
} = counterSlice.actions;

export default counterSlice.reducer;
