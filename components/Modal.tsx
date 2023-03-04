import React from "react";

const Modal = ({ active, setActive, children, padding }: any) => {
  return (
    <div
      style={{ height: "100dvh" }}
      className={` ${
        active
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } w-screen duration-200 p-6 flex items-center  justify-center transition-all transform-gpu h-screen fixed right-0  top-0 left-0 z-20 bg-black/50`}
    >
      <div
        className={`max-w-lg ${
          active ? "scale-100" : "scale-95"
        } duration-200  transition-all   rounded-xl overflow-auto transform-gpu  w-full ${padding} bg-[#0e0e0e]  top-0 right-0 `}
      >
        {children}
      </div>
    </div>
  );
};

export const ModalLink = ({ children }: any) => {
  return (
    <h3 className="text-3xl flex flex-row items-center gap-3 text-white/80 hover:text-white cursor-pointer font-semibold py-3">
      {children}
    </h3>
  );
};

export default Modal;
