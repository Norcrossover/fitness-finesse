import Link from "next/link";

export default function Logo() {
  return (
    <button>
      <Link href="/">
        <img
          src="/dumbbell.svg"
          alt="Outlined dumbbell logo"
          className="w-10 h-10 ml-8 cursor-pointer transition-transform duration-300 hover:scale-110"
        />
      </Link>
    </button>
  );
}
