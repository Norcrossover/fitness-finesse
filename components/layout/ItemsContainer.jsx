"use client";
import { PRODUCTS, RESOURCES, COMPANY, TESTING } from "@/lib/Menus";
import Link from "next/link";

const Item = ({ links, title }) => {
  return (
    <ul>
      <h3 className="mb-1 font-semibold">{title}</h3>
      {links.map((link) => (
        <li key={link.name}>
          <Link className="text-sm leading-6" href={link.link}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const ItemsContianer = () => {
  return (
    <div className="dark:text-slate-50 grid grid-cols-1 sm:grid-cols-2 sm:gap-6 md:justify-center lg:grid-cols-4 lg:gap-6 sm:px-8 px-5 my-10">
      <Item links={PRODUCTS} title="PRODUCTS" />
      <Item links={RESOURCES} title="RESOURCES" />
      <Item links={COMPANY} title="COMPANY" />
      <Item links={TESTING} title="TESTING" />
    </div>
  );
};

export default ItemsContianer;
