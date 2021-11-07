import React, { useState } from "react";
import './task-item.styles.scss';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../../redux/tasksSlice';

const TaskItem = ({id, title, completed}) => {

  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({id: id, completed: !completed})
    );
  }

  const handleDeleteClick = () => {
    dispatch(deleteTodo({id: id}))
  }
  
  return (
    <div className='wrapper'>
      <div className='each-item' style={{  background: completed ? `#D980FA` : `transparent`}}>
        {title}
        <div>
          <label class='custom-checkbox'>
            <input
             type='checkbox'
             checked={completed}
             onChange={handleCompleteClick}></input>
            <span class='checkmark'></span>
          </label>
        </div>
      </div>
      <div className='button-wrapper'>
        <button className='edit-button'><i class="fas fa-pen"></i></button>
        <button onClick={handleDeleteClick} className='del-button'><i class="far fa-trash-alt"></i></button>
      </div>
    </div>
  )
}

export default TaskItem;