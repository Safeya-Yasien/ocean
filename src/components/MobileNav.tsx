"use client";

import { Menu, X } from "lucide-react";
import { navLinks } from "./../constants/nav-links";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex md:hidden cursor-pointer md:cursor-none"
        onClick={toggleMenu}
      >
        {isOpen ? <Menu /> : <X />}
      </div>
      <div
        className={`absolute bg-slate-800 rounded-md p-2 right-2 top-20 origin-top transition-all z-50  w-auto
        ${
          !isOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-50 opacity-0 hidden"
        }`}
      >
        <nav className="w-full h-full flex flex-col capitalize tracking-wide font-normal space-y-2">
          {navLinks.map((link, index) => (
            <Link
              href={`#${link}`}
              key={index}
              className="py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-sky-400"
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
