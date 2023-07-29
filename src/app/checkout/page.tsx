"use client";
import { ProductType } from "@/types";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
function CheckoutPage() {
  const cartProducts = useSelector((state: any) => state.cart.cartProducts);
  console.log(cartProducts);

  return (
    <main className="mt-[96px] text-white">
      <div className="flex flex-col  m-auto  lg:w-[70vw]">
        {
          // Display errors in this place
        }
        <div className="text-center">
          <h1>Checkout</h1>
        </div>

        <form className="w-[90vw] m-auto lg:w-[70vw]">
          <h1 className="text-center mb-5">Detalles De envio</h1>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Numero Telefonico (3002877917)
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="ciudad"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="ciudad"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ciudad (Medellin)
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Direccion de entrega (carrera 24)
            </label>
          </div>
          {/* <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button> */}
        </form>

        <div className="flex flex-col">
          <h2 className="text-center">Tu pedido</h2>
          <div className="flex">
            <div className="flex">
              <div className="flex justify-around w-full flex-col">
                <p>Producto</p>
                <p>Subtotal</p>
              </div>
              <div className="">
                {cartProducts.map((productItem: ProductType) => {
                  return (
                    <div>
                      <h4>
                        {productItem.title} x {productItem.quantity}
                      </h4>
                      <span>
                        {productItem.price * 1000 * productItem.quantity}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-around flex-col text-center m-auto w-[90vw] ">
                <p>Envio</p>
                <p>Envio Gratuito</p>
              </div>
              <div>
                <p>total</p>
                <p>1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;
// hola
// {cartProducts.map((product: ProductType) => {
//   return (
//     <div className="flex justify-center   items-center mx-auto w-full ">
//       <Image
//         src="/images/goteropng.png"
//         width={50}
//         height={100}
//         alt="Gotero"
//         className="w-[25%] max-h-[110px] max-w-[120px] "
//       />

//       <div className="flex flex-col ">
//         <h5 className="text-sm ">{product.title}</h5>
//         <div className="flex items-center gap-2">
//           <span className="text-sm">Precio</span>
//           <p className="text-sm">{product.price * 1000}</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-sm">Cantidad</span>
//           <span>{product.quantity}</span>
//         </div>
//       </div>
//       <div className="flex gap-10">
//         <img
//           className="ml-5 w-[19px] cursor-pointer lg:w-[22px] lg:h-[22px] lg:ml-[60px]"
//           src="/images/bin.svg"
//           alt="Eliminar del carrito"
//         />
//       </div>
//     </div>
//   );
// })}

// Form

{
  /* <form className="flex flex-col w-[80vw] mx-auto items-center justify-center">
          <h2 className="text-center">Detalles de envio</h2>
          <div className=" justify-center flex flex-col tems-center w-[80%]">
            <label htmlFor="nombre" className="block">
              Nombre Completo
              <abbr
                title="obligatorio"
                className="text-red-500 "
                style={{ textDecorationLine: "none" }}
              >
                *
              </abbr>
            </label>
            <input type="text" name="nombre" className="block" />
            <div className="flex flex-row">
              <label htmlFor="ciudad" className="block">
                Ciudad{" "}
                <abbr
                  title="obligatorio"
                  className="text-red-500 "
                  style={{ textDecorationLine: "none" }}
                >
                  *
                </abbr>
              </label>
            </div>
            <div className="w-full flex flex-row justify-around ">
              <input type="text" name="Ciudad" className="w-full" />
            </div>
            <div>
              <label htmlFor="direccion">
                Direccion Completa
                <abbr
                  title="obligatorio"
                  className="text-red-500 "
                  style={{ textDecorationLine: "none" }}
                >
                  *
                </abbr>
              </label>
              <input
                type="text"
                name="direccion"
                className="w-full
              "
              />
              <label htmlFor="telefono">
                Telefono{" "}
                <abbr
                  title="obligatorio"
                  className="text-red-500 "
                  style={{ textDecorationLine: "none" }}
                >
                  *
                </abbr>
              </label>
              <input
                type="text"
                name="telefono"
                className="w-full
              "
              />
            </div>
          </div>
        </form> */
}
