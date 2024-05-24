import Link from "next/link";

const Logo = () => {
  return (
    <div className="h-12 w-12">
      <button>
        <Link href="/">
          <img
            className="bg-gray-400"
            src="/MachampLogo.svg"
            alt="Fitness Finesse Logo of Machamp Pokemon"
          />
        </Link>
      </button>
    </div>
  );
};

export default Logo;
