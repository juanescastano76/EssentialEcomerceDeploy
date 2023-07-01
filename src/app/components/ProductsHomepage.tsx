"use client";
import React from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AddToCartBtn from "./ReusableComponents/AddToCartBtn";

function ProductsHomepage() {
  const productsData = [
    {
      id: 1,
      title: "Vaporizador extremo",
      image: "/images/essentialgotero.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque omnis, in enim esse quae eum officiis necessitatibus aliquid beatae.",
    },
    {
      id: 2,
      title: "Vaporizador Caldas",
      image: "/images/essentialgotero.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque omnis, in enim esse quae eum officiis necessitatibus aliquid beatae.",
    },
    {
      id: 3,
      title: "Vaporizador Envigado",
      image: "/images/essentialgotero.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque omnis, in enim esse quae eum officiis necessitatibus aliquid beatae.",
    },
  ];

  const buttonStyle = {
    width: "20px",
    background: "none",
    border: "0px",
    margin: "20px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };

  return (
    <Slide {...properties}>
      <div className="mt-20 text-white border-y-[1px] py-5 border-white ">
        <h4 className="text-s font-bold text-center"> PRODUCTOS DESTACADOS</h4>
        <h3 className="text-2xl font-bold text-center mt-2 mb-2">
          Vaporizador extremo{" "}
        </h3>
        <div className="lg:w-[50vw] lg:py-10 lg:mx-auto lg:flex lg:justify-center lg:gap-0 lg:mt-10 ">
          {/* Aside */}
          <div className="lg:flex">
            <Image
              src="/images/essentialgotero.jpeg"
              width={300}
              height={300}
              alt="vaporizador"
              className="mx-auto w-fit lg:flex"
            />
          </div>
          <div className="mx-auto  w-4/5 mt-3  lg:items-center lg:h-40  lg:mb-0 lg:mt-20 ">
            {/* text */}
            <p className="lg:flex lg:items-center lg:h-full ml-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              aliquid nemo assumenda asperiores odit repudiandae sapiente
              aliquam accusantium eius perspiciatis.
            </p>
            <div className="pl-5 lg:flex lg:ml-5 lg:p-0">
              <AddToCartBtn />
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default ProductsHomepage;
