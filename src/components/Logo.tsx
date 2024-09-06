import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-end">
      <Image src="/Logo.png" alt="logo" width={32} height={32} />
      <div className="relative">
        <h1 className="capitalize text-white text-xl font-bold">ocean</h1>
        <div className="absolute rounded-full bg-sky-700 w-2 h-2 -right-2.5 bottom-1.5 ">

        </div>
      </div>
    </Link>
  );
};

export default Logo;
