"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import clsx from "clsx";

const ThemeToggle = () => {
  const [darkMode, SetDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") SetDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => SetDarkMode(!darkMode)}
      className="hidden sm:w-14 md:w-16 lg:w-20 h-8 relative sm:flex items-center p-1 dark:bg-black bg-teal-400 cursor-pointer rounded-full"
    >
      <Moon className="text-white" size={18} fill="white" />
      <div
        className={clsx(
          "absolute bg-gray-100 dark:bg-white w-6 h-6 rounded-full transform transition-transform duration-300",
          {
            "left-[2px]": darkMode === true,
            "right-[2px]": darkMode === false,
          }
        )}
      ></div>
      <Sun className="ml-auto text-yellow-300" fill="yellow" size={18} />
    </div>
  );
};

export default ThemeToggle;
