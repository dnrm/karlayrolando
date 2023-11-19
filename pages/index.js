import LinkButton from "@/components/LinkButton";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pb-24 px-24`}
    >
      <div className="image-container w-screen h-80 relative bg-primary">
        <Image src="/flowers.jpg" alt="Flowers" className="object-cover opacity-75" fill />
      </div>
      <div className="hero-information-group flex flex-col justify-center items-center gap-12 -mt-36 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="heart-image"
        >
          <Image
            src="/heart.png"
            alt="Heart illustration"
            width={"200"}
            height={"200"}
            objectFit="contain"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          className="nuestra-boda flex flex-col justify-center items-center gap-4"
        >
          <p className="uppercase font-typewriter font-medium text-primary">
            Nuestra boda
          </p>
          <h1 className="font-adlery main-title text-primary text-4xl md:text-6xl lg:text-8xl">
            Karla y Rolando
          </h1>
        </motion.div>
        <div className="information">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-center font-typewriter font-bold text-primary"
          >
            09 de marzo 2024 <br />
            16:00 hrs. <br />
            Jardín Casarett
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
            className="text-center font-typewriter font-medium text-primary"
          >
            Carretera Cocoyoc-Oaxtepec Km. 2.5,
            <br /> 62738 Oaxtepec, Mor., México
          </motion.p>
          <br />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.1 }}
          >
            <Link
              href="/informacion"
              className="font-typewriter text-primary underline font-bold cursor-pointer"
            >
              Ver información completa del evento
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
          className="rsvp-button"
        >
          <LinkButton href="/confirmar">Confirmar asistencia</LinkButton>
        </motion.div>
      </div>
    </main>
  );
}
