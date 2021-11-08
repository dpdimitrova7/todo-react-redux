import React, { useState } from "react";
import './task-item.styles.scss';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../redux/tasksSlice';
import { toggleComplete, deleteTodo } from '../../redux/tasksSlice';

const TaskItem = ({id, title, completed}) => {
  const [editable, setEditable] = useState(false);
  const [editTask, setEditTask] = useState(title);


  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({id: id, completed: !completed})
    );
  }

  const handleDeleteClick = () => {
    dispatch(deleteTodo({id: id}))
  }

  const handleEditable = () => {
    setEditable(!editable);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    setEditable(!editable);
    dispatch(updateTask({
      id: id,
      title: editTask,
    }))
  }
  
  return (
    <>
     {editable ? (
        <div className='edit-item' style={{  background: completed ? `#D980FA` : `transparent`}}>
        <form onSubmit={handleUpdate} className='edit-form'>
          <input 
            type='text'
            className='edit-input'
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}>
          </input>
          <button type='submit' className='edit-save'>SAVE</button>
          </form>
          </div>
         ) : (
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
            <button onClick={handleEditable} className='edit-button'><i class="fas fa-pen"></i></button>
            <button onClick={handleDeleteClick} className='del-button'><i class="far fa-trash-alt"></i></button>
          </div>
        </div>
         )}
    </>
  )
}

export default TaskItem;