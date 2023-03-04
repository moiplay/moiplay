import React from "react";

const Challenge = () => {
  return (
    <div>
      <div className="z-10 sticky bg-[#121212]  top-0">
        <div className="w-full flex items-center px-4  overflow-auto flex-row h-20  gap-4">
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
              viewBox="0 0 448 512"
            >
              <path d="M232 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H184V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H392c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V72z" />
            </svg>
            Join
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setGame(true);
            }}
            className=" h-[3rem]  flex-shrink-0 items-center justify-center flex text-sm font-semibold px-12 bg-black/50 rounded-lg"
          >
            <svg
              className="w-4 h-4 fill-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
            </svg>
            Share
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setGameType(true);
            }}
            className=" h-[3rem]  flex-shrink-0 text-sm items-center justify-center flex font-semibold px-12 bg-black/50 rounded-lg"
          >
            <svg
              className="w-5 h-5 fill-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M534 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L525.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L406.3 64.5c-2.7-.3-5.5-.5-8.3-.5H286c-37.1 0-67.6 28-71.6 64H214V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H454c44.2 0 80 35.8 80 80v8zM326 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L89.5 255.2 16.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H374c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H422c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z" />
            </svg>
            Support
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFilterGames(true);
            }}
            className=" h-[3rem]  flex-shrink-0 flex items-center justify-center text-sm px-12 font-semibold bg-black/50 rounded-lg"
          >
            <svg
              className="w-4 h-4 fill-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256c0 141.4-114.6 256-256 256c-10.6 0-21.1-.6-31.4-1.9c4-5.7 7.3-12 9.8-18.8l21-57.7 35.8-13c23.9-8.7 38.3-32 36.8-56.1c-1.3-24.4-16.5-46.1-39.2-55.6L166.2 257.3c-8.1-3.4-17.5 .4-21 8.5s.4 17.5 8.5 21l82.4 34.7L144 355v-3c0-30.9-25.1-56-56-56s-56 25.1-56 56v28C11.6 343.3 0 301 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256zM208.4 176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM143 121.9c23.5-13.4 52.9-10.6 73.4 7l13.2 11.3c6.7 5.8 16.8 5 22.6-1.7s5-16.8-1.7-22.6l-13.2-11.3C206.4 78.1 162.3 74 127.1 94.1l-7.1 4c-7.7 4.4-10.3 14.2-6 21.8s14.2 10.3 21.8 6l7.1-4zM112 352v48.6l151.8-55.2c12.5-4.5 26.2 1.9 30.8 14.4s-1.9 26.2-14.4 30.8l-49.8 18.1-26.1 71.7c-6.9 19-24.9 31.6-45.1 31.6H112c-26.5 0-48-21.5-48-48V352c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
            </svg>
            How To Play
          </button>
        </div>
      </div>
      <div className="flex  flex-col sm:flex-row sm:px-4 justify-center gap-4">
        <div className="w-full sm:sticky top-[5rem] aspect-square max-w-lg h-min bg-[#0e0e0e] justify-between flex-col flex">
          <div
            style={{
              background: 'url("")',
              objectFit: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "darken",
            }}
            className="w-full flex-shrink-0 flex justify-end"
          >
            <h2 className=" text-5xl p-6 font-bold">500</h2>
          </div>
          <div className="p-6 h-max justify-between flex flex-col">
            <div>
              <h3 className="text-2xl font-bold">Madden 23</h3>
              <p>$5 entry | NFL Teams</p>
            </div>
            <div className="flex-wrap flex gap-3 py-6">
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
            </div>
          </div>
          <div className="justify-between w-full flex p-6 mt-auto">
            <p>26/64 Joined</p>
            <p>Today at 6:00pm</p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 pb-4">
          <div className="w-full bg-[#0e0e0e]  ">
            <div className="relative w-full p-6 py-9 md:mx-auto md:max-w-3xl lg:max-w-4xl ">
              <div className="prose  mb-[16px] prose-invert mx-auto  lg:prose-lg">
                <h1 className=" font-bold ">Prizes</h1>
                <div className="w-full h-20 border-t border-x border-white/10"></div>
                <div className="w-full h-20 border-t border-x border-white/10"></div>
                <div className="w-full h-20 border-t border-x border-white/10"></div>
                <div className="w-full h-20 border-t border-x border-white/10"></div>
                <div className="w-full h-20 border border-white/10"></div>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#0e0e0e]  ">
            <div className="relative w-full p-6 py-9 md:mx-auto md:max-w-3xl lg:max-w-4xl ">
              <div className="prose  prose-invert mx-auto  lg:prose-lg">
                <h1 className=" font-bold ">Rules</h1>
                <p>
                  <strong>Lag/Settings/Teams:</strong> After 2 minutes of
                  gameplay any complaints on lag, pre-game settings, or banned
                  teams will not be taken into consideration. No exceptions.
                  (Note: connection is much better if you use a LAN cable
                  instead of WiFi.)
                </p>
                <p>
                  <strong>Lag/Settings/Teams:</strong> After 2 minutes of
                  gameplay any complaints on lag, pre-game settings, or banned
                  teams will not be taken into consideration. No exceptions.
                  (Note: connection is much better if you use a LAN cable
                  instead of WiFi.)
                </p>
                <p>
                  <strong>Lag/Settings/Teams:</strong> After 2 minutes of
                  gameplay any complaints on lag, pre-game settings, or banned
                  teams will not be taken into consideration. No exceptions.
                  (Note: connection is much better if you use a LAN cable
                  instead of WiFi.)
                </p>
                <p>
                  <strong>Lag/Settings/Teams:</strong> After 2 minutes of
                  gameplay any complaints on lag, pre-game settings, or banned
                  teams will not be taken into consideration. No exceptions.
                  (Note: connection is much better if you use a LAN cable
                  instead of WiFi.)
                </p>
                <p>
                  <strong>Lag/Settings/Teams:</strong> After 2 minutes of
                  gameplay any complaints on lag, pre-game settings, or banned
                  teams will not be taken into consideration. No exceptions.
                  (Note: connection is much better if you use a LAN cable
                  instead of WiFi.)
                </p>
              </div>
            </div>
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

export default Challenge;
