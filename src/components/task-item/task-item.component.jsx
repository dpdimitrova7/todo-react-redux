import React from "react";
import './task-item.styles.scss';

const TaskItem = ({id, title, completed}) => {
  return (
    <div className='wrapper'>
      <div className='each-item' style={{  background: completed ? `#D980FA` : `transparent`}}>
        {title}
        <div>
          <label class='custom-checkbox'>
            <input type='checkbox' checked={completed}></input>
            <span class='checkmark'></span>
          </label>
        </div>
      </div>
      <div className='button-wrapper'>
        <button className='edit-button'><i class="fas fa-pen"></i></button>
        <button className='del-button'><i class="far fa-trash-alt"></i></button>
      </div>
    </div>
  )
}

export default TaskItem;