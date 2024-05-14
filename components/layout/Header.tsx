import Logo from "./Logo";
import NavBar from "./NavBar";
import Hamburger from "./Hamburger";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5">
      <Logo />
      <NavBar />
      <Hamburger />
    </header>
  );
}
