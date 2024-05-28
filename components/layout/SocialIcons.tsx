import { LucideIcon } from "lucide-react";

// Define types for props
// For the icon component
type IconProps = {
  icons: LinkIcon[];
};

// For each item
// E.g.  { name: "X", link: "#", icon: X }
type LinkIcon = {
  name: string;
  link: string;
  icon: LucideIcon;
};

const SocialIcons = ({ icons }: IconProps) => {
  return (
    <div className="text-cyan-400 ">
      {icons.map((icon) => (
        <span
          key={icon.name}
          className="mt-1 sm:mt-0 cursor-pointer inline-flex p-1 md:p-2 items-center rounded-full bg-[#ffffff20] mx-1.5 hover:text-gray-100 hover:bg-cyan-400 duration-300"
        >
          {/* Temp icons for now, the social icons are deprecated for lucide-react */}
          <icon.icon />
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
