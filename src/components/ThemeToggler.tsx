"use client";

import useThemeSwitch from "@/utils/Hooks/useThemeSwitch";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggler = () => {
  const { setTheme } = useThemeSwitch();
  return (
    <div>
      <button onClick={() => setTheme("dark")} className="block dark:hidden bg-dark rounded-full p-1">
        <FaSun className="text-lg text-light" />
      </button>
      <button onClick={() => setTheme("light")} className="dark:block  hidden bg-light rounded-full p-1">
        <FaMoon className="text-lg text-dark" />
      </button>
    </div>
  );
};

export default ThemeToggler;
