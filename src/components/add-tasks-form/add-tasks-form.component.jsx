import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';
import './add-tasks-form.styles.scss'

const AddTask = () => {
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      title: value,
    }))
  }

  return (
    <form onSubmit={onSubmit} className='form'>
      <label className='label'>
        <input 
          type='text'
          className='input'
          value={value}
          onChange={(e) => setValue(e.target.value)}>
        </input>
      </label>
      <button type='submit' className='submit-button'>
        ADD
      </button>
    </form>
  );
}

export default AddTask;