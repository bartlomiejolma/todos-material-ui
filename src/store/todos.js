import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
    setTodosInStore(state, action) {
      const { todos } = action.payload;
      return todos;
    },
  },
});

export const { addTodo, setTodosInStore } = todoSlice.actions;

export default todoSlice.reducer;
