import React from "react";
import useSWR from "swr";
import Navbar from "@/components/Navbar";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Confirmados = () => {
  const { data, error, isLoading } = useSWR("/api/get", fetcher);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-16 px-5 py-24">
        <div className="title-and-subtitle flex flex-col justify-center items-center text-center">
          <h1 className="text-primary font-bold font-typewriter text-2xl sm:text-4xl md:text-6xl">
            Invitados que han confirmado
          </h1>
        </div>
        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <p>Loading...</p>
            </div>
          ) : null}
        </div>
        <div className="max-w-4xl mx-auto">
          {error ? (
            <div className="flex justify-center items-center">
              <p>Error</p>
            </div>
          ) : null}
        </div>
        <div className="confirmed-guests block max-w-5xl mx-auto">
          {data && data.length > 0 ? (
            <>
              <div className="table-heading grid grid-cols-3 place-items-stretch gap-36 font-typewriter text-primary font-bold p-4 min-w-full text-lg">
                <div className="table-cell">Nombre</div>
                <div className="table-cell">Teléfono</div>
                <div className="table-cell">Correo electrónico</div>
              </div>
              <hr />
              <div className="data flex flex-col justify-start items-between">
                {data.map((guest) => (
                  <div
                    key={guest.id}
                    className="grid grid-cols-3 justify-center items-center gap-36 hover:bg-neutral-100 px-4 py-4"
                  >
                    <div className="table-cell">{guest.name}</div>
                    <div className="table-cell">{guest.phone}</div>
                    <div className="table-cell">{guest.email}</div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center">
              <p className="font-typewriter text-2xl text-primary">
                No hay invitados confirmados hasta ahora
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Confirmados;
