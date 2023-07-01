"use client";
import React, { useState } from "react";

function ShoppingCart() {
  const [closed, setClosed] = useState(false);

  return (
    <div
      className={
        closed
          ? "hidden"
          : "fixed top-24 w-full h-full max-w-[500px] max-h-[70%] bg-white  border-l-2 border-b-2 border-black shadow-lg z-[500] text-black lg:right-0  "
      }
    >
      <div className="flex justify-end p-1 w-full">
        {/* <button
          className="flex justify-end mt-5 px-4 py-2 font-bold text-white bg-black rounded-full"
          onClick={() => setClosed(true)}
        >
          X
        </button> */}
      </div>

      <div>
        <h5 className="text-center font-bold text-lg ">Carrito de compras</h5>
      </div>

      <div className="absolute bottom-0 w-full p-1">
        <div className="lg:w-[70%] mx-auto lg:my-10">
          <p>Total</p>
          <p>$200</p>
        </div>
        <div className="flex justify-between w-full  ">
          <button className="bg-black text-white w-full h-[50px] ">
            Proceder al checkout
          </button>
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
