import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, likeTodo } from "../actions/actions";
import { MdRestoreFromTrash } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleLike = (id) => {
    dispatch(likeTodo(id));
  };

  return (
    <div className="todo_wrap">
      {todos.map((item, index) => {
        return (
          <div className={`todo ${item.like ? "liked" : ""}`} key={item.id}>
            <button onClick={() => handleLike(item.id)}>
              {item.like ? (
                <AiFillHeart className="icon red_icon" />
              ) : (
                <AiOutlineHeart className="icon" />
              )}
            </button>
            <p>{item.text}</p>
            <button onClick={() => handleDelete(index)}>
              <MdRestoreFromTrash className="icon red_icon" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
