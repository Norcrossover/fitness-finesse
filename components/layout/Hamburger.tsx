"use client";

function handleMenu() {
  console.log("hello");
}

function Hamburger() {
  return (
    <button className="w-10 h-10 mr-8 sm:hidden" onClick={handleMenu}>
      <img src="/hamburger.svg" alt="a hamburger icon"></img>
    </button>
  );
}

export default Hamburger;
