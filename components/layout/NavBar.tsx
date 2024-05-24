"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NavLinks = () => {
  return (
    <>
      <Link
        className="hover:text-gray-200 hover:border-b-2 hover:border-gray-200"
        href="/dashboard/motivation"
      >
        Motivation
      </Link>
      <Link
        className="hover:text-gray-200 hover:border-b-2 hover:border-gray-200"
        href="/dashboard/motivation"
      >
        Journal
      </Link>
      <Link
        className="hover:text-gray-200 hover:border-b-2 hover:border-gray-200"
        href="/dashboard/motivation"
      >
        Logger
      </Link>
      <Link
        className="hover:text-gray-200 hover:border-b-2 hover:border-gray-200"
        href="/dashboard/motivation"
      >
        Workout Planner
      </Link>
    </>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-9/12 flex justify-end">
        <div className="hidden sm:flex w-full justify-between">
          <NavLinks />
          <ThemeToggle />
        </div>
        <div className="sm:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
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
