import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
