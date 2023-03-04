import React from "react";
import Sidebar from "../Sidebar";

const SearchSidebar = ({ active, setActive }: any) => {
  return (
    <Sidebar active={active} setActive={setActive}>
      <div className="flex-shrink-0 sticky top-0 ">
        <div className=" flex flex-row p-6 bg-[#0e0e0e] items-center gap-4">
          <div className="flex flex-col">
            <input
              className="w-full outline-none appearance-none bg-transparent  text-lg font-semibold placeholder-white"
              placeholder="Search"
            />
          </div>
          <button
            onClick={(e) => {
              setActive(false);

              e.preventDefault();
              document.ontouchmove = function (e) {
                e.preventDefault();
              };
              document.body.style.overflow = "auto";
              if (
                navigator.userAgent.match(/Android/i) ||
                navigator.userAgent.match(/webOS/i) ||
                navigator.userAgent.match(/iPhone/i) ||
                navigator.userAgent.match(/iPad/i) ||
                navigator.userAgent.match(/iPod/i) ||
                navigator.userAgent.match(/BlackBerry/i) ||
                navigator.userAgent.match(/Windows Phone/i)
              ) {
                document.body.style.paddingInlineEnd = "0px";
              } else {
                document.body.style.paddingInlineEnd = "0px";
              }

              document.body.style.position = "static";
            }}
            className="ml-auto w-10 h-10 border-white/10 border flex items-center justify-center  rounded-full"
          >
            <svg
              className="w-[14px] h-[14px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M313 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L41 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L7 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L279 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L313 137z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-col flex">
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </div>
    </Sidebar>
  );
};

const SearchItem = ({ last }: any) => {
  return (
    <div className=" gap-3 text-sm flex-col w-full border-t border-white/10 p-6 justify-center items-center flex">
      <div className="flex-row justify-center items-center flex gap-4 w-full">
        <div className="w-14 flex-shrink-0 h-14 rounded-full bg-white "></div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col  w-full">
            <p className="font-semibold text-base">jamiezombie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tag = () => {
  return (
    <div className="p-1 px-2 bg-purple-400 rounded text-xs font-semibold  self-start">
      <p>Playstation 5</p>
    </div>
  );
};

export default SearchSidebar;
