import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantities: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        state.quantities[item.id]++;
      } else {
        state.items.push(item);
        state.quantities[item.id] = 1;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      delete state.quantities[itemId];
    },
    increment: (state, action) => {
      const itemId = action.payload;
      if (state.quantities[itemId] !== undefined) {
        state.quantities[itemId]++;
      }
    },
    decrement: (state, action) => {
      const itemId = action.payload;
      if (state.quantities[itemId] > 1) {
        state.quantities[itemId]--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
