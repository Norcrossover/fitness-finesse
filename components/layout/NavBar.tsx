"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <Link
        className="font-medium hover:text-white"
        href="/dashboard/motivation"
      >
        Motivation
      </Link>
      <Link className="font-medium hover:text-white" href="/dashboard/journal">
        Journal
      </Link>
      <Link className="font-medium hover:text-white" href="/dashboard/logger">
        Logger
      </Link>
      <Link className="font-medium hover:text-white" href="/dashboard/planner">
        Workout Planner
      </Link>
    </>
  );
};

function NavBar() {
  return (
    <nav className="hidden sm:flex gap-10">
      <NavLinks />
    </nav>
  );
}

export default NavBar;
