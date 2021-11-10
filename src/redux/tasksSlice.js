import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTasksAsync = createAsyncThunk(
  'tasks/getTasksAsync',
  async () => {
    const response = await fetch(`http://localhost:7000/todos`);
    if(response.ok) {
      const tasks = await response.json();
      return { tasks }
    }
})

export const addTasksAsync = createAsyncThunk(
  'tasks/addTasksAsync',
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: payload.title})
  })

  if(response.ok){
    const task = await response.json();
    return { task }
  }
})

export const toggleTasksAsync = createAsyncThunk(
  'tasks/toggleTasksAsync',
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({completed: payload.completed})
  })

  if(response.ok){
    const task = await response.json();
    return { id: task.id, completed: task.completed }
  }
})

export const deleteTasksAsync = createAsyncThunk(
  'tasks/deleteTasksAsync',
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id: payload.id})
  })

  if(response.ok){
    const task = await response.json();
    return { id: task.id }
  }
})

export const updateTasksAsync = createAsyncThunk(
  'tasks/updateTasksAsync',
  console.log('hey'),
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: payload.title})
  })

  if(response.ok){
    const task = await response.json();
    return { id: task.id, title: task.title }
  }
})


const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: true }
  ],
  reducers: {
    addTask: (state, action) => {
      let newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      };
      state.push(newTask);
    },
    updateTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            title: action.payload.title,
          };
        }
        return task;
      });
    }, 
    toggleComplete: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id)
    }
  },
  extraReducers: {
    [getTasksAsync.fulfilled] : (state, action) => {
      return action.payload.tasks;
    }
  },
  [addTasksAsync.fulfilled] : (state, action) => {
    state.push(action.payload.task);
  },
  [toggleTasksAsync.fulfilled] : (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state[index].completed = action.payload.completed;
  },
  [deleteTasksAsync.fulfilled] : (state, action) => {
    return state.filter((task) => task.id !== action.payload.id)
  },
  [updateTasksAsync.fulfilled] : (state, action) => {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          title: action.payload.title,
        };
      }
      return todo;
    });
  }
});

export const { addTask, toggleComplete, deleteTodo, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
