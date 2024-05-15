import React from "react";

// Fixes 'any' type issue and need React.fc for props
interface HamburgerProps {
  handleMenu: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ handleMenu }) => {
  return (
    <button onClick={handleMenu}>
      <img
        src="/hamburger.svg"
        alt="A hamburger icon"
        className="w-10 h-10 mr-8 sm:hidden cursor-pointer transition-transform duration-300 hover:scale-110"
      />
    </button>
  );
};

export default Hamburger;
