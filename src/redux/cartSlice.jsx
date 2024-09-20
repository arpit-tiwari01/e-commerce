import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem('cart');
const initialState = storedCart ? JSON.parse(storedCart) : [];

export const cartSlice = createSlice({
  name: "cart",  
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); 
    },
    deleteFromCart: (state, action) => {
      // Return a new filtered array
      return state.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1; 
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
