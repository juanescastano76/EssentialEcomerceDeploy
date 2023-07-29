"use client";
import React from "react";
import { Provider, useDispatch } from "react-redux";
import { addToCart } from "@/Redux/CartProducts";
import { useState } from "react";

interface AddToCartBtnProps {
  buttonText: string;
  productData: any;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({
  buttonText,
  productData,
}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <button
      className="bg-blue-500 border-[1px] border-white text-white mt-2 p-1 px-2 rounded-[2px] font-bold hover:bg-blue-600 hover:text-black transition-all ease-in delay-50"
      onClick={() => {
        setQuantity((prev) => (prev === 1 ? 1 : prev + 1));

        dispatch(
          addToCart({
            id: productData.id,
            title: productData.title,
            price: productData.price,
            description: productData.description,
            imgUrl: productData.imgUrl,
            quantity: quantity,
          })
        );
      }}
    >
      {buttonText}
    </button>
  );
};

export default AddToCartBtn;
