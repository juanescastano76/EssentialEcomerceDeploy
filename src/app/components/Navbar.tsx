"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import { usePathname } from "next/navigation";
import { CartContext } from "../Context/store";

const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Productos",
    route: "/productos",
  },
  {
    label: "Contacto",
    route: "/contacto",
  },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const currentRoute = usePathname();

  const openInterval = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };
  // {
  //   console.log(isOpen);
  // }
  return (
    <div className="fixed top-0 z-[500] w-[100%]  bg-black text-white overflow-y-hidden  ">
      {!isOpen ? (
        <nav className="flex h-24 lg:flex justify-between lg:w-[80vw] m-auto ">
          <ul className="flex items-center">
            <li className="">
              <Image
                src="/images/blanco.png"
                width={180}
                height={200}
                alt="logo"
                className="h-full w-full  sm:mb-2 lg:w-52 lg:mb-1"
              />
            </li>
          </ul>

          <div className="hidden lg:flex lg:items-center  lg:w-6/12 ">
            <ul className="flex gap-5 justify-between w-full">
              {links.map(({ label, route }) => {
                return (
                  <li key={label} className=" ">
                    <Link
                      href={route}
                      className={
                        currentRoute === route
                          ? "underline underline-offset-[5px] decoration-cyan-600"
                          : "hover:underline underline-offset-[5px] hover:decoration-cyan-400"
                      }
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className=" flex justify-end w-full lg:w-52">
            <li className="items-center flex ">
              <Image
                src="/images/burger-menu-svgrepo-com.svg"
                width={30}
                height={30}
                alt="logo"
                className="m-auto mx-5 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              />
            </li>
            {isCartOpen && <ShoppingCart />}
            {/* burger menu */}
            <li className="flex justify-end  gap-2">
              <Image
                src="/images\shopping-cart-outline-svgrepo-com.svg"
                width={35}
                height={35}
                alt="logo"
                className="  mx-5  hover:cursor-pointer"
                onClick={() => setIsCartOpen(!isCartOpen)}
              />
            </li>
          </ul>
        </nav>
      ) : (
        // mobile menu
        <nav className="overflow-hidden">
          <ul className="flex  top-0 justify-center w-[100%] h-[100vh] bg-black text-white overflow-hidden">
            <li>
              <Image
                src="/images/blanco.png"
                width={140}
                height={100}
                alt="logo"
                className="absolute left-0"
              />
            </li>
            <li>
              <Image
                src="/images/burger-menu-svgrepo-com.svg"
                width={30}
                height={50}
                alt="logo"
                className="flex absolute right-6 top-10 "
                onClick={() => setIsOpen(!isOpen)}
              />
            </li>

            <li className="flex flex-col justify-center items-center gap-5">
              {links.map(({ label, route }) => {
                return (
                  <div className="">
                    <li key={label} className="">
                      <Link href={route} className="">
                        {label}
                      </Link>
                    </li>
                  </div>
                );
              })}
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
