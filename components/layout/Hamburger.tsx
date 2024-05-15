import React from "react";

// Fixes 'any' type issue and need React.fc for props
interface HamburgerProps {
  handleMenu: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ handleMenu }) => {
  return (
    <button className="w-10 h-10 mr-8" onClick={handleMenu}>
      <img src="/hamburger.svg" alt="a hamburger icon" />
    </button>
  );
};

export default Hamburger;
