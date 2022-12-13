import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import modalShoppingCartReducer from './slices/modalShoppingCartSlice';

export const store = configureStore({
  reducer: {
    filterSlice: filterReducer,
    modalShoppingCartSlice: modalShoppingCartReducer,
  },
});
console.log(store);
