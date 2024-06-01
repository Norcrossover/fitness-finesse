"use client";
import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react"; // This helps with sharing data, in this case the theme
import { Sun, Moon } from "lucide-react";
import clsx from "clsx";

// I used the extension jsx instead of tsx
// Need to define types or typescript throws an issue
type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeToggle = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ERROR CODE: ThemeToggle not used in a ThemeProvider");
  }

  const { darkMode, setDarkMode } = context;

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="hidden sm:w-14 md:w-16 lg:w-20 h-8 relative sm:flex items-center p-1 dark:bg-slate-950 bg-cyan-400 cursor-pointer rounded-full"
    >
      <Moon className="text-white" size={20} fill="white" />
      <div
        className={clsx(
          "absolute bg-gray-100 dark:bg-white w-6 h-6 rounded-full transform transition-transform duration-300",
          {
            "left-[2px]": darkMode === true,
            "right-[2px]": darkMode === false,
          }
        )}
      ></div>
      <Sun className="ml-auto text-yellow-300" fill="yellow" size={20} />
    </div>
  );
};

export default ThemeToggle;
export { ThemeContext };
