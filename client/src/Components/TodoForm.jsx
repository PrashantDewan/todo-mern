import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions/api";

const TodoForm = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(task));
    setTask("");
  };

  const onInputChange = (e) => {
    setTask(e.target.value);
    console.log(e.target.value)
  };

  return (
    <div>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          placeholder="Enter new task "
          className="input"
          onChange={onInputChange}
          value={task}
        />
      </form>
    </div>
  );
};

export default TodoForm;
