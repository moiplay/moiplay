import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Sidebar, { SideBarLink } from "../Sidebar";

const ProfileSidebar = ({ active, setActive }: any) => {
  const router = useRouter();

  React.useEffect(() => {
    const closeSidebar = (e: any) => {
      setActive(false);
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
    };

    router.events.on("routeChangeComplete", closeSidebar);
  }, []);
  return (
    <Sidebar active={active} setActive={setActive} padding="p-6">
      <div className="h-2/3 flex-shrink-0">
        <div className=" flex flex-row items-center gap-4">
          <Link
            href="/profile/5555"
            className="flex flex-row items-center gap-4 hover:text-white"
          >
            <div className="w-14 h-14 rounded-full bg-white"></div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">woolybagel</p>
              <p className="text-white/80 hover:text-white">View Profile</p>
            </div>
          </Link>
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
        <div className="my-auto h-min pt-3">
          <SideBarLink href="/create">
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M464 0c-13.3 0-24 10.7-24 24V56H408c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v32c0 13.3 10.7 24 24 24s24-10.7 24-24V104h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H488V24c0-13.3-10.7-24-24-24zM311.5 133.2c-14.9-6.9-32.1-6.9-47 0L45.9 234.2C37.4 238.1 32 246.6 32 256s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-218.6-101zm13.4 274.7c-23.4 10.8-50.4 10.8-73.8 0l-152-70.2L45.9 362.2C37.4 366.1 32 374.6 32 384s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-53.2-24.6-152 70.2z" />
            </svg>
            Create
          </SideBarLink>
          <SideBarLink href="/activity">
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M319.1 0c14.8-.4 27.9 9.3 31.8 23.6l74 271.2 17.7-35.4c10.8-21.7 33-35.4 57.2-35.4H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H499.8L444.6 398.3c-5.9 11.9-18.6 18.8-31.8 17.5s-24.2-10.6-27.7-23.4L323.7 167.3 255.3 486.7c-3.1 14.4-15.5 24.8-30.2 25.3s-27.8-9.1-31.8-23.2L135.9 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H135.9c28.6 0 53.7 18.9 61.5 46.4L219.6 348 288.7 25.3C291.8 10.9 304.4 .4 319.1 0z" />
            </svg>
            Activity
          </SideBarLink>
          <SideBarLink href="/support">
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M534 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L525.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L406.3 64.5c-2.7-.3-5.5-.5-8.3-.5H286c-37.1 0-67.6 28-71.6 64H214V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H454c44.2 0 80 35.8 80 80v8zM326 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L89.5 255.2 16.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H374c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H422c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z" />
            </svg>
            Support
          </SideBarLink>

          <SideBarLink href="/practice">
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96zm22.1 254.4c14.9 4.8 30.7-1.8 37.9-15c7.4-13.5 4.2-30.8-8.4-40.6l-246-208.3c-40.6-34.1-101.2-28.8-135.2 11.8S-6.3 327.5 34.3 361.6c9.2 7.7 19.9 13.8 32 17.7l307.8 99.1zM128 288c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
            </svg>
            Practice
          </SideBarLink>
          <SideBarLink href="/settings">
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z" />
            </svg>
            Settings
          </SideBarLink>
          <SideBarLink href="/signout">
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M154.2 352c3.8-29.6 5.8-62.1 5.8-96c0-18.3-.6-36.1-1.7-53.4c12.4 8.3 29.4 7 40.4-4l23.1-23.1c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L233.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L334 299l30.9-82.4 5.1 12.3C385 264.7 419.9 288 458.7 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3l-23.1 23.1c0 0 0 0-.1 .1C141 63.1 112.8 0 80 0C35.8 0 0 114.6 0 256S35.8 512 80 512c25.3 0 47.8-37.5 62.5-96h55.1c19 0 36.2-11.2 43.9-28.5L253 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L187.2 352h-33zM368 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
            </svg>
            Sign Out
          </SideBarLink>
        </div>
      </div>
      <div className="w-full flex-shrink-0   flex items-center">
        <div className="w-full  pt-6">
          <div className="  p-6 flex flex-col gap-3 justify-center bottom-0 border border-white/10 rounded-lg">
            <h3>Available Balance: $226.57</h3>
            <h3>Total Balance: $226.57</h3>
            <div className="flex-row flex pt-3">
              <button className="bg-[#121212] p-4 mr-4 w-full rounded">
                Deposit
              </button>
              <button className="bg-[#121212] p-4 w-full rounded">
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default ProfileSidebar;
