import React from "react";
import Navbar from "@/components/Navbar";

const Exito = () => {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-max flex-col items-center justify-center gap-16 px-5 py-24">
        <div className="title-and-subtitle flex flex-col justify-center items-center text-center">
          <h1 className="text-primary font-bold font-typewriter text-2xl sm:text-4xl md:text-6xl">
            Has confirmado con éxito
          </h1>
          <p className="text-primary tracking-tight font-light">
            Gracias por confirmar tu asistencia. Esperamos verte en la boda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exito;
