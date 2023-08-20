"use client";
import React from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function SliderMainPage({ children }: any) {
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
    <div className="mt-20 text-white border-y-[1px] py-5 border-white ">
      <Slide {...properties}>{children}</Slide>
    </div>
  );
}

export default SliderMainPage;
