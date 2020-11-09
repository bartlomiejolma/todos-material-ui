import { createSlice } from "@reduxjs/toolkit";
import { getTodosFromLocalStorage } from "../useLocalStorageTodos";

const todoSlice = createSlice({
  name: "todos",
  initialState: getTodosFromLocalStorage(),
  reducers: {
    addTodo(state, action) {
      const { todo } = action.payload;
      todo.id = Math.floor(Math.random() * 1000);
      state.push(todo);
    },
    changeTodo: (state, action) => {
      const { todo } = action.payload;
      return state.map((nextTodo) => {
        if (nextTodo.id === todo.id) {
          return todo;
        }
        return nextTodo;
      });
    },
    deleteTodo: (state, action) => {
      const { todo } = action.payload;
      return state.filter((nextTodo) => nextTodo.id !== todo.id);
    },
    changeGroupOfTodo: (state, action) => {
      const { id, group } = action.payload;
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, group };
        }
        return todo;
      });
    },
    setTodosInStore(state, action) {
      const { todos } = action.payload;
      return todos;
    },
  },
});

export const {
  addTodo,
  changeTodo,
  deleteTodo,
  setTodosInStore,
  changeGroupOfTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
