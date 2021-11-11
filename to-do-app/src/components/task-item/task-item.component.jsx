import React, { useState, useEffect } from "react";
import "./task-item.styles.scss";
import { useDispatch } from "react-redux";
import { updateTasksAsync } from "../../redux/tasksSlice";
import { toggleTasksAsync, deleteTasksAsync } from "../../redux/tasksSlice";

const TaskItem = ({ id, title, completed }) => {
  const [editable, setEditable] = useState(false);
  const [editTask, setEditTask] = useState(title);

  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleTasksAsync({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTasksAsync({ id: id }));
  };

  const handleEditable = () => {
    setEditable(!editable);
  };

  const handleEditTask = (e) => {
    setEditTask(e.target.value);
  };

  const handleUpdate = (e) => {
    dispatch(
      updateTasksAsync({
        id: id,
        title: editTask,
      })
    );
    e.preventDefault();
    setEditable(!editable);
  };

  return (
    <>
      {editable ? (
        <div
          className="edit-item"
          data-test="task-item"
          style={{ background: completed ? `#D980FA` : `transparent` }}
        >
          <form onSubmit={handleUpdate} className="edit-form">
            <input
              id={id}
              type="text"
              value={editTask}
              className="edit-input"
              onChange={handleEditTask}
            ></input>
            <button type="submit" className="edit-save">
              SAVE
            </button>
          </form>
        </div>
      ) : (
        <div className="wrapper">
          <div
            className="each-item"
            style={{ background: completed ? `#D980FA` : `transparent` }}
          >
            {title}
            <div>
              <label class="custom-checkbox">
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={handleCompleteClick}
                ></input>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="button-wrapper">
            <button onClick={handleEditable} className="edit-button">
              <i class="fas fa-pen"></i>
            </button>
            <button onClick={handleDeleteClick} className="del-button">
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskItem;
