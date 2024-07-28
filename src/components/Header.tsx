import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaSun } from "react-icons/fa";
import { navLinks, socialIcons } from "@/data";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="w-full py-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className=" w-max py-3 px-8 border border-solid border-dark font-medium capitalize flex items-center gap-4 rounded-full fixed left-1/2 -translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        {navLinks.map((item) => (
          <Link href={item.link} key={item.id}>
            {item.title}
          </Link>
        ))}
        <button>
          <FaSun />
        </button>
      </nav>
      <Socials />
    </header>
  );
};

export default Header;
