"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CartContext } from "../Context/store";
import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";
import { ProductType } from "@/types";

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
  const cartProducts = useSelector((state: any) => state.cart.cartProducts);

  const openInterval = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const totalCartItems = () => {
    let totalCartItems = 0;
    cartProducts.forEach((product: ProductType) => {
      totalCartItems += product.quantity;
    });
    return totalCartItems;
  };
  return (
    <div className="fixed top-0 z-[500] w-[100%] bg-black text-white overflow-y-hidden">
      {!isOpen ? (
        <nav className="flex h-24 lg:flex justify-between lg:w-[80vw] m-auto">
          <ul className="flex items-center">
            <li key={1}>
              <Link href={"/"} className="">
                <Image
                  src="/images/blanco.png"
                  width={180}
                  height={200}
                  alt="Essential herbs logo"
                  className="h-full w-full  sm:mb-2 lg:w-52 lg:mb-1"
                />
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex lg:items-center lg:w-6/12">
            <ul className="flex gap-5 justify-between w-full">
              {links.map(({ label, route }) => (
                <li key={label} className="">
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
              ))}
            </ul>
          </div>

          <ul className="flex justify-end w-full lg:w-52">
            <li className="items-center flex " key={2}>
              <Image
                src="/images/burger-menu-svgrepo-com.svg"
                width={30}
                height={30}
                alt="Menu"
                className="m-auto mx-5 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              />
            </li>
            {isCartOpen && <ShoppingCart />}
            {/* burger menu */}
            <li className="flex justify-end gap-2 " key={3}>
              <Image
                src="/images/shopping-cart-outline-svgrepo-com.svg"
                width={35}
                height={35}
                alt="Carrito de compras"
                className="mx-5 hover:cursor-pointer "
                onClick={() => setIsCartOpen(!isCartOpen)}
              />
              <p className="text-white relative  right-11 h-fit top-6 bg-blue-400 rounded px-1 text-xs">
                {totalCartItems()}
              </p>
            </li>
          </ul>
        </nav>
      ) : (
        // mobile menu
        <nav className="overflow-hidden">
          <ul className="flex top-0 justify-center w-[100%] h-[100vh] bg-black text-white overflow-hidden">
            <li key={4}>
              <Link href={"/"}>
                <Image
                  src="/images/blanco.png"
                  width={140}
                  height={100}
                  alt="Essential herbs logo"
                  className="absolute left-0"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </Link>
            </li>
            <li key={5}>
              <Image
                src="/images/burger-menu-svgrepo-com.svg"
                width={30}
                height={50}
                alt="Menu"
                className="flex absolute right-6 top-10"
                onClick={() => setIsOpen(!isOpen)}
              />
            </li>

            <ul className="flex flex-col justify-center items-center gap-5">
              {links.map(({ label, route }) => (
                <div key={label}>
                  <li className="">
                    <Link
                      href={route}
                      className=""
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {label}
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
