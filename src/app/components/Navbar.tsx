"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Productos",
    route: "/Productos",
  },
  {
    label: "Contacto",
    route: "/Contacto",
  },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarOpen = () => {};
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
                className="h-full w-full  lg:w-52"
              />
            </li>
          </ul>

          <ul className="hidden lg:flex lg:items-center lg:justify-around ">
            <li className="  flex gap-5 justify-between w-full">
              {links.map(({ label, route }) => {
                return (
                  <div className="flex justify-center m-10">
                    <li key={label} className=" ">
                      <Link href={route} className="">
                        {label}
                      </Link>
                    </li>
                  </div>
                );
              })}
            </li>
          </ul>

          <ul className=" flex justify-end w-full lg:w-52">
            <li className="flex justify-end w-fit  gap-2">
              <Image
                src="/images\shopping-cart-outline-svgrepo-com.svg"
                width={35}
                height={35}
                alt="logo"
                className="m-auto "
              />
              {/* burger menu */}
              <Image
                src="/images/burger-menu-svgrepo-com.svg"
                width={30}
                height={30}
                alt="logo"
                className="m-auto mx-5 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              />
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="overflow-hidden">
          <ul className="flex  top-0   justify-center w-[100%] h-[100vh] bg-black text-white overflow-hidden">
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
                className="flex absolute right-10 top-10"
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
