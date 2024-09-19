import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      state.push(action.payload);
    },
    deleteFromCard: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
        return item;
      });
    },
    decrementQuantity: (state, action) => {
        state = state.map((item) => {
            if (item.quantity !== 1) {
                if (item.id === action.payload.id) {
                    item.quantity -= 1;
                }
            }
            return item;
        });
        }
  },
});


export const { addToCard, deleteFromCard, incrementQuantity, decrementQuantity } = cardSlice.actions;

export default cardSlice.reducer;