"use client";
import React from "react";
import { useState } from "react";

export const CartProductsContext = React.createContext<
  CartProductsProvider | undefined | any
>(undefined);

interface CartProductsProvider {
  data: any;
  setData: any;
}

interface ProductsProp {
  children: React.ReactNode;
  /* define any other props here */
}

export const CartProductsProvider = ({ children }: ProductsProp) => {
  const [data, setData] = useState([]);

  return (
    <CartProductsContext.Provider value={{ data, setData }}>
      {children}
    </CartProductsContext.Provider>
  );
};
