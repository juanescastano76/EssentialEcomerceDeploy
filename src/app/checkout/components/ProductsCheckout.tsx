"use client";
import React from "react";
import { ProductType } from "@/types";

import { useSelector } from "react-redux";

function ProductsCheckout() {
  const cartProducts = useSelector((state: any) => state.cart.cartProducts);
  console.log(cartProducts);

  function totalPrice() {
    let total = 0;
    cartProducts.forEach((product: ProductType) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(3);
  }

  return (
    <>
      {/* Crear 2 grids dentro del map porque si no no funciona */}
      <div className="flex   lg:w-[20%] lg:relative lg:left-6 ">
        <div className=" lg:w-[100%] h-full  lg:border-l-[1px]  lg:border-white lg:mx-auto">
          <h1 className="text-center text-xl font-semibold  relative ">
            Resumen del pedido
          </h1>
          <div className="w-[90vw] mx-auto lg:w-[80%] lg:flex 0 h-full items-center ">
            <div className="">
              <div className="flex flex-col gap-4  ">
                <div className=" flex flex-col  ">
                  {cartProducts.map((productItem: ProductType) => {
                    return (
                      <div
                        className=" grid grid-cols-2 border-b-2 border-gray-600 "
                        key={productItem.id}
                      >
                        <div className=" p-2 lg:my-5" key={productItem.id}>
                          <h4 className="flex justify-center text-center">
                            {productItem.title} x {productItem.quantity}
                          </h4>
                        </div>
                        <div className=" p-2 ">
                          <span className="place-items-center grid h-full justify-center ">
                            ${productItem.price * 1000 * productItem.quantity}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-2 my-3 border-b-2 border-gray-600  pb-4 ">
                  <div className=" lg:flex lg:justify-center  ">
                    <p className="text-center">Envio</p>
                  </div>
                  <div className="ml-5  justify-center">
                    <p className="text-center">Envio Gratis</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 my-3 border-b-2 border-gray-600  pb-4 ">
                  <div className=" lg:flex lg:justify-center  ">
                    <p className="text-center">Total</p>
                  </div>
                  <div className="ml-5  justify-center">
                    <p className="text-center">{totalPrice()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsCheckout;

// {cartProducts.length === 0 && (
//   <h5 className="text-2xl text-center">
//     No hay productos en el carrito{" "}
//   </h5>
// )}
