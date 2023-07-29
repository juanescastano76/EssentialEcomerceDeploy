import Image from "next/image";
import ProductsHomepage from "./components/ProductsHomepage";
import Slider from "./components/Slider";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="relative  w-full h-[70vh] lg:w-full lg:h-[80vh] z-10 ">
        <Image
          src="/images/heroEssential.jpg"
          alt="hero"
          fill
          className="opacity-100 brightness-90"
        />
        <div className="absolute flex text-center justify-center items-center w-full h-full mt-5 z-10">
          <h1 className="absolute flex text-center justify-center items-center  pb-10 text-white text-2xl font-[400] ">
            El poder del cannabis <br /> Al alcance de tus manos
          </h1>
          <Link
            href="/productos"
            className="absolute flex text-center justify-center items-center p-2 mt-24   text-white font-bold bg-blue-500 border-[1px] rounded-[2px] border-white hover:bg-blue-600 hover:text-black transition-all ease-in delay-50 "
          >
            Conoce nuestros productos
          </Link>
        </div>
      </main>
      <Slider />
      <ProductsHomepage />
    </div>
  );
}
