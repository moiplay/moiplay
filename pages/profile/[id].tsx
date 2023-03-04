import React from "react";

const Profile = () => {
  return (
    <div className="">
      <div className="z-10 sticky bg-[#121212]  top-0">
        <div className="w-full flex items-center px-4  overflow-auto flex-row h-20  gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="ml-auto h-[3rem]  flex-shrink-0 items-center justify-center flex text-sm font-semibold px-12 bg-black/50 rounded-lg"
          >
            <svg
              className="w-4 h-4 mr-2 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M16 96L0 0 96 16 393.4 313.4l-80 80L16 96zM408 456l-72 24-32-32L448 304l32 32-24 72 56 56-48 48-56-56zM96 336l57.4-57.4 80 80L176 416l32 32-32 32-72-24L48 512 0 464l56-56L32 336l32-32 32 32zM496 96L358.6 233.4l-80-80L416 16 512 0 496 96z" />
            </svg>
            Challenge
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
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
            }}
            className=" h-[3rem]  flex-shrink-0 text-sm items-center justify-center flex font-semibold px-12 bg-black/50 rounded-lg"
          >
            <svg
              className="w-4 h-4 fill-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
            Report
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
      <div className="flex sm:flex-row flex-col gap-4 sm:pb-6 sm:px-4 w-full">
        <div className="aspect-square p-4 flex-col gap-4 bg-[#0e0e0e] flex items-center justify-center w-full h-min max-w-lg">
          <div className="w-24 h-24 bg-white rounded-full"></div>
          <p className="text-lg font-semibold">jamiezombie</p>
          <p className="text-center">
            Fusce vel lectus tincidunt, tincidunt leo sed, porttitor massa.
            Pellentesque convallis sollicitudin leo, sit amet varius ligula
            blandit id. In congue turpis nec varius sodales. Suspendisse nec
            augue massa. Mauris eu laoreet purus. Vestibulum ut maximus mauris.
            Ut nec magna blandit, commodo nunc vitae, laoreet purus.
          </p>
        </div>
        <div className="w-full  text-sm bg-[#0e0e0e] m-auto">
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
        </div>
      </div>
    </div>
  );
};

const LeaderboardItem = () => {
  return (
    <div>
      <div className="flex-shrink-0  border-b border-white/10  min-h-min hidden lg:flex  justify-between items-center p-6 px-8">
        <div className="flex items-center justify-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white"></div>
          <div className="flex flex-col items-center flex-shrink-0">
            <p className="font-semibold">jamiezombie</p>
            <p>Playstation 5</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center flex-shrink-0">
            <p className="font-semibold">NFL Teams</p>
            <p>Game Type</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center flex-shrink-0">
            <p className="font-semibold">11:16PM</p>
            <p>Feb 10th, 2023</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center flex-shrink-0">
            <p className="font-semibold">12.25 USD</p>
            <p>Prize</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center flex-shrink-0">
            <p className="text-green-300 font-semibold">W 21-20</p>
            <p>Result</p>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0  border-b border-white/10  min-h-min flex lg:hidden gap-4  flex-col justify-center items-center p-6">
        <div className="flex items-center justify-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white"></div>
          <div className="flex flex-col items-center flex-shrink-0">
            <p className="font-semibold">jamiezombie</p>
            <p>Playstation 5</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center flex-shrink-0">
              <p className="font-semibold">NFL Teams</p>
              <p>Game Type</p>
            </div>
            <div className="flex  flex-col items-center flex-shrink-0">
              <p className="font-semibold">11:16PM</p>
              <p>Feb 10th, 2023</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center flex-shrink-0">
              <p className="font-semibold">12.25 USD</p>
              <p>Prize</p>
            </div>
            <div className="flex flex-col items-center flex-shrink-0">
              <p className="text-green-300 font-semibold">W 21-20</p>
              <p>Result</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
