import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  valueMenu: false,
  valueBigTicket: false,
};

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    switchShoppingCartSlice: (state, action) => {
      state.valueMenu = !state.valueMenu;
    },
    switchBigTicketSlice: (state, action) => {
      state.valueBigTicket = !state.valueBigTicket;
    },
  },
});

export const { switchShoppingCartSlice, switchBigTicketSlice } = modalSlice.actions;
export default modalSlice.reducer;
