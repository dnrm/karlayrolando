import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <div className={`w-full grid grid-cols-1 md:grid-cols-5`}>
        <div className="px-4 md:px-8 lg:px-12 information-group col-span-1 md:col-span-3 flex flex-col justify-center items-start gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="nuestra-boda flex flex-col justify-center items-start gap-4"
          >
            <p className="uppercase font-sauce font-medium text-primary text-lg">
              Nuestra boda
            </p>
            <h1 className="font-adlery main-title text-primary text-4xl md:text-6xl lg:text-[6.5rem]">
              Karla y Rolando
            </h1>
          </motion.div>
          <div className="information text-sm py-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              className="text-left font-sauce font-bold text-primary"
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
              className="text-left font-sauce font-medium text-primary"
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
                className="font-sauce text-primary underline font-extrabold cursor-pointer"
              >
                Ver información completa del evento →
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
            className="rsvp-button"
          >
            <div className="rsvp bg-primary px-6 py-3 rounded-2xl text-white font-medium tracking-tight font-sauce text-xl">
              <Link href={"/confirmar"} className="hover:underline">
                Confirmar asistencia
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="floral-background-container w-full h-[93vh] relative col-span-1 md:col-span-2 -z-10"
        >
          <Image
            src="/floral.png"
            alt="Floral background"
            fill
            objectFit="cover"
          />
          <Image
            src="/heart.png"
            alt="Heart"
            width={200}
            height={200}
            className="absolute mx-auto left-0 right-0 top-0 bottom-0 my-auto"
          />
        </motion.div>
      </div>
    </main>
  );
}
