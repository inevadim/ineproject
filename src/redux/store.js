import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filterSlice: filterReducer,
  },
});
console.log(store);
