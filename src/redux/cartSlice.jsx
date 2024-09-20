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
      state = state.map(item => {
          if (item.id === action.payload) {
              item.quantity++;
          }
          return item;
      });
  },
  decrementQuantity: (state, action) => {
      state = state.map(item => {
          if (item.quantity !== 1) {
              if (item.id === action.payload) {
                  item.quantity--;
              }
          }
          return item;

      })
  },
  },
});

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
