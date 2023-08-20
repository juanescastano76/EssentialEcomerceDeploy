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
    "https://www.datocms-assets.com/52824/1669079241-220309_cookies_adiosmf_indoor_latestage-1.jpg?auto=format&fit=clip&w=1000&w=3840",
    "https://www.datocms-assets.com/52824/1669079241-220309_cookies_adiosmf_indoor_latestage-1.jpg?auto=format&fit=clip&w=1000&w=3840",
    "https://www.datocms-assets.com/52824/1669079241-220309_cookies_adiosmf_indoor_latestage-1.jpg?auto=format&fit=clip&w=1000&w=3840",
  ];
  const secondImg = ["/my-project/public/images/cogolloPrueba.jpg"];

  const redHotProperties = () => {
    return (
      <div className="absolute flex  h-[80%] justify-center m-auto items-center text-center border-[1px] border-white w-2/12 z-[500] max-w-[1000px] bg-black shadow-2xl opacity-[0.99]  ">
        <button className="absolute top-5 right-10 text-white text-xl">
          X
        </button>

        <div className="relative flex flex-col justify-center items-center   w-3/4 mx-auto ">
          <h3 className="text-center justify-center mx-auto   text-white items-center text-2xl lg:text-4xl">
            Sweet cherry pie
          </h3>
          <Image
            src="/images/cogolloImg.jpeg"
            width={100}
            height={100}
            alt="red hot cookies"
            className="m-10 w-[60%] lg:w-[80%] max-h-[230px] max-w-[200px] "
          />
          <div className="w-3/4 mx-auto justify-center items-center  text-left lg:mr-10 lg:text-lg">
            <h4 className="text-white text-left text-xl mb-1 ">SABOR:</h4>
            <p className="text-white mb-5">
              Intenso con aromas fuertes y terpenos bastantes buenos
            </p>
            <h4 className="text-white text-left text-xl mb-1">EXPERIENCIA:</h4>
            <p className="text-white">
              Fuerte y pesado sube el humor y aumenta la carisma
            </p>
          </div>
        </div>
      </div>
    );
  };
  const sweetCherryProperties = () => {
    return (
      <div className="absolute flex  h-[80%] justify-center m-auto items-center text-center border-[1px] border-white w-2/12 z-[500] max-w-[1000px] bg-black shadow-2xl opacity-[0.99]  ">
        <button className="absolute top-5 right-10 text-white text-xl">
          X
        </button>

        <div className="relative flex flex-col justify-center items-center   w-3/4 mx-auto ">
          <h3 className="text-center justify-center mx-auto   text-white items-center text-2xl lg:text-4xl">
            Sweet cherry pie
          </h3>
          <Image
            src="/images/cogolloImg.jpeg"
            width={100}
            height={100}
            alt="red hot cookies"
            className="m-10 w-[60%] lg:w-[80%] max-h-[230px] max-w-[200px] "
          />
          <div className="w-3/4 mx-auto justify-center items-center  text-left lg:mr-10 lg:text-lg">
            <h4 className="text-white text-left text-xl mb-1 ">SABOR:</h4>
            <p className="text-white mb-5">
              Intenso con aromas fuertes y terpenos bastantes buenos
            </p>
            <h4 className="text-white text-left text-xl mb-1">EXPERIENCIA:</h4>
            <p className="text-white">
              Fuerte y pesado sube el humor y aumenta la carisma
            </p>
          </div>
        </div>
      </div>
    );
  };
  const sweetXHotProperties = () => {
    return (
      <div className="absolute flex  h-[80%] justify-center m-auto items-center text-center border-[1px] border-white w-2/12 z-[500] max-w-[1000px] bg-black shadow-2xl opacity-[0.99]  ">
        <button className="absolute top-5 right-10 text-white text-xl">
          X
        </button>

        <div className="relative flex flex-col justify-center items-center   w-3/4 mx-auto ">
          <h3 className="text-center justify-center mx-auto   text-white items-center text-2xl lg:text-4xl">
            Sweet x Hot
          </h3>
          <Image
            src="/images/cogolloImg.jpeg"
            width={100}
            height={100}
            alt="red hot cookies"
            className="m-10 w-[60%] lg:w-[80%] max-h-[230px] max-w-[200px] "
          />
          <div className="w-3/4 mx-auto justify-center items-center  text-left lg:mr-10 lg:text-lg">
            <h4 className="text-white text-left text-xl mb-1 ">SABOR:</h4>
            <p className="text-white mb-5">
              Intenso con aromas fuertes y terpenos bastantes buenos
            </p>
            <h4 className="text-white text-left text-xl mb-1">EXPERIENCIA:</h4>
            <p className="text-white">
              Fuerte y pesado sube el humor y aumenta la carisma
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
          className="each-slide-effect lg:m-auto lg:w-3/12"
          onClick={() => {
            if (isOpenRed === true) {
              setIsOpenRed(false);
            }
          }}
        >
          <div
            style={{ backgroundImage: `url(${images[0]})` }}
            className="h-screen bg-contain  bg-no-repeat bg-center lg:bg-[length:100%_70%]  hover:cursor-pointer "
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
          className="each-slide-effect lg:m-auto lg:w-3/12"
          onClick={() => {
            if (isOpenSweet === true) {
              setIsOpenSweet(false);
            }
          }}
        >
          <div
            style={{ backgroundImage: `url(${images[1]})` }}
            className="h-screen bg-contain  bg-no-repeat bg-center lg:bg-[length:100%_70%]  hover:cursor-pointer "
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
        <div className="each-slide-effect lg:m-auto lg:w-3/12">
          <div
            style={{ backgroundImage: `url(${images[2]})` }}
            className="h-screen bg-contain  bg-no-repeat bg-center lg:bg-[length:100%_70%] hover:cursor-pointer "
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
