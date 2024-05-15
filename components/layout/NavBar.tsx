import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <>
      {/* Semantically correct the navbar with ul*/}
      <ul className="hidden sm:flex sm:gap-7 md:font-medium md:gap-10 lg:gap-20 xl:text-lg xl:gap-28">
        <li>
          <Link
            className="hover:text-white hover:border-b-2 hover:border-neutral-50"
            href="/dashboard/motivation"
          >
            Motivation
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:border-b-2 hover:border-neutral-50"
            href="/dashboard/journal"
          >
            Journal
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:border-b-2 hover:border-neutral-50"
            href="/dashboard/logger"
          >
            Logger
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:border-b-2 hover:border-neutral-50"
            href="/dashboard/planner"
          >
            Workout Planner
          </Link>
        </li>
      </ul>
    </>
  );
};

export default function NavBar() {
  return (
    <nav>
      <NavLinks />
    </nav>
  );
}
