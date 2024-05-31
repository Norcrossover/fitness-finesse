"use client";

// For each item
type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ text, onClick = () => {}, className = "" }: ButtonProps) => {
  // Make it Optional as Ts throws an error when not used
  return (
    <button onClick={onClick} className={` ${className}`}>
      {text}
    </button>
  );
};

export default Button;
