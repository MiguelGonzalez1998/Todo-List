import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (state, { payload }) => {
      state.push(payload);
    },
    del: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },
    toogleCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.txt = action.payload.editingText;
      }
    },
  },
});

export const { add, del, toogleCompleted, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
