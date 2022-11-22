import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  showCart: false,
  itemsList: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.itemsList = [...state.itemsList, action.payload]
        },
        toggleCart: (state) => {
            state.showCart = !state.showCart
        },
        resetCart: (state) => {
            state.itemsList = []
        }
    }
});

// const cartActions = {
//     addToCart,
//     toggleCart
// };

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
