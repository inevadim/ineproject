import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  valueMenu: false,
};

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    switchShoppingCartSlice: (state, action) => {
      state.valueMenu = !state.valueMenu;
      console.log(state.valueMenu);
    },
  },
});

export const { switchShoppingCartSlice } = modalSlice.actions;
export default modalSlice.reducer;
