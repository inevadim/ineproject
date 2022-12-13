import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const modalShoppingCartSlice = createSlice({
  name: 'modalShoppingCartSlice',
  initialState,
  reducers: {
    switchVisibleModalShoppingCart: (state, action) => {
      state.value = !state.value;
      console.log(state.value);
    },
  },
});

export const { switchVisibleModalShoppingCart } = modalShoppingCartSlice.actions;
export default modalShoppingCartSlice.reducer;
