"use client";
import { DIRECTORY, RESOURCES, ABOUT, SUPPORT } from "@/lib/Menus";
import Link from "next/link";

const Item = ({ links, title }) => {
  return (
    <ul>
      <h3 className="mb-1 font-semibold">{title}</h3>
      {links.map((link) => (
        <li key={link.name}>
          <Link
            className="text-sm leading-7 hover:text-cyan-400 duration-300"
            href={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const ItemsContianer = () => {
  return (
    <div className="my-5 justify-items-center dark:text-slate-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      <Item links={DIRECTORY} title="DIRECTORY" />
      <Item links={RESOURCES} title="RESOURCES" />
      <Item links={ABOUT} title="ABOUT" />
      <Item links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContianer;
