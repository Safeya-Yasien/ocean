import Link from "next/link";
import Logo from "./Logo";
import { navLinks } from "@/constants/nav-links";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 w-full bg-slate-900/50 backdrop-blur-md z-30">
      <div className="container relative py-6 flex justify-between ">
        <Logo />
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <Link
              href={`#${link}`}
              key={index}
              className="text-sm font-semibold tracking-wide text-slate-200 "
            >
              {link}
            </Link>
          ))}
        </nav>
        <MobileNav/>
      </div>
    </header>
  );
};

export default Navbar;
