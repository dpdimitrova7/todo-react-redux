import React, { useEffect } from "react";
import TaskItem from "../task-item/task-item.component";
import { useSelector, useDispatch } from "react-redux";
import { getTasksAsync } from "../../redux/tasksSlice";

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => [...state.tasks]);

  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch]);

  return (
    <div className="wrapper-list" data-test="wrapper-list">
      {tasks
        .sort((task) => task.completed - !task.completed)
        .map((task) => (
          <TaskItem
            id={task.id} data-test='id'
            title={task.title} data-test='title'
            completed={task.completed} data-test='completed'
          />
        ))}
    </div>
  );
};

export default TasksList;
