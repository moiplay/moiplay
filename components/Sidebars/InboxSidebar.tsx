import React from "react";
import Sidebar from "../Sidebar";

const InboxSidebar = ({ active, setActive }: any) => {
  return (
    <Sidebar active={active} setActive={setActive}>
      <div className="flex-shrink-0 sticky top-0 ">
        <div className=" flex flex-row p-6 bg-[#0e0e0e] items-center gap-4">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Inbox</p>
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
        <div className="z-10 sticky bg-[#121212] pt-2 top-0">
          <div className="w-full flex items-center px-4 pb-2 overflow-auto flex-row h-20  gap-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                setActive(true);
              }}
              className="ml-auto h-[3rem]  flex-shrink-0 items-center justify-center flex text-sm font-semibold px-12 bg-black/50 rounded-lg"
            >
              <svg
                className="w-4 h-4 mr-2 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
              </svg>
              Global
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className=" h-[3rem]  flex-shrink-0 items-center justify-center flex text-sm font-semibold px-12 bg-black/50 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-white mr-2"
                viewBox="0 0 640 512"
              >
                <path d="M7.5 194.9c-15.4-26.6-6.3-60.7 20.4-76.1L220.7 7.5c26.6-15.4 60.7-6.3 76.1 20.4l167 289.3c15.4 26.6 6.2 60.7-20.4 76.1L250.5 504.5c-26.6 15.4-60.7 6.2-76.1-20.4L7.5 194.9zM197 159.6c-11.1-3-22.6 3.6-25.6 14.8l-7.2 26.9-20.4 76.1c-7 26 8.5 52.7 34.4 59.7s52.7-8.5 59.7-34.4l2.4-8.8c.1-.4 .2-.8 .3-1.1l17.7 30.7-12.1 7c-6.7 3.8-8.9 12.4-5.1 19s12.4 8.9 19 5.1l48.2-27.8c6.7-3.8 8.9-12.4 5.1-19s-12.4-8.9-19-5.1l-12.1 7-17.7-30.7c.4 .1 .8 .2 1.1 .3l8.8 2.4c26 7 52.7-8.5 59.7-34.4s-8.5-52.7-34.4-59.7l-76.1-20.4L197 159.6zM459.4 420.9c41.9-24.2 56.3-77.8 32.1-119.8L354.7 64.2c1.7-.2 3.5-.2 5.3-.2H584c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56H360c-13.7 0-26.2-4.9-35.9-13l135.3-78.1zm74.5-183.3L582 187.6c14-14.5 13.2-38.5-2.2-51.9c-14-11.7-34.5-9.5-46.9 3.2l-4.7 5.2-5-5.2c-12.5-12.7-33.2-15-46.7-3.2c-15.7 13.5-16.5 37.5-2.5 51.9l48.4 49.9c3 3.2 8.2 3.2 11.5 0z" />
              </svg>
              Game
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className=" h-[3rem]  flex-shrink-0 text-sm items-center justify-center flex font-semibold px-12 bg-black/50 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-white mr-2"
                viewBox="0 0 640 512"
              >
                <path d="M633.3 12.4c10.8 14 8.3 34.1-5.6 44.9l-144 112-72 56L403 232l28.3 36.3c3.7 4.8 4.4 11.2 1.8 16.7s-8.1 9-14.1 9.1l-48 .9L292.3 194.2l12.5-46.3c1.6-5.9 6.3-10.3 12.3-11.5s12 1.1 15.8 5.8l30.8 39.4 8.7-6.8 72-56 144-112c13.9-10.9 34.1-8.3 44.9 5.6zM269.1 476.3c-55.5 43.4-215 34.2-252.3 31.4c-5.1-.4-9.7-2.9-12.8-7s-4.5-9.1-3.6-14.1c.5-3.2 1.3-7.2 2.2-12.1c3-16.5 10.8-31.6 21.9-44.1l73.5-82.5c3.1-3.5 3.2-8.6 .4-12.3s-7.9-4.7-12-2.6L47.3 353.5c-6.3 3.3-13.4-2.7-11-9.4c14.3-39.9 32.7-76.9 55.5-94.7c57.7-45.1 175.3-35.5 175.3-35.5l78.8 100.9s-19.1 116.4-76.8 161.5zM496 512c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z" />
              </svg>
              Game Type
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className=" h-[3rem]  flex-shrink-0 flex items-center justify-center text-sm px-12 font-semibold bg-black/50 rounded-lg"
            >
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 h-4 mr-2"
              >
                <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm192 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c17.7 0 32 14.3 32 32z" />
              </svg>{" "}
              Filters
            </button>
          </div>
        </div>
      </div>
      <div className="flex-col flex">
        <InboxItem />
        <InboxItem />
        <InboxItem />
        <InboxItem />
        <InboxItem />
        <InboxItem />
        <InboxItem />
        <InboxItem />
        <InboxItem />
        <InboxItem />
        <InboxItem />
        <InboxItem />
      </div>
    </Sidebar>
  );
};

const InboxItem = ({ last }: any) => {
  return (
    <div className=" gap-3 text-sm flex-col w-full border-b border-white/10 p-6 justify-center items-center flex">
      <div className="flex-row justify-center items-center flex gap-4 w-full">
        <div className="w-14 flex-shrink-0 h-14 rounded-full bg-white "></div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col  w-full">
            <p className="font-bold text-base">Madden 23</p>
            <p>500 USD · 22 / 64 Joined · Playstation 5 · Regular Match</p>
          </div>
        </div>
      </div>
      <div className="flex ml-auto w-full">
        <p className="ml-auto">Today at 6:00pm</p>
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

export default InboxSidebar;
