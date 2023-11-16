import LinkButton from "@/components/LinkButton";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="hero-information-group flex flex-col justify-center items-center gap-12">
        <div className="heart-image">
          <Image
            src="/heart.png"
            alt="Heart illustration"
            width={"200"}
            height={"200"}
            objectFit="contain"
          />
        </div>
        <div className="nuestra-boda flex flex-col justify-center items-center gap-4">
          <p className="uppercase font-typewriter font-medium text-primary">
            Nuestra boda
          </p>
          <h1 className="font-adlery main-title text-primary text-2xl sm:text-4xl md:text-6xl lg:text-8xl">
            Karla y Rolando
          </h1>
        </div>
        <div className="information">
          <p className="text-center font-typewriter font-bold text-primary">
            09 de marzo 2024 <br />
            16:00 hrs. <br />
            Jardín Casarett
          </p>
          <br />
          <p className="text-center font-typewriter font-medium text-primary">
            Carretera Cocoyoc-Oaxtepec Km. 2.5,
            <br /> 62738 Oaxtepec, Mor., México
          </p>
          <br />
          <Link
            href="/informacion"
            className="font-typewriter text-primary underline font-bold cursor-pointer"
          >
            Ver información completa del evento
          </Link>
        </div>
        <div className="rsvp-button">
          <LinkButton href="/confirmar">Confirmar asistencia</LinkButton>
        </div>
      </div>
    </main>
  );
}
