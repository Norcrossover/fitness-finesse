"use client";

const Button = ({ text, onClick = () => {}, className = "" }) => {
  // Optional as Ts throws an error when not used
  return (
    <button onClick={onClick} className={` ${className}`}>
      {text}
    </button>
  );
};

export default Button;
