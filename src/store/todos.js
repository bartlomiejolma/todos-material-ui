import { createSlice } from "@reduxjs/toolkit";
import { getTodosFromLocalStorage } from "../useLocalStorageTodos";

const findAndModifyTodo = (nextTodo, todo) => {
  if (nextTodo.id === todo.id) {
    return todo;
  }
  return nextTodo;
};
const todoSlice = createSlice({
  name: "todos",
  initialState: getTodosFromLocalStorage() || {},
  reducers: {
    addTodo(state, action) {
      const { todo, category = "backlog" } = action.payload;
      todo.id = Math.floor(Math.random() * 1000);
      const group = [...state[category]] || [];
      group.push(todo);
      return { ...state, [category]: group };
    },
    changeTodo: (state, action) => {
      const { todo } = action.payload;
      return Object.entries(state).reduce(
        (acc, [group, groupTodos]) => ({
          ...acc,
          [group]: groupTodos.map((nextTodo) =>
            findAndModifyTodo(nextTodo, todo)
          ),
        }),
        {}
      );
    },
    deleteTodo: (state, action) => {
      const { todo } = action.payload;
      return Object.entries(state).reduce(
        (acc, [group, groupTodos]) => ({
          ...acc,
          [group]: groupTodos.filter((nextTodo) => nextTodo.id !== todo.id),
        }),
        {}
      );
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
    changeIndexOfTodo: (state, action) => {
      const { id, index } = action.payload;
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, index };
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
  changeIndexOfTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
