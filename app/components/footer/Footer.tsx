"use client";

import Image from "next/image";
import facebook from "../../../public/footer/facebook.png";
import twitter from "../../../public/footer/twitter.png";
import instagram from "../../../public/footer/instagram.png";
import logo from "../../../public/logo.png";

import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";

const Footer = () => {
  const [isOpenCompany, setIsOpenCompany] = useState(false);
  const toggleDropdownCompany = () => {
    setIsOpenCompany(!isOpenCompany);
  };
  const [isOpenContact, setIsOpenContact] = useState(false);
  const toggleDropdownContact = () => {
    setIsOpenContact(!isOpenContact);
  };
  const [isOpenMeet, setIsOpenMeet] = useState(false);
  const toggleDropdownMeet = () => {
    setIsOpenMeet(!isOpenMeet);
  };

  return (
    <section id="footer">
      <div className="grid grid-cols-12 mx-[10%] my-[5%] ">
        <div
          className="flex flex-col col-span-6 justify-start gap-10
        max-[1024px]:col-span-12"
        >
          <div className="flex flex-row gap-5 justify-start items-center">
            <Image
              src={logo}
              width={128}
              height={128}
              alt={"logo"}
              placeholder="blur"
              className="object-cover h-[40px] w-[40px]"
            />
            <p className="text-[#222831] font-extrabold text-[20px]">Travlog</p>
          </div>
          <span
            className="font-normal text-[1.3rem] text-[#191825]/[50%]
                  max-[1300px]:text-[1.1rem]
                  max-[1024px]:text-[1.4rem]
                  max-[555px]:text-[1.1rem]
                  "
          >
            Contrary to popular belief, Lorem Ipsum is not simply
            <br className="flex max-[1024px]:hidden" /> random text. It has
            roots in a piece of classical Latin
            <br className="flex max-[1024px]:hidden" /> literature from 45 BC.
          </span>
          <div className="flex flex-row gap-5">
            <Image
              src={facebook}
              width={128}
              height={128}
              alt={"facebook"}
              placeholder="blur"
              className="object-cover h-[32px] w-[32px] cursor-pointer"
            />
            <Image
              src={twitter}
              width={128}
              height={128}
              alt={"twitter"}
              placeholder="blur"
              className="object-cover h-[32px] w-[32px] cursor-pointer"
            />
            <Image
              src={instagram}
              width={128}
              height={128}
              alt={"instagram"}
              placeholder="blur"
              className="object-cover h-[32px] w-[32px] cursor-pointer"
            />
          </div>
        </div>
        {/* Mobile dropdown */}
        <div
          className="hidden flex-col col-span-6 justify-between gap-5
          max-[1024px]:col-span-12 max-[1024px]:mt-[5%] max-[769px]:flex"
        >
          <div
            className={`flex justify-between items-center w-full h-[5rem]
            `}
            onClick={toggleDropdownCompany}
          >
            <p className="text-[#222831] font-extrabold text-[20px]">Company</p>
            <IoIosArrowDropdown className={`text-[#292D32] w-[24px] h-[24px]
            ${isOpenCompany && ('rotate-180')}`} />
            
          </div>
          {isOpenCompany && (
              <>
                <span
                  className="font-normal text-[1.1rem] text-[#191825]/[75%]
                  "
                >
                  About
                </span>
                <span
                  className="font-normal text-[1.1rem] text-[#191825]/[75%]
                  "
                >
                  Career
                </span>
                <span
                  className="font-normal text-[1.1rem] text-[#191825]/[75%]
                  "
                >
                  Mobile
                </span>
              </>
            )}
          <div className="flex justify-between items-center w-full h-[5rem]"
          onClick={toggleDropdownContact}>
            <p className="text-[#222831] font-extrabold text-[20px]">Contact</p>
            <IoIosArrowDropdown className={`text-[#292D32] w-[24px] h-[24px]
            ${isOpenContact && ('rotate-180')}`} />
          </div>
          {isOpenContact && (
              <>
                <span
                  className="font-normal text-[1.1rem] text-[#191825]/[75%]
                  "
                >
                  Why Travlog?
                </span>
                <span
                  className="font-normal text-[1.1rem] text-[#191825]/[75%]
                  "
                >
                  Partner with us
                </span>
                <span
                  className="font-normal text-[1.1rem] text-[#191825]/[75%]
                  "
                >
                  FAQ’s
                </span>
                <span
                  className="font-normal text-[1.1rem] text-[#191825]/[75%]
                  "
                >
                  Blog
                </span>
              </>
            )}
          <div className="flex justify-between items-center w-full h-[5rem]"
          onClick={toggleDropdownMeet}>
            <p className="text-[#222831] font-extrabold text-[20px]">Meet Us</p>
            <IoIosArrowDropdown className={`text-[#292D32] w-[24px] h-[24px]
            ${isOpenMeet && ('rotate-180')}`} />
          </div>
          {isOpenMeet && (
              <>
                <span
                  className="font-normal text-[1.1rem] text-[#191825]/[75%]
                  "
                >
                  +00 92 1234 56789
                </span>
                <span
                  className="font-normal text-[1.1rem] text-[#191825]/[75%]
                  "
                >
                  info@travlog.com
                </span>
                <span
                  className="font-normal text-[1.1rem] text-[#191825]/[75%]
                  "
                >
                  205. R Street, New York
                </span>
                <span
                  className="font-normal text-[1.1rem] text-[#191825]/[75%]
                  "
                >
                  BD23200
                </span>
              </>
            )}
        </div>

        {/* Tablet */}
        <div
          className="flex flex-row col-span-6 justify-between gap-10
          max-[1024px]:col-span-12 max-[1024px]:mt-[5%]
           max-[769px]:hidden"
        >
          <div className="flex flex-col gap-10">
            <p className="text-[#222831] font-extrabold text-[20px]">Company</p>
            <span
              className="font-normal text-[1.3rem] text-[#191825]/[75%]
                  max-[1300px]:text-[1.1rem]
                  max-[1140px]:text-[1rem]
                  max-[555px]:text-[1.1rem]
                  "
            >
              About
            </span>
            <span
              className="font-normal text-[1.3rem] text-[#191825]/[75%]
                  max-[1300px]:text-[1.1rem]
                  max-[1140px]:text-[1rem]
                  max-[555px]:text-[1.1rem]
                  "
            >
              Career
            </span>
            <span
              className="font-normal text-[1.3rem] text-[#191825]/[75%]
                  max-[1300px]:text-[1.1rem]
                  max-[1140px]:text-[1rem]
                  max-[555px]:text-[1.1rem]
                  "
            >
              Mobile
            </span>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[#222831] font-extrabold text-[20px]">Contact</p>
            <span
              className="font-normal text-[1.3rem] text-[#191825]/[75%]
                  max-[1300px]:text-[1.1rem]
                  max-[1140px]:text-[1rem]
                  max-[555px]:text-[1.1rem]
                  "
            >
              Why Travlog?
            </span>
            <span
              className="font-normal text-[1.3rem] text-[#191825]/[75%]
                  max-[1300px]:text-[1.1rem]
                  max-[1140px]:text-[1rem]
                  max-[555px]:text-[1.1rem]
                  "
            >
              Partner with us
            </span>
            <span
              className="font-normal text-[1.3rem] text-[#191825]/[75%]
                  max-[1300px]:text-[1.1rem]
                  max-[1140px]:text-[1rem]
                  max-[555px]:text-[1.1rem]
                  "
            >
              FAQ's
            </span>
            <span
              className="font-normal text-[1.3rem] text-[#191825]/[75%]
                  max-[1300px]:text-[1.1rem]
                  max-[1140px]:text-[1rem]
                  max-[555px]:text-[1.1rem]
                  "
            >
              Blog
            </span>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[#222831] font-extrabold text-[20px]">Meet Us</p>
            <span
              className="font-normal text-[1.3rem] text-[#191825]/[75%]
                  max-[1300px]:text-[1.1rem]
                  max-[1140px]:text-[1rem]
                  max-[555px]:text-[1.1rem]
                  "
            >
              +00 92 1234 56789
            </span>
            <span
              className="font-normal text-[1.3rem] text-[#191825]/[75%]
                  max-[1300px]:text-[1.1rem]
                  max-[1140px]:text-[1rem]
                  max-[555px]:text-[1.1rem]
                  "
            >
              info@travlog.com
            </span>
            <span
              className="font-normal text-[1.3rem] text-[#191825]/[75%]
                  max-[1300px]:text-[1.1rem]
                  max-[1140px]:text-[1rem]
                  max-[555px]:text-[1.1rem]
                  "
            >
              205. R Street, New York
            </span>
            <span
              className="font-normal text-[1.3rem] text-[#191825]/[75%]
                  max-[1300px]:text-[1.1rem]
                  max-[1140px]:text-[1rem]
                  max-[555px]:text-[1.1rem]
                  "
            >
              BD23200
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
