import { NavItemType } from "@/utils/types";
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";

interface NavItemsProps {
  items: NavItemType[];
}

const Nav: React.FC<NavItemsProps> = ({ items }) => {
  return (
    <header className="relative mx-auto max-w-5xl">
      <nav className="hidden py-5 md:flex justify-between items-center absolute top-0 left-0 w-full bg-transparent z-20">
        <FaCode className="text-white text-4xl" />
        <div className="flex gap-5">
          {items?.map((item: any) => {
            return (
              <Link href={item.link} key={item.name} className="text-white">
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="relative overflow-hidden p-[1px] focus:outline-none rounded-full">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <Link
            href={""}
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-3 px-10 text-sm font-medium text-white backdrop-blur-3xl"
          >
            let&apos;s Connect
          </Link>
        </div>
      </nav>
      <nav className="flex justify-center w-full fixed top-5 left-0 z-50 ">
        <div className="max-w-lg justify-center py-3 md:hidden bg-black-100 rounded-full border border-white-100 mx-auto flex gap-16 items-center px-10 shadow-md">
        <FaCode className="text-white text-4xl" />
        <div className="flex gap-5 items-center">
          {items?.map((item: any) => {
            return (
              <Link
                href={item.link}
                key={item.name}
                className="text-white bg-transparent text-xl z-10"
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
