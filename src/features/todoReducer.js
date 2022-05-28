import { createReducer } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, likeTodo } from "../actions/actions";

const initialState = {
  todos: [],
};

export const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.todos.unshift(action.payload);
  });
  builder.addCase(deleteTodo, (state, action) => {
    state.todos.splice(action.payload, 1);
  });
  builder.addCase(likeTodo, (state, action) => {
    state.todos.map((item) => {
      if (item.id === action.payload) {
        return (item.like = !item.like);
      }
      return item;
    });
  });
});
