import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";
import InboxSidebar from "./Sidebars/InboxSidebar";
import ProfileSidebar from "./Sidebars/ProfileSidebar";
import SearchSidebar from "./Sidebars/SearchSidebar";

const Header = () => {
  const [profile, setProfile] = React.useState(false);
  const [inbox, setInbox] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  return (
    <header className="w-full justify-between items-center flex p-4 h-[4.5rem] bg-[#0e0e0e]  left-0 z-50">
      <ProfileSidebar active={profile} setActive={setProfile} />
      <InboxSidebar active={inbox} setActive={setInbox} />
      <SearchSidebar active={search} setActive={setSearch} />
      <div
        className="flex items-center 
    active:scale-95 duration-300 ease-in-out transform-gpu transition
    "
      >
        <Link href="/">
          <button className="mr-6 flex items-center justify-center w-[42px] h-[42px] bg-violet-500  rounded-[8px]">
            <svg
              width="32"
              fill="white"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 160"
            >
              <path
                fill="white"
                d="M54.76 18.43l-49.4 98.88A26.76 26.76 0 0029.29 156h59.17a23.13 23.13 0 0023.12-22.48 542 542 0 00-7.77-108.12C99.44.7 66-4 54.76 18.43zM244.64 117.31l-49.4-98.88C184-4 150.56.7 146.19 25.4a542 542 0 00-7.77 108.16A23.13 23.13 0 00161.54 156h59.17a26.76 26.76 0 0023.93-38.69z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
      <div className="flex gap-3 items-center h-full">
        <HeaderButton
          onClick={(e: Event) => {
            setSearch(true);
            document.ontouchmove = function (e) {
              e.preventDefault();
            };
            document.body.style.overflow = "hidden";
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
              document.body.style.paddingInlineEnd = "10px";
            }

            document.body.style.position = "fixed";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4 h-4 fill-white"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
          </svg>
        </HeaderButton>
        <HeaderButton
          onClick={(e: Event) => {
            setInbox(true);
            document.ontouchmove = function (e) {
              e.preventDefault();
            };
            document.body.style.overflow = "hidden";
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
              document.body.style.paddingInlineEnd = "10px";
            }

            document.body.style.position = "fixed";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4 h-4 fill-white"
          >
            <path d="M121 32c-29.4 0-55 20-62.1 48.5l-57 227.9C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-92.1c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64h270l48 192h-51.2c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73l48-192z" />
          </svg>
        </HeaderButton>

        <HeaderButton
          onClick={(e: Event) => {
            setProfile(true);
            e.preventDefault();
            document.ontouchmove = function (e) {
              e.preventDefault();
            };
            document.body.style.overflow = "hidden";
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
              document.body.style.paddingInlineEnd = "10px";
            }

            document.body.style.position = "fixed";
          }}
          noBorder
        >
          <div className="w-full h-full bg-violet-500" />
        </HeaderButton>
      </div>
    </header>
  );
};

const HeaderButton = ({ children, noBorder, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={`w-[42px] h-[42px]
        active:scale-95 transition
        overflow-hidden text-white/80 hover:text-white flex items-center justify-center ${
          noBorder ? ` ` : `border`
        } border-white/10 hover:border-white/20 rounded-full`}
    >
      {children}
    </button>
  );
};

export default Header;
