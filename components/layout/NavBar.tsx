import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface NavBarProps {
  isOpen: boolean;
}

interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isOpen }) => {
  return (
    <ul
      className={clsx(
        "sm:flex sm:gap-7 md:font-medium md:gap-10 lg:gap-20 xl:text-lg xl:gap-28",
        {
          hidden: !isOpen,
          col: isOpen,
        }
      )}
    >
      <li>
        <Link
          className="hover:text-white hover:border-b-2"
          href="/dashboard/motivation"
        >
          Motivation
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-white hover:border-b-2"
          href="/dashboard/journal"
        >
          Journal
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-white hover:border-b-2"
          href="/dashboard/logger"
        >
          Logger
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-white hover:border-b-2"
          href="/dashboard/planner"
        >
          Workout Planner
        </Link>
      </li>
    </ul>
  );
};

const NavBar: React.FC<NavBarProps> = ({ isOpen }) => {
  return (
    <nav>
      <NavLinks isOpen={isOpen} />
    </nav>
  );
};

export default NavBar;
