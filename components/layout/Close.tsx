import React from "react";

interface CloseProps {
  handleMenu: () => void;
}

const Close: React.FC<CloseProps> = ({ handleMenu }) => {
  return (
    <button onClick={handleMenu}>
      <img
        src="/close.svg"
        alt="A button to close the menu"
        className="w-10 h-10 mr-8 sm:hidden"
      />
    </button>
  );
};

export default Close;
