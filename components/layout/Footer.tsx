import { PersonStanding } from "lucide-react";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-800">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff25] py-7">
          <h3 className="lg:text-2xl text-xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            Created by:
            <span className="text-cyan-400">
              {" "}
              Victor Castro and Kobe Norcross
            </span>
          </h3>
          <p className="">
            To fulfill the requirements of the Portland State University
            Frontend Web Development Computer Science Course.
          </p>
        </div>
        <ItemsContainer />
      </footer>
    </>
  );
};

export default Footer;
