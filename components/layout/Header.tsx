import Logo from "./Logo";
import NavBar from "./NavBar";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-opacity-80 backdrop-blur-lg backdrop-brightness-100 dark:bg-opacity-80 background-theme sticky top-0 z-20 mx-auto flex flex-wrap w-full items-center justify-between p-4">
      <Logo />
      <ThemeToggle />
      <NavBar />
    </header>
  );
};

export default Header;
