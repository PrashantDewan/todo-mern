import { toggleTodo, updateTodo } from "../redux/actions/api";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);

  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing(prevState => !prevState);

    dispatch(updateTodo(todo._id, text))
  }

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "#bdc3c7" : "#34495e",
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>
      <form style={{ display: editing ? "inline" : "none" }}
      onSubmit={onFormSubmit}>
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) =>{
            setText(e.target.value)
          }}
        />
      </form>

      <span
        className="icon"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <i className="fa-solid fa-pen"></i>
      </span>

      <span className="icon">
        <i className="fa-solid fa-trash" />
      </span>
    </li>
  );
};
