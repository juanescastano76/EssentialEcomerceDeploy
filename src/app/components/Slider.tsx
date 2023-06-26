"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Slider() {
  const [isOpenRed, setIsOpenRed] = useState(false);
  const [isOpenSweet, setIsOpenSweet] = useState(false);
  const [isOpenRedSweet, setIsOpenRedSweet] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  const redHotProperties = () => {
    return (
      <div className="absolute flex  h-[600px]  justify-center m-auto items-center text-center border-2 border-white w-72">
        <button className="absolute top-5 right-10 text-white text-xl">
          X
        </button>

        <div className="relative flex flex-col justify-center items-center   w-3/4 mx-auto ">
          <h3 className="text-center justify-center mx-auto   text-white items-center text-2xl">
            Sweet cherry pie
          </h3>
          <Image
            src="/images/essentialgotero.jpeg"
            width={100}
            height={100}
            alt="red hot cookies"
          />
          <div className="w-3/4 mx-auto justify-center items-center border-2 border-red-500 p-5 text-left">
            <h4 className="text-white text-left text-xl mb-1">SABOR:</h4>
            <p className="text-white mb-5">
              Intenso con aromas fuertes y terpenos <br /> bastantes buenos
            </p>
            <h4 className="text-white text-left text-xl mb-1">EXPERIENCIA:</h4>
            <p className="text-white">
              Fuerte y pesado <br /> sube el humor y aumenta la carisma
            </p>
          </div>
        </div>
      </div>
    );
  };
  const sweetCherryProperties = () => {
    return (
      <div className="absolute flex  h-[500px]  justify-center m-auto items-center text-center z-50 ">
        <div>
          <button className="absolute top-5 right-10 text-white text-xl  ">
            X
          </button>
        </div>
        <div className="relative flex flex-col justify-center items-center   w-3/4 mx-auto ">
          <h3 className="text-center justify-center mx-auto   text-white items-center text-2xl">
            Sweet cherry pie
          </h3>
          <Image
            src="/images/essentialgotero.jpeg"
            width={100}
            height={100}
            alt="red hot cookies"
          />
          <div className="w-3/4 mx-auto justify-center items-center border-2 border-red-500 p-5 text-left">
            <h4 className="text-white text-left text-xl mb-1">SABOR:</h4>
            <p className="text-white mb-5">
              Intenso con aromas fuertes y terpenos <br /> bastantes buenos
            </p>
            <h4 className="text-white text-left text-xl mb-1">EXPERIENCIA:</h4>
            <p className="text-white">
              Fuerte y pesado <br /> sube el humor y aumenta la carisma
            </p>
          </div>
        </div>
      </div>
    );
  };
  const sweetXHotProperties = () => {
    return (
      <div className="absolute flex  h-[500px]  justify-center m-auto items-center text-center  ">
        <button className="absolute top-0 right-10  text-white text-2xl">
          X
        </button>
        <div className="relative flex flex-col justify-center items-center   w-3/4 mx-auto ">
          <h3 className="text-center justify-center mx-auto   text-white items-center text-2xl">
            Sweet cherry pie
          </h3>
          <Image
            src="/images/essentialgotero.jpeg"
            width={100}
            height={100}
            alt="red hot cookies"
          />
          <div className="w-3/4 mx-auto justify-center items-center border-2 border-red-500 p-5 text-left">
            <h4 className="text-white text-left text-xl mb-1">SABOR:</h4>
            <p className="text-white mb-5">
              Intenso con aromas fuertes y terpenos <br /> bastantes buenos
            </p>
            <h4 className="text-white text-left text-xl mb-1">EXPERIENCIA:</h4>
            <p className="text-white">
              Fuerte y pesado <br /> sube el humor y aumenta la carisma
            </p>
          </div>
        </div>
      </div>
    );
  };

  const buttonStyle = {
    width: "20px",
    background: "none",
    border: "0px",
    margin: "10px",
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
    <section className="h-screen ">
      <h2 className="text-center font-bold text-2xl  my-5 items-center text-white">
        Nuestras geneticas
      </h2>
      <Slide {...properties}>
        <div
          className="each-slide-effect"
          onClick={() => {
            if (isOpenRed === true) {
              setIsOpenRed(false);
            }
          }}
        >
          <div
            style={{ backgroundImage: `url(${images[0]})` }}
            className=" h-screen bg-cover"
          >
            {isOpenRed ? (
              <div className=" flex justify-center items-center h-full p-10">
                {redHotProperties()}
              </div>
            ) : null}
            <span
              className="text-white flex text-center justify-center items-end h-full p-10 text-2xl"
              onClick={() => setIsOpenRed(true)}
            >
              Red hot cookies
            </span>
          </div>
        </div>
        <div
          className="each-slide-effect"
          onClick={() => {
            if (isOpenSweet === true) {
              setIsOpenSweet(false);
            }
          }}
        >
          <div
            style={{ backgroundImage: `url(${images[1]})` }}
            className="h-screen bg-cover"
          >
            {isOpenSweet ? (
              <div className=" flex justify-center items-center h-full p-10">
                {sweetCherryProperties()}
              </div>
            ) : null}
            <span
              className="text-white flex text-center justify-center items-end h-full p-10 text-2xl"
              onClick={() => setIsOpenSweet(true)}
            >
              Sweet cherry pie
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{ backgroundImage: `url(${images[2]})` }}
            className="h-screen bg-cover"
            onClick={() => {
              if (isOpenRedSweet === true) {
                setIsOpenRedSweet(false);
              }
            }}
          >
            {isOpenRedSweet ? (
              <div className=" flex justify-center items-center h-full p-10">
                {sweetXHotProperties()}
              </div>
            ) : null}

            <span
              className="text-white flex text-center justify-center items-end h-full p-10 text-2xl"
              onClick={() => setIsOpenRedSweet(true)}
            >
              Sweet x Hot
            </span>
          </div>
        </div>
      </Slide>
    </section>
  );
}

export default Slider;
