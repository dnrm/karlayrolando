import React from "react";
import Link from "next/link";

const Buscar = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const request = await fetch("/api/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        confirmed: e.target.confirmation.checked,
      }),
    });

    const response = await request.json();
    console.log(response);
  };

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
      <form
        onSubmit={handleSubmit}
        className="name-input-group max-w-2xl w-full flex flex-col justify-center items-start gap-4 p-5 shadow-2xl bg-white"
      >
        <label htmlFor="name" className="text-primary text-xl font-semibold">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          className="border-2 border-primary rounded-2xl px-4 py-2 w-full"
          placeholder="Escriba su nombre..."
        />
        <label htmlFor="name" className="text-primary text-xl font-semibold">
          Correo electrónico
        </label>
        <input
          type="email"
          name="email"
          className="border-2 border-primary rounded-2xl px-4 py-2 w-full"
          placeholder="Escriba su correo electrónico..."
        />
        <label htmlFor="name" className="text-primary text-xl font-semibold">
          Número de teléfono
        </label>
        <input
          type="tel"
          name="phone"
          className="border-2 border-primary rounded-2xl px-4 py-2 w-full"
          placeholder="+52 XXX XXX XXXX"
        />
        <div className="confirm-section mt-4 flex justify-start items-center gap-2">
          <input type="checkbox" name="confirmation" id="confirmation" value="confirmed" className="w-6 h-6" />
          <label htmlFor="name" className="text-primary text-xl font-semibold">
            Confirmo mi asistencia
          </label>
        </div>
        <button
          type="submit"
          className="bg-primary text-white w-full rounded-2xl px-4 py-4 mt-4 flex justify-between items-center"
        >
          <span>Confirmar mi asistencia</span>
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
      </form>
    </div>
  );
};

export default Buscar;
