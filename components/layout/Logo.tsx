import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <img
          src="/dumbbell.svg"
          alt="Outlined dumbbell logo"
          className="ml-8 w-10 h-10 cursor-pointer transition-transform duration-300 hover:scale-110 md:hover:scale-110 lg:hover:scale-125 xl:hover:scale-150"
        />
      </Link>
    </div>
  );
}
