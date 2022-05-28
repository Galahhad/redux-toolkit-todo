import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("add_todo");
export const deleteTodo = createAction("down_todo");
export const likeTodo = createAction("like_todo");