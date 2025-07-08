"use client";

import { useState, type JSX } from "react";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
  const { theme, toogleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`flex items-center justify-between p-2 w-full h-14 ${theme === "light" ? "bg-white text-[#4D4D4D]" : "bg-black shadow-sm shadow-white backdrop-blur-md text-white"} fixed top-0 shadow-md z-50`}>
        <div className="cursor-pointer  lg:ml-16 flex items-center justify-center">
          <img src="/images/personal.png" className={`w-10 ${theme === "light" ? "block" : "hidden"} `} alt="Logo" />
          <img src="/images/personal_white.png" className={`w-10  ${theme === "light" ? "hidden" : "block"}`} alt="Logo white" />
          <p className="mb-1 font-bold">LAZZGHIF</p>
        </div>
        <div className="gap-1 mb-2 md:hidden lg:hidden cursor-pointer mr-3 flex flex-col" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
        </div>

        <div className="items-center hidden md:flex lg:flex justify-center mr-16">
          <ul className="flex items-center justify-center gap-10">
            <li className="cursor-pointer hover:underline text-md">Home</li>
            <li className="cursor-pointer hover:underline text-md">Features</li>
            <li onClick={() => document.getElementById("our-partners")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer hover:underline text-md">
              Partner
            </li>
            <li className="cursor-pointer hover:underline text-md">Blog</li>
            <li className="cursor-pointer hover:underline text-md">Pricing</li>
          </ul>
          <button onClick={toogleTheme} className="mt-2 mx-4 px-4 py-2 transition-all duration-300 ease-in-out hidden  items-center justify-center text-[#4D4D4D] rounded">
            <div className="hidden">{theme}</div>
            {theme === "light" ? <FontAwesomeIcon icon={faMoon} className="mr-2 text-3xl mb-2 opacity-80 hover:opacity-90" /> : <FontAwesomeIcon icon={faSun} className="mr-2 text-3xl mb-2" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="w-full h-56 bg-white shadow-md z-50 fixed flex flex-col gap-1 items-center justify-center top-14">
          <Link to={"/"} className=" cursor-pointer w-full h-full flex items-center justify-center hover:bg-gray-100">
            Home
          </Link>
          <Link to={"/"} className=" cursor-pointer w-full h-full flex items-center justify-center hover:bg-gray-100">
            Features
          </Link>
          <div onClick={() => document.getElementById("our-partners")?.scrollIntoView({ behavior: "smooth" })} className=" cursor-pointer w-full h-full flex items-center justify-center hover:bg-gray-100">
            Partner
          </div>
          <Link to={"/"} className=" cursor-pointer w-full h-full flex items-center justify-center hover:bg-gray-100">
            Blog
          </Link>
          <Link to={"/"} className=" cursor-pointer w-full h-full flex items-center justify-center hover:bg-gray-100">
            Pricing
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
