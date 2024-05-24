import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-gray-400 sticky top-0 z-20 mx-auto flex flex-wrap w-full items-center justify-between p-4">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
