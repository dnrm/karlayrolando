import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-screen p-4">
      <Link href={"/"} className="flex justify-start items-center gap-4">
        <div className="heart-image">
          <Image
            src="/heart.png"
            alt="Heart illustration"
            width={"50"}
            height={"50"}
            objectFit="contain"
          />
        </div>
        <p className="font-adlery text-primary text-lg">Karla y Rolando</p>
      </Link>
    </div>
  );
};

export default Navbar;
