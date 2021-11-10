import React, { useEffect } from 'react';
import TaskItem from '../task-item/task-item.component';
import { useSelector, useDispatch } from 'react-redux';
import { getTasksAsync } from '../../redux/tasksSlice';
const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => [...state.tasks]);
  
  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch]);

  return (
   <div className='wrapper-list'>
     {
       tasks
       .sort((task) => task.completed - !task.completed)
       .map((task) => (  
       <TaskItem id={task.id} title={task.title} completed={task.completed} />
       ))
     }
   </div>
  )
}

export default TasksList;