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
      {/* Render both components. The div is 1 of 2 solutions for spacing */}
      <Logo />
      <div className="flex-grow"></div>
      <NavBar isOpen={isOpen} />
      {/* Render Hamburger conditionally */}
      {!isOpen && <Hamburger handleMenu={toggleMenu} />}
      {/* Close SVG */}
      {isOpen && (
        <>
          <button onClick={toggleMenu}>
            <img
              src="./close.svg"
              alt="A button to close the menu"
              className="w-10 h-10 mr-8 sm:hidden"
            ></img>
          </button>
        </>
      )}
    </header>
  );
}
