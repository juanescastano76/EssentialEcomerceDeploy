import Image from "next/image";
import ProductsHomepage from "./components/ProductsHomepage";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div>
      <title>Essential herbs</title>
      <main className="relative  w-full h-[90vh] lg:w-full lg:h-[80vh] ">
        <Image
          src="/images/heroEssential.jpg"
          alt="hero"
          fill
          className="opacity-100 brightness-50"
        />
        <div className="absolute flex text-center justify-center items-center w-full h-full mt-5">
          <h1 className="absolute flex text-center justify-center items-center  pb-10 text-white text-lg">
            El poder del cannabis <br /> Al alcance de tus manos
          </h1>
          <button className="absolute flex text-center justify-center items-center p-2 mt-20   text-black  bg-blue-400 border-2 border-black rounded">
            Conoce nuestros productos
          </button>
        </div>
      </main>
      <Slider />
      <ProductsHomepage />
    </div>
  );
}
