'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.scrollY <= 20);
    };
    window.addEventListener("scroll", scrollHandler);

    // Explicit call so that the navbar gets blurred when component mounts
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className="top-0 sticky
        z-50
      ">
        <nav
          className={`flex flex-row justify-around p-5
          max-[768px]:justify-between
          ${!top && "border-b-[1px] backdrop-blur-lg bg-white/80"}
          `}
        >
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center gap-3 cursor-pointer" onClick={scrollToTop}>
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="logo"
                priority
              />
              <p className="text-[#222831] font-extrabold text-[20px]">
                Travlog
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center
            max-[768px]:hidden
          ">
            <ul className="flex flex-row gap-10">
              <li
                className="
                    cursor-pointer transition-all text-gray-400 font-semibold
                    hover:text-[#222831]"
              >
                <a href="#">Home</a>
              </li>
              <li
                className="
                    cursor-pointer transition-all text-gray-400 font-semibold
                    hover:text-[#222831]"
              >
                <a href="#services">Discover</a>
              </li>
              <li
                className="
                    cursor-pointer transition-all text-gray-400 font-semibold
                    hover:text-[#222831]"
              >
                <a href="#">Special Deals</a>
              </li>
              <li
                className="
                    cursor-pointer transition-all text-gray-400 font-semibold
                    hover:text-[#222831]"
              >
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center gap-5
            max-[768px]:hidden
          ">
            <button className="font-semibold">Log In</button>
            <button className="btn ">Sign Up</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
