import React from "react";
import Search from "./Search";
import Link from "next/link";
import {
  MoonIcon,
  ChatBubbleLeftEllipsisIcon,
  BellIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
function Navbar() {
  return (
    <div className="shadow-xl">
      <div className="flex justify-between px-5 py-2">
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1">
            <Link href={"/"} className="flex items-center gap-1">
              <img src="/img/logo.png" alt="" className="h-8 w-8" />
              <span className="font-bold ">McPedia</span>
            </Link>
          </div>
          <div>
            <Search />
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <span
              className="hover:bg-gray-200 p-1 rounded-full delay-200 duration-200"
              title="theme"
            >
              <Link href={""}>
                <MoonIcon className="h-6 w-6" />
              </Link>
            </span>

            <span
              className="hover:bg-gray-200 p-1 rounded-full delay-200 duration-200"
              title="messages"
            >
              <Link href={""}>
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
              </Link>
            </span>
            <span
              className="hover:bg-gray-200 p-1 rounded-full delay-200 duration-200"
              title="notifications"
            >
              <Link href={""}>
                <BellIcon className="h-6 w-6" />
              </Link>
            </span>
            <span
              className="hover:bg-gray-200 p-1 rounded-full delay-200 duration-200"
              title="help"
            >
              <Link href={""} className="style-none">
                <QuestionMarkCircleIcon className="h-6 w-6" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
