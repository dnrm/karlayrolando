import React from "react";
import Link from "next/link";

const Buscar = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-16 p-24">
      <div className="return-to-home fixed top-0 left-0 p-4">
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
      <div className="title-and-subtitle flex flex-col justify-center items-center text-center">
        <h1 className="text-primary font-bold font-typewriter text-2xl sm:text-4xl md:text-6xl lg:text-8xl">
          Confirmar asistencia
        </h1>
        <p className="text-primary tracking-tight font-light">
          Confirma tu asistencia directamente de esta página
        </p>
      </div>
      <div className="name-input-group max-w-2xl w-full flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          className="border-2 border-primary rounded-2xl px-4 py-2 w-full"
          placeholder="Escriba su nombre..."
        />
        <button className="bg-primary text-white w-full rounded-2xl px-4 py-2 flex justify-between items-center">
          <span>Buscar</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Buscar;
