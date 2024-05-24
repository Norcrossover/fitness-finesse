import { PersonStanding } from "lucide-react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { SOCIALS } from "@/lib/Menus";

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-slate-800 bg-slate-400">
        <div className="py-2 px-2 md:flex md:justify-between md:items-center bg-[#ffffff20] dark:text-slate-50">
          <h3 className="text-center lg:text-3xl sm:text-2xl text-xl md:mb-0 font-semibold  py-2">
            Be The Change <span className="text-cyan-400">You </span>Want To{" "}
            <span className="text-cyan-400">See </span>
          </h3>
        </div>
        <ItemsContainer />
        <hr></hr>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-10 text-center py-4 text-sm dark:text-slate-50 w-full">
          <p>PSU CS-464</p>
          <p>
            {/* Might consider changing this */}
            @2024. Created by{" "}
            <span className="text-cyan-400 font-semibold">
              Victor Castro
            </span>{" "}
            and{" "}
            <span className="text-cyan-400 font-semibold">Kobe Norcross </span>
          </p>
          {/* From Menu.ts */}
          <SocialIcons icons={SOCIALS} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
