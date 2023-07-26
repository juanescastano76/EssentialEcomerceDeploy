"use client";
import { ProductType } from "@/types";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
function CheckoutPage() {
  const cartProducts = useSelector((state: any) => state.cart.cartProducts);
  console.log(cartProducts);

  return (
    <div className="mt-[96px] text-white">
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
  );
}

export default CheckoutPage;
