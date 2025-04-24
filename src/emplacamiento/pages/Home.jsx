import React from "react";
import logo_gro from "../../assets/logos/logo_guerrero.svg";
// import sifa from "../../assets/logos/sifaegro.svg";

export const Home = () => {
  return (
    <div className="m-6 grid gap-4 bg-sefi-back">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative bg-muted justify-center items-center w-full max-w-[703px]">
          <img
            src={logo_gro}
            alt="Logo Guerrero"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative bg-muted w-full max-w-[745px]">
          <img
            src={sifa}
            alt="Logo Sifa"
            className="w-full h-auto object-contain"
          />
        </div>
      </div> */}
    </div>
  );
};
