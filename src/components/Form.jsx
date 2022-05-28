import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/actions";

const Form = () => {
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const truthIncludes = todos.some((item) => item.text === text);

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim().length !== 0) {
      dispatch(
        addTodo({
          id: Math.random(),
          text: text,
          like: false,
        })
      );
    }
    setText("");
  };

  return (
    <form onSubmit={handleAdd} className="form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст"
        className={truthIncludes ? "red_icon" : ""}
      />
      <span className="border-bottom"></span>
      <span className="border-top"></span>
      <span className="border-left"></span>
      <span className="border-right"></span>
      <button disabled={text.trim().length === 0 || truthIncludes}>Add</button>
    </form>
  );
};

export default Form;
