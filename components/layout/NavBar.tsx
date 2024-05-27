"use client";
import { Menu, X } from "lucide-react";
import { useState, useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "./ThemeToggle"; // Check the current theme to apply conditional styling

const NavLinks = () => {
  return (
    <>
      <Link className="nav-links" href="/dashboard/exercises">
        Exercises
      </Link>
      <Link className="nav-links" href="/dashboard/motivation">
        Motivation
      </Link>
      <Link className="nav-links " href="/dashboard/journal">
        Journal
      </Link>
      <Link className="nav-links" href="/dashboard/logger">
        Logger
      </Link>
      <Link className="nav-links" href="/dashboard/planner">
        Workout Planner
      </Link>
    </>
  );
};

const NavBar = () => {
  const darkMode = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-9/12 flex justify-end">
        <div className="hidden sm:flex w-full justify-between">
          <NavLinks />
        </div>
        <div className="sm:hidden">
          <button onClick={toggleNavBar}>
            {isOpen ? (
              <X size={35} className={darkMode ? "text-white" : "text-black"} />
            ) : (
              <Menu
                size={35}
                className={darkMode ? "text-white" : "text-black"}
              />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex gap-1 flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
};
export default NavBar;
