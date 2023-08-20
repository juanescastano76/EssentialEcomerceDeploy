"use client";
import React from "react";
import Image from "next/image";
import ProductsCheckout from "./components/ProductsCheckout";
import CheckoutForm from "./components/CheckoutForm";
import { useSelector } from "react-redux";
import Link from "next/link";
function CheckoutPage() {
  const cartProducts = useSelector((state: any) => state.cart.cartProducts);

  return (
    <main className="mt-[96px] text-white lg:min-h-[69dvh] flex  ">
      <div className="flex flex-col  m-auto  lg:w-[80vw] lg:flex-row  ">
        {cartProducts.length > 0 ? (
          // Carrito con items
          <>
            <CheckoutForm />
            <ProductsCheckout />
          </>
        ) : (
          // Carrito sin items
          <div className="w-full h-[66dvh]">
            <div className="h-full  items-center   ">
              <div className=" flex  items-center justify-center h-full ">
                <div className=" border-2 border-[#ffffff10] p-[5.6rem] rounded-lg">
                  <Image
                    src={"/images/emptyCart2.png"}
                    alt="empty cart"
                    width={500}
                    height={500}
                    className="m-auto border-2 border-green-300"
                  />

                  <h1 className=" w-full text-center text-2xl  break-words mb-2 lg:text-2xl">
                    Porfavor añade algo al carrito <br /> para continuar la
                    compra
                  </h1>
                  <Link
                    href={"/productos"}
                    className="w-fit flex justify-center m-auto"
                  >
                    <p className="text-center w-fit bg-blue-500 border-[1px] border-white text-white mt-2 p-1 px-2 rounded-[2px] font-bold hover:bg-blue-600 hover:text-black transition-all ease-in delay-50">
                      Visita nuestros productos
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default CheckoutPage;
