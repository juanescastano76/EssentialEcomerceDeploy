import React from "react";
import Link from "next/link";
import AddToCartBtn from "../components/ReusableComponents/AddToCartBtn";
import { ProductType } from "@/types";
// FETCHING PRODUCTS
import { fetchSupabase } from "./components/fetchSupabase";

async function ProductsPage() {
  const finalProducts = await fetchSupabase();

  return (
    <div>
      <div className="mt-[96px] bg-[url(/images/productshero.jpg)]  bg-no-repeat bg-cover bg-center h-64  ">
        <h1 className="text-center text-white h-full flex items-center justify-center text-2xl ">
          Nuestros Productos
        </h1>
      </div>
      <div className="mt-20 w-full justify-center items-center flex flex-col gap-10 mb-20 lg:flex-row lg:w-[70vw] lg:mx-auto flex-wrap  ">
        {finalProducts ? (
          finalProducts.map((item: ProductType) => {
            return (
              <div className="justify-center items-center flex flex-col gap-5 p-5 rounded-md shadow-md  border-[2px] border-[#a7a6a6] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer min-w-[300px] w-[250px]  lg:w-5/12 lg:py-14  ">
                <Link href={`/productos/${item.id}`} className="">
                  <h2 className="text-white block text-xl  text-center">
                    {item.title}
                  </h2>
                  {/* Arreglar el link */}

                  <img
                    src="https://i.ibb.co/k4TjZ1N/goteropng.png"
                    alt={item.title}
                    className="w-full  object-contain bg max-h-[200px] max-w-[300px] m-auto"
                  />

                  <div className="flex flex-col gap-5  mx-1 h-full justify-center items-center lg:gap-0 lg:overflow-hidden  ">
                    <p className="text-white w-full h-[60px] justify-center  flex items-center lg:mb-5 ">
                      {item.description.substring(0, 80)}
                    </p>
                    <div className="flex gap-4 text-white">
                      <p>Precio:</p>
                      {/* Convertir esto a numero */}
                      <span className="text-white">${item.price * 1000}</span>
                    </div>
                  </div>
                </Link>
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
            );
          })
        ) : (
          <p className="text-white">Hay un error porfavor intenta mas tarde</p>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
