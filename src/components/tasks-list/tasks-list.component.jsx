import React from 'react';
import TaskItem from '../task-item/task-item.component';
import { useSelector } from 'react-redux';
import store from "../../redux/store";

const TasksList = () => {
  const tasks = useSelector((state) => [...state.tasks]);
  
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