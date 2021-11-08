import { createSlice } from '@reduxjs/toolkit';

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
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          };
        }
        return todo;
      });
    }, 
    toggleComplete: (state, action) => {
      const index = state.findIndex((task) => state.task.id === state.action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id)
    }
  },
});

export const { addTask, toggleComplete, deleteTodo, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
