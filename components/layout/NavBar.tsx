import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <>
      <Link href="/dashboard/motivation">Motivation</Link>
      <Link href="/dashboard/journal">Journal</Link>
      <Link href="/dashboard/logger">Logger</Link>
      <Link href="/dashboard/planner">Workout Planner</Link>
    </>
  );
};

function NavBar() {
  return (
    <nav>
      <NavLinks />
    </nav>
  );
}

export default NavBar;
