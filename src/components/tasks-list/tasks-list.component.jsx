import React from 'react';
import TaskItem from '../task-item/task-item.component';

const TasksList = () => {
  const tasks = [
    {id: 1, title: 'task1dvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv', completed: true },
    {id: 2, title: 'task2', completed: false},
    {id: 3, title: 'task3', completed: true},
    {id: 4, title: 'task4', completed: false},
    {id: 5, title: 'task5', completed: false}
  ];

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