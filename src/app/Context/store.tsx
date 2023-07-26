"use client";
import React from "react";
import { useState } from "react";

export const CartContext = React.createContext<
  CartProviderData | undefined | any
>(undefined);

interface CartProviderData {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}
interface Props {
  children: React.ReactNode;
  /* define any other props here */
}

export const CartProvider = ({ children }: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

// import { useContext, useState } from "react";
// import { createContext } from "vm";

// interface ContextProps {
//   id: string;
//   title: string;
//   price: number;
//   description: string;
//   data: [];
//   setData: any;
// }

// const GlobalContext = createContext<ContextProps>({
//   id: "",
//   title: "",
//   price: "",
//   description: "",
// });

// export const GlobalContextProvider = ({ children: any }) => {
//   const [data, setData] = useState([]);

//   return (
//     <GlobalContext.Provider value={(setData, data)}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export const useGlobalContext = () => {
//   useContext(GlobalContext);
// };
