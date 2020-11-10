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
    moveTodo: (state, action) => {
      const { oldGroup, oldIndex, newGroup, newIndex } = action.payload;
      const [removed] = state[oldGroup].splice(oldIndex, 1)
      if (state[newGroup]) {
        state[newGroup].splice(newIndex, 0, removed)
      } else {
        state[newGroup] = [removed]
      }
    },
  },
});

export const { addTodo, changeTodo, deleteTodo, moveTodo } = todoSlice.actions;

export default todoSlice.reducer;
