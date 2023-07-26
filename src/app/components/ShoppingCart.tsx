"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CartContext } from "../Context/store";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { ProductType } from "@/types";
import { Provider, useDispatch } from "react-redux";
import { resetCart, removeFromCart } from "@/Redux/CartProducts";
import Link from "next/link";

function ShoppingCart() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const cartProducts = useSelector((state: any) => state.cart.cartProducts);

  const dispatch = useDispatch();

  return (
    <div
      className={
        closed
          ? "hidden"
          : "fixed  w-full h-full max-h-[800px]  overflow-y-auto bg-white  border-l-2 border-b-2 border-black shadow-lg z-[500] text-black lg:right-0  lg:max-w-[600px]  lg:max-h-[700px]   "
      }
    >
      <div className="flex justify-end p-1 w-full">
        {/* Close btn */}
        <button
          className="flex justify-end mt-0 px-4 py-2 font-bold text-white bg-black rounded-full absolute overflow-hidden"
          onClick={() => setIsCartOpen(false)}
        >
          X
        </button>
      </div>

      <div>
        <h5 className="text-center font-bold text-lg mt-1">
          Carrito de compras
        </h5>
      </div>

      {/*Products display  */}
      <div className="flex flex-col justify-center items-center overflow-auto border-2 border-black max-h-[70%] p-4">
        {cartProducts.map((product: ProductType) => {
          return (
            <div className="flex justify-center   items-center mx-auto w-full ">
              <Image
                src="/images/goteropng.png"
                width={50}
                height={100}
                alt="Gotero"
                className="w-[25%] max-h-[110px] max-w-[120px] "
              />

              <div className="flex flex-col ">
                <h5 className="text-sm ">{product.title}</h5>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Precio</span>
                  <p className="text-sm">{product.price * 1000}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Cantidad</span>
                  <span>{product.quantity}</span>
                </div>
              </div>
              <div className="flex gap-10">
                <img
                  className="ml-5 w-[19px] cursor-pointer lg:w-[22px] lg:h-[22px] lg:ml-[60px]"
                  src="/images/bin.svg"
                  alt="Eliminar del carrito"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* End of products display */}
      <div className="absolute bottom-0 w-full p-1">
        <div className="lg:w-[90%] mx-auto lg:my-10">
          <p>Total</p>
          <p>$200</p>
        </div>
        <div>
          <button
            className=" text-red-600 underline border-red-700 "
            onClick={() => {
              dispatch(resetCart());
            }}
          >
            Borrar el carrito
          </button>
        </div>
        <div className="flex justify-between w-full  ">
          <Link href={"checkout"} className="w-full">
            <button className="bg-blue-500 border-[2px] border-black text-white w-full h-[50px] font-bold hover:bg-blue-600 hover:text-black transition-all ease-in delay-50 ">
              Proceder al checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  // <div className="fixed top-0 w-full h-full bg-white  border-2 border-white shadow-lg z-[500] text-black">
  //   <div className="flex justify-end p-1 w-full">
  //     <button className="flex justify-end mt-5 px-5 py-2 font-bold text-white bg-black rounded-full">
  //       X
  //     </button>
  //   </div>
  //   <div>
  //     <h5 className="text-center font-bold text-lg mt-5">
  //       Carrito de compras
  //     </h5>
  //   </div>

  //   <div></div>

  //   <div className="absolute bottom-0 w-full p-1">
  //     <p>Total</p>
  //     <p>$200</p>
  //     <div className="flex justify-between w-full  ">
  //       <button className="bg-black text-white w-full h-[50px] ">
  //         Proceder al checkout
  //       </button>
  //     </div>
  //   </div>
  // </div>
}

export default ShoppingCart;
