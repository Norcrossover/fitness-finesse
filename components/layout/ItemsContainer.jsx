"use client";
import { DIRECTORY, RESOURCES, ABOUT, SUPPORT } from "@/lib/Menus";
import Link from "next/link";

const Item = ({ links, title }) => {
  return (
    <ul>
      <h3 className="mb-1 font-semibold">{title}</h3>
      {/* Some have routes to map, others don't. We can add or remove */}
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
    <div className="my-5 justify-items-center dark:text-slate-50 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {/* Helps map each list item for the footer */}
      <Item links={DIRECTORY} title="DIRECTORY" />
      <Item links={RESOURCES} title="RESOURCES" />
      <Item links={ABOUT} title="ABOUT" />
      <Item links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContianer;
