import React from "react";

interface AuthenticationButtonStylingProps {
  children: React.ReactNode;
}

const AuthenticationButtonStyling: React.FC<
  AuthenticationButtonStylingProps
> = ({ children }) => {
  return (
    <div className="bg-cyan-500 text-slate-100 rounded-full shadow-lg m-4 p-2 hover:bg-cyan-600">
      {children}
    </div>
  );
};

export default AuthenticationButtonStyling;
