import React from "react";
import { fetchSingleProduct } from "../components/fetchSingleProduct";
import Image from "next/image";
import AddToCartBtn from "@/app/components/ReusableComponents/AddToCartBtn";
import type { Metadata } from "next";
import { ProductType } from "@/types";
type Params = {
  params: {
    productId: number;
  };
};

export const generateMetadata = async ({
  params: { productId },
}: Params): Promise<Metadata> => {
  const productData = await fetchSingleProduct(productId);
  return {
    title: productData[0].title,
    description: productData[0].description,
  };
};

async function SingleProductPage({ params: { productId } }: Params) {
  const productData = await fetchSingleProduct(productId);

  if (productData.length === 0) {
    return (
      <p className="text-white flex items-center justify-center text-6xl h-[50vh] ] ">
        Error
      </p>
    );
  }
  return (
    <main>
      <article className="flex items-center justify-center m-auto  min-h-[800px] h-[100dvh] lg:w-[70vw] mt-[96px]  ">
        {productData.map((item: ProductType) => {
          return (
            <div className="flex  items-center m-auto w-[80vw] text-center flex-col justify-center gap-20 lg:flex-row   ">
              <h1 className="text-white text-center text-2xl font-bold lg:absolute lg:top-[25%]">
                {item.title}
              </h1>
              <div className="flex justify-center lg:flex-row  bg-[#020202] border-[0.5px] border-white rounded-lg cursor-pointer">
                <img
                  src={`https:/i.ibb.co/k4TjZ1N/goteropng.png`}
                  alt={item.title}
                  width={""}
                  height={""}
                  className="h-full max-h-[350px] lg:h-full lg:max-h-[500px]"
                />
              </div>
              <div className="flex flex-col gap-1  text-left ">
                <h2 className="text-white text-left  mb-1 text-xl  font-light lg:text-2xl ">
                  Detalles del producto
                </h2>
                <p className="text-white text-left lg:text-xl capitalize">
                  {item.description}
                </p>
                {/* <div className="flex gap-10 justify-center"> */}
                {/* <span className="text-white">Precio</span> */}
                <figure className="max-w-screen-md">
                  <div className="flex items-center mb-2 mt-2 text-yellow-500">
                    <svg
                      className="w-5 h-5 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-5 h-5 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-5 h-5 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-5 h-5 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor "
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="text-white ml-2 text-[0.8rem] ">(3)</span>
                  </div>
                </figure>
                <p className="text-white text-left lg:text-lg">
                  ${item.price * 1000}
                </p>
                {/* </div> */}
                <AddToCartBtn
                  buttonText="Añadir al carrito"
                  productData={{
                    price: item.price,
                    title: item.title,
                    id: item.id,
                    description: item.description,
                    imgUrl: item.imgUrl,
                  }}
                />
              </div>
            </div>
          );
        })}
      </article>
    </main>

    // #101110
  );
}

export default SingleProductPage;
