"use client"; // Transform to a client component to use useState
import React, { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Hamburger from "./Hamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Controls the hamburger state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-5">
      {/* Render both components */}
      <Logo />
      <NavBar />
      {/* Render Hamburger when !isOpen and on sm */}
      {!isOpen && (
        <div className="sm:hidden">
          <Hamburger handleMenu={toggleMenu} />
        </div>
      )}
      {/* Conditionally render the close button */}
      {isOpen && (
        <>
          {/* TODO: Look up a SVG icon for closing */}
          <button className="w-10 h-10 sm:hidden" onClick={toggleMenu}>
            Close
          </button>
        </>
      )}
    </header>
  );
}
