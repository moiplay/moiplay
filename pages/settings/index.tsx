import React from "react";

const Settings = () => {
  return (
    <div className="w-full">
      <div className="z-10 sticky bg-[#121212]  top-0">
        <div className="w-full flex items-center px-4  overflow-auto flex-row h-20  gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              setActive(true);
            }}
            className="ml-auto h-[3rem] bg-violet-500  flex-shrink-0 items-center justify-center flex text-sm font-semibold px-12 bg-black/50 rounded-lg"
          >
            <svg
              className="w-4 h-4 mr-2 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            Profile
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
              viewBox="0 0 448 512"
            >
              <path d="M224 32C135.6 32 64 103.6 64 192v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V192C32 86 118 0 224 0S416 86 416 192v16c0 61.9-50.1 112-112 112H240 224 208c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32h32c44.2 0 80-35.8 80-80V192c0-88.4-71.6-160-160-160zM96 192c0-70.7 57.3-128 128-128s128 57.3 128 128c0 13.9-2.2 27.3-6.3 39.8C337.4 246.3 321.8 256 304 256h-8.6c-11.1-19.1-31.7-32-55.4-32H208c-35.3 0-64 28.7-64 64c0 1.4 0 2.7 .1 4C114.8 268.6 96 232.5 96 192zM224 352h16 64 9.6C387.8 352 448 412.2 448 486.4c0 14.1-11.5 25.6-25.6 25.6H25.6C11.5 512 0 500.5 0 486.4C0 412.2 60.2 352 134.4 352H208h16z" />
            </svg>
            Gamertags
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setGameType(true);
            }}
            className=" h-[3rem]  flex-shrink-0 text-sm items-center justify-center flex font-semibold px-12 bg-black/50 rounded-lg"
          >
            <svg
              className="w-4 h-4 fill-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
            </svg>
            Notifications
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
              <path d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
            </svg>
            Verification
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFilterGames(true);
            }}
            className=" h-[3rem]  flex-shrink-0 flex items-center justify-center text-sm px-12 font-semibold bg-black/50 rounded-lg"
          >
            <svg
              className="w-5 h-5 fill-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
            </svg>
            Download Data
          </button>
        </div>
      </div>
      <div className="p-4 w-full flex max-w-4xl mx-auto h-full sm:grid-cols-2 gap-6 flex-col">
        <p className="font-semibold text-lg">Username</p>

        <input
          value="woolybagel"
          className="w-full placeholder-white rounded-lg h-20 bg-black p-6"
        ></input>
        <p className="font-semibold text-lg">About Me</p>
        <textarea className="w-full aspect-video rounded-lg bg-black p-6"></textarea>
      </div>
    </div>
  );
};

export default Settings;
