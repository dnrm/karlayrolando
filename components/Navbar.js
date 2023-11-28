import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full px-5 py-4 flex justify-between items-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.095)] z-10">
      <Link href={"/"} className="flex justify-start items-center gap-6">
        <div className="heart-image">
          <Image
            src="/heart.png"
            alt="Heart illustration"
            width={"40"}
            height={"40"}
            objectFit="contain"
          />
        </div>
        <p className="font-adlery text-primary text-3xl">Karla y Rolando</p>
      </Link>
      <div className="text-sm links flex justify-center items-center gap-8 font-sauce text-primary tracking-tight font-medium">
        <div className="information">
          <Link href="/informacion" className="hover:underline">
            Información
          </Link>
        </div>
        <div className="gifts">
          <Link href={"/regalos"} className="hover:underline">
            Mesa de Regalos
          </Link>
        </div>
        <div className="rsvp bg-primary px-5 py-2 rounded-2xl text-white">
          <Link href={"/confirmar"} className="hover:underline">
            Confirmar asistencia
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
