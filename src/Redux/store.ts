import { configureStore } from "@reduxjs/toolkit";
import cartProducts from "./CartProducts";

export const store = configureStore({
  reducer: { cart: cartProducts },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
