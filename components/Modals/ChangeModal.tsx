import React from "react";
import Modal from "../Modal";

const ChangeModal = ({ active, setActive }: any) => {
  return (
    <Modal active={active} setActive={setActive}>
      <div className=" flex items-center p-6 bg-black w-full">
        <p className="flex text-lg items-center font-semibold">Change Mode</p>
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
              document.body.style.paddingInlineEnd = "10px";
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
      <div className="p-6 flex justify-center m-auto flex-col gap-4">
        <button className="w-full h-20 font-semibold bg-black rounded-lg">
          Near Me
        </button>
        <button className="w-full h-20 font-semibold bg-black rounded-lg">
          Global
        </button>
      </div>
    </Modal>
  );
};

export default ChangeModal;
