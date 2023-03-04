import Link from "next/link";
import React from "react";

const Sidebar = ({ active, setActive, children, padding }: any) => {
  return (
    <div
      className={` ${
        active
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } w-screen duration-200 transition-all transform-gpu h-screen fixed top-0 left-0 z-20 bg-black/50`}
    >
      <div
        className={`max-w-md ${
          active ? "translate-x-0" : "translate-x-full"
        } duration-200 transition-all overflow-auto transform-gpu  w-full ${padding} bg-[#0e0e0e] fixed top-0 right-0 h-full`}
      >
        {children}
      </div>
    </div>
  );
};

export const SideBarLink = ({ children, href }: any) => {
  return (
    <Link href={href}>
      <h3 className="text-2xl flex flex-row items-center gap-3 text-white/80 hover:text-white cursor-pointer font-semibold py-3">
        {children}
      </h3>
    </Link>
  );
};

export default Sidebar;
