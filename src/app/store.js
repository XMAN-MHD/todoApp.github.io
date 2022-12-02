import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import todosReducer from '../features/todos/todosSlice';
import headerReducer from '../features/header/headerSlice';



export const store = configureStore({
  reducer: {
    modal: modalReducer,
    todos: todosReducer,
    header: headerReducer
  }
});
