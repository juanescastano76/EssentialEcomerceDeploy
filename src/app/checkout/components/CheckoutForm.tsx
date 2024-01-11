"use client";
import React from "react";
import { z } from "zod";
import { FormType } from "@/types";
import { ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormState } from "react-hook-form/dist/types";
import { useState } from "react";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useSelector } from "react-redux";
import Image from "next/image";
function CheckoutForm() {
  const [paymentLink, setPaymentLink] = useState("");

  const PUBLIC_KEY = "TEST-7b7bb952-3fdd-40fb-b027-fa9c0206a777";
  initMercadoPago(PUBLIC_KEY);
  const [statusRequest, setStatusRequest] = useState("");
  const cartProducts = useSelector((state: any) => state.cart.cartProducts);

  const zodSchema: ZodType<FormType> = z.object({
    // firstName: z.string().min(3, "El nombre es requerido"),
    email: z.string().email(),
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
    phone: z.number(),
    address: z.string().min(3).max(130),
    city: z.string().min(2).max(15),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(zodSchema),
  });

  const submitForm = async (data: FormType) => {
    const sendData = {
      userInfo: data,
      cartProducts,
    };
    // Arreglar el hardcode de link
    fetch("/api/post", {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        setPaymentLink(response.initPoint);

        // window.location.href = response.initPoint;
        // usar el de abajo de momento, despues cuando todo funcione pasar al de arriba
        window.open(response.initPoint, "_blank");
      });
  };
  // Falta manejo de errores hacer

  return (
    <form
      className="w-[90vw] m-auto lg:w-[50vw] lg:flex lg:flex-col lg:gap-5 lg:justify-center ¿ lg:mr-10"
      onSubmit={handleSubmit(submitForm)}
    >
      {statusRequest && (
        <h1 className="text-white text-3xl">En proceso de compra</h1>
      )}
      <h1 className=" mb-5 mt-10 text-center text-xl font-semibold">
        Detalles De envio
      </h1>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          {...register("email", { required: true })}
        />

        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Correo electronico (andresgomez@gmail.com)
        </label>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("firstName")}
          />
          <label
            htmlFor="firstName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Primer nombre (Andres)
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("lastName")}
          />
          <label
            htmlFor="lastName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Apellidos (Cano Gomez)
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("phone", { valueAsNumber: true })}
          />
          <label
            htmlFor="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Numero telefonico (3002877917)
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("city")}
          />
          <label
            htmlFor="city"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Ciudad (Medellin)
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          id="floating_company"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          {...register("address")}
        />
        <label
          htmlFor="address"
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

      <button
        type="submit"
        className="w-full mb-5 py-2 bg-[#009ee3] flex justify-center items-center gap-1 rounded-lg hover:bg-[#187fac] hover:scale-[1.01]"
      >
        {" "}
        <Image
          src="/images/mpLogo.png"
          alt=""
          className="flex  object-fill w-fit mr-1"
          width={18}
          height={20}
        />{" "}
        Pagar con <span className="font-semibold "> Mercado Pago</span>
        {/* <a href={paymentLink}>Proceder al pago</a> */}
      </button>
    </form>
  );
}

export default CheckoutForm;
