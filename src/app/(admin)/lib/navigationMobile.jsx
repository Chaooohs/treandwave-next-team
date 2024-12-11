'use client'
import { useState } from "react";
import Link from "next/link";
import BurgerIcon from '/public/image/svg/burger.svg';
import CloseIcon from '/public/image/svg/close.svg';
import AdminTitle from "./title";


export default function NavigationMobile({ navLinks }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute mob:block hidden top-0 w-full ">
      <div className="relative">
        <div className=" bg-gray-100 p-2 w-14">
          <button
              className="p-2 text-gray-800 "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <BurgerIcon/>
            </button>
        </div>

      { isMenuOpen && 
      <div className="absolute top-0 left-0 w-full bg-white z-30 pt-3 pb-10 shadow-md">
        <div className="w-ful flex justify-center items-center">
          <AdminTitle text={'Aдмін панель'}/>
        </div>
        <nav className="flex flex-col gap-5 pl-5">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className="w-full border-b border-white "
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
          <button className="absolute top-2 justify-center items-center right-5 w-10 h-10 flex border border-blue-600 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon/>
          </button>
        </nav>
      </div>
      }
      </div>
  </div>
  );
}