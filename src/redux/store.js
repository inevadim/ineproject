import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    filterSlice: filterReducer,
    modalSlice: modalReducer,
  },
});
console.log(store);
