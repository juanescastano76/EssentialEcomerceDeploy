import React from "react";

function Footer() {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="w-4/5 m-auto mt-10 pt-10">
        <h5 className="text-xl font-bold border-b-2 border-white pb-1">
          Nosotros
        </h5>
        <div className="flex flex-col gap-2">
          <h6 className="mt-2">Acerca de nosotros</h6>
          <h6>Terminos de uso</h6>
          <h6>Politica de privacidad </h6>
        </div>
      </div>

      <div className="w-4/5 m-auto mt-10 pb-10">
        <h5 className="text-xl font-bold border-b-2 border-white pb-1">
          Nosotros
        </h5>
        <div className="flex flex-col gap-2">
          <h6 className="mt-2">Acerca de nosotros</h6>
          <h6>Terminos de uso</h6>
          <h6>Politica de privacidad </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
