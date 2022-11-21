import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  showCart: false,
  itemsList: [
    {
      name: "Bread",
      quantity: "2",
      amount: "700",
      imageUrl:
        "/assets/milk-bread.webp",
    },
    {
      name: "Tea",
      quantity: "2",
      amount: "700",
      imageUrl:
        "/assets/milk-bread.webp",
    },
    {
      name: "Smt else",
      quantity: "2",
      amount: "700",
      imageUrl:
        "/assets/milk-bread.webp",
    },
  ],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, payload) => {
            state.itemsList.push({
              name: "New Item",
              quantity: "2",
              amount: "700",
            });
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
