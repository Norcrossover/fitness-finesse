"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <Link
        className="dark:text-slate-200 dark:hover:border-b-2 dark:hover:border-white hover:border-b-2 hover:border-black"
        href="/dashboard/motivation"
      >
        Motivation
      </Link>
      <Link
        className="dark:text-slate-200 dark:hover:border-b-2 dark:hover:border-white hover:border-b-2 hover:border-black"
        href="/dashboard/journal"
      >
        Journal
      </Link>
      <Link
        className="dark:text-slate-200 dark:hover:border-b-2 dark:hover:border-white hover:border-b-2 hover:border-black"
        href="/dashboard/logger"
      >
        Logger
      </Link>
      <Link
        className="dark:text-slate-200 dark:hover:border-b-2 dark:hover:border-white hover:border-b-2 hover:border-black"
        href="/dashboard/planner"
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
