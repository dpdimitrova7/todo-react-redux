import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
import "./add-tasks-form.styles.scss";

const AddTask = () => {
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  const handleSetValue = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        title: value,
      })
    );
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <label className="label">
        <input
          type="text"
          className="input"
          value={value}
          onChange={handleSetValue}
        ></input>
      </label>
      <button title="buttonInput" type="submit" className="submit-button">
        ADD
      </button>
    </form>
  );
};

export default AddTask;
