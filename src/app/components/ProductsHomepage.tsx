import React from "react";

import { ProductType } from "@/types";
import { fetchSupabase } from "../productos/components/fetchSupabase";
import Image from "next/image";

import SliderMainPage from "./SliderMainPage";
import Link from "next/link";

async function ProductsHomepage(): Promise<JSX.Element> {
  const productsData = await fetchSupabase("productos");

  return (
    <SliderMainPage>
      {productsData.map((item: ProductType) => {
        return (
          <div className="text-white p-2" key={item.id}>
            <h2 className="text-2xl font-bold text-center mt-2 mb-2">
              Productos Destacados
            </h2>

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
              <div className="mx-auto items-center h-[200px] max-w-[400px] overflow-auto mt-3  lg:items-center  lg:max-h-[500px] lg:max-w-[600px] lg:w-4/5 lg:gap-0 lg:mb-0 lg:mt-28 ">
                {/* text */}

                <h5 className="flex justify-center items-center text-xl font-semibold text-center mt-2 mb-2 h-12 lg:text-2xl lg:justify-start lg:ml-5">
                  {item.title}
                </h5>
                <p className="h-12 lg:flex lg:items-center ml-5  lg:text-lg">
                  {item.description}
                </p>
                <p className="ml-5"> {item.price * 1000}</p>
                <div className="flex w-fit justify-self-start ml-5 mt-3 ">
                  <Link
                    href={`/productos/${item.id}`}
                    className="bg-blue-500 border-[1px] border-white text-white mt-2 p-1 px-2 rounded-[2px] font-bold hover:bg-blue-600 hover:text-black transition-all ease-in delay-50 lg:px-8"
                  >
                    Ir al producto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </SliderMainPage>
  );
}

export default ProductsHomepage;

// const productsData = await fetchSupabase("productos");

// console.log(productsData);
// return (
//   <>
//
//   </>
// );
