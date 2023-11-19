import React from "react";
import Link from "next/link";

const Informacion = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-16 p-24">
      <div className="return-to-home fixed top-0 left-0 p-5">
        <Link
          href="/"
          className="group flex justify-start items-center gap-2 text-primary font-typewriter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span className="group-hover:underline">Regresar</span>
        </Link>
      </div>
      <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-adlery text-primary">
        Información
      </h1>
      <div className="flex flex-col justify-center items-center gap-8 text-center font-typewriter text-primary">
        <div className="fecha-y-hora">
          <h2 className="text-2xl font-bold">Fecha y Hora</h2>
          <p>
            09 de marzo 2024
            <br />
            16:00 hrs.
          </p>
        </div>
        <div className="lugar">
          <h2 className="text-2xl font-bold">Lugar</h2>
          <p className="font-bold">Jardín Casarett</p>
          <br />
          <p>
            Carretera Cocoyoc-Oaxtepec Km. 2.5,
            <br /> 62738 Oaxtepec, Mor., México
          </p>
        </div>
        <div className="codigo-de-vestimenta">
          <h2 className="text-2xl font-bold">Código de vestimenta</h2>
          <p>
            Formal
            <br />
            (No blanco ni beige)
          </p>
        </div>
        <div className="datos-del-hotel">
          <h2 className="text-2xl font-bold">Datos del hotel</h2>
          <p>
            Dorados Convention and Resort. <br />
            Teléfono. 735 356 0122
          </p>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
