import React, { useState } from 'react';
import './add-tasks-form.styles.scss'

const AddTask = () => {
  const [value, setValue] = useState('');

  return (
    <form className='form'>
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