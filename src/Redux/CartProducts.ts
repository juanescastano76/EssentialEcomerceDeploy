import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/types";

export interface CartProduct {
  cartProducts: ProductType[];
}

const initialState: CartProduct = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const item = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<ProductType>) => {},
    resetCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
