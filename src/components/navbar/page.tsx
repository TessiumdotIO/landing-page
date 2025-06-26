"use client";

import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
      <nav className="flex items-center justify-between bg-white my-5 mx-5 sm:my-7 sm:mx-10">
        <Image src={"/tessium-logo.svg"} alt="Logo" width={130} height={130} />
        <div>
          <button className="sm:flex hidden items-center gap-1 text-white bg-[#461da1] px-4 py-2 rounded-md hover:bg-[#5a2db6] transition-colors duration-300 cursor-pointer">
            <p>Launch App</p>
            <Rocket size={25} />
          </button>
          <Image
            src={"/menu-icon.svg"}
            alt="menu"
            width={40}
            height={40}
            className="bg-[#461da1] p-2 rounded-sm sm:hidden"
            onClick={() => setShowMenu(true)}
          />
        </div>
      </nav>
      {showMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 bg-transparent backdrop-blur-sm transition-opacity"
          />

          <div className="z-50 w-[70%] max-w-md bg-white px-6 pt-8 shadow-xl absolute top-0 right-0 text-black">
            <div className="mb-4 flex items-center justify-between">
              <div></div>
              <button
                className="rounded-md p-1 text-[#461da1] hover:bg-gray-100 hover:text-gray-500"
                onClick={() => setShowMenu(false)}
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <ul
              onClick={() => setShowMenu(false)}
              className="flex flex-col gap-4 items-end pb-20 text-xl"
            >
              <li className="text-[#461da1] font-bold">
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>Launch App</Link>
              </li>
              <li>
                <Link href={"/"}>Join Waitlist</Link>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/"}>Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
