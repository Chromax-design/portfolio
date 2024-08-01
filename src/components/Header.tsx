"use client";

import Logo from "./Logo";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "@/data";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/utils/Icons";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import ThemeToggler from "./ThemeToggler";
import { siteMetadata } from "@/utils/siteMetaData";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const handleClick = (): void => setShowNav(!showNav);
  const handleClose = (): void => setShowNav(false);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  const onClickOutside = (e: MouseEvent | Event) => {
    if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
      return handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <header className="w-full py-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <nav className=" w-max py-3 px-6 md:px-8 border border-solid border-dark font-medium capitalize hidden sm:flex items-center gap-4 rounded-full fixed left-1/2 -translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        {navLinks.map((item) => (
          <Link href={item.link} key={item.id} className="text-dark">
            {item.title}
          </Link>
        ))}
        <ThemeToggler />
      </nav>

      <nav
        className={cn(
          ` w-max py-3 px-8 border border-solid border-dark font-medium capitalize flex sm:hidden items-center gap-4 rounded-full fixed -top-96 left-1/2 -translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease-in-out duration-300`,
          { "top-3": showNav }
        )}
        ref={mobileRef}
      >
        {navLinks.map((item) => (
          <Link href={item.link} key={item.id} className="text-dark text-lg">
            {item.icon}
          </Link>
        ))}
        <ThemeToggler />
      </nav>

      <button
        className="sm:hidden inline-block text-2xl transition-all ease-in duration-300"
        onClick={handleClick}
      >
        {showNav ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>

      <div className="hidden sm:flex gap-2">
        <a href={siteMetadata.linkedin} className="w-6 h-6">
          <LinkedInIcon className="hover:scale-125 duration-200 transition-all" />
        </a>
        <a href={siteMetadata.twitter} className="w-6 h-6">
          <TwitterIcon className="hover:scale-125 duration-200 transition-all" />
        </a>
        <a href={siteMetadata.github} className="w-6 h-6">
          <GithubIcon className="hover:scale-125 duration-200 transition-all dark:fill-light" />
        </a>
      </div>
    </header>
  );
};

export default Header;
