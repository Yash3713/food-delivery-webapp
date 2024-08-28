import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (initialState, action) => {
      initialState.items.push(action.payload);
    },
    removeItem: (initialState) => {
      initialState.items.pop();
    },
    clearCart: (initialState) => {
      initialState.items.length = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
