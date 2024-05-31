"use client";

// For each item
type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

// String is not assignable so just use default types
const Button = ({
  text,
  onClick = () => {},
  type = "button",
  className = "",
}: ButtonProps) => {
  // Make it Optional as Ts throws an error when not used
  return (
    <button onClick={onClick} type={type} className={` ${className}`}>
      {text}
    </button>
  );
};

export default Button;
