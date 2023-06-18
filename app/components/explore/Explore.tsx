"use client";

import Image, { StaticImageData } from "next/image";
import { JsonExplore } from "../../constants/ExploreData";

import { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

interface ExploreType {
  id: number;
  img?: StaticImageData | string;
  name?: string;
  price?: string;
  location?: string;
  rate?: string;
}

const Explore = () => {
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);

  return (
    <>
      <section id="explore" className="">
        <div className="grid grid-cols-1 grid-rows-6 mx-[10%]
        max-[1024px]:mx-[5%] max-[1024px]:my-[10%]
        max-[1024px]:grid-rows-4       
        max-[730px]:grid-rows-6      
        ">
          {/* Top */}
          <div className="flex row-span-1 h-full w-full
          max-[1024px]:
          max-[1024px]:flex-col
          ">
            <div className="flex justify-center flex-col w-full h-full
            items-start
            max-[1024px]:items-center
            ">
              <span
                className="font-bold text-[#F85E9F] text-[1.8rem] tracking-[0.3rem]
            max-[1170px]:text-[1.6rem]
            max-[555px]:text-[1.2rem]
            "
              >
                TOP DESTINATION
              </span>
              <span
                className="font-bold text-[#191825] text-[3.4rem]
              max-[1329px]:text-[3rem]
              max-[1190px]:text-[2.7rem]
              max-[1170px]:text-[2.5rem]
              max-[1024px]:text-center
              max-[695px]:text-[2rem]
              max-[555px]:text-[1.5rem]
              "
              >
                Explore top destination
              </span>
            </div>
            <div className="flex items-center justify-end w-full h-full gap-10
            max-[1024px]:items-center
            max-[1024px]:justify-center
            max-[730px]:justify-between
            
            ">
              <button
                className="flex w-[100px] h-[100px] rounded-[50%] bg-[#FFFFFF] 
            border-[1px] border-[#191825]/[10%]
            justify-center items-center transition-all duration-300
            hover:bg-[#5D50C6] cursor-pointer
            hover:shadow-2xl
            max-[1024px]:w-[80px] max-[1024px]:h-[80px] max-[1024px]:my-5
            "
                onMouseEnter={() => setArrowLeft(true)}
                onMouseLeave={() => setArrowLeft(false)}
              >
                <HiArrowNarrowLeft
                  className={`w-[24px] h-[24px] ${
                    arrowLeft && `text-[#FFFFFF]`
                  }`}
                />
              </button>
              <button
                className="flex w-[100px] h-[100px] rounded-[50%] bg-[#FFFFFF] 
            border-[1px] border-[#191825]/[10%]
            justify-center items-center transition-all duration-300
            hover:bg-[#5D50C6] cursor-pointer
            hover:shadow-2xl
            max-[1024px]:w-[80px] max-[1024px]:h-[80px] max-[1024px]:my-5
            "
                onMouseEnter={() => setArrowRight(true)}
                onMouseLeave={() => setArrowRight(false)}
              >
                <HiArrowNarrowRight
                  className={`w-[24px] h-[24px] ${
                    arrowRight && `text-[#FFFFFF]`
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Explore */}
          <div
            className="py-[5%] flex row-span-5 h-full w-full
            justify-between gap-10
            max-[1280px]:gap-5
            max-[1024px]:row-span-3
            max-[730px]:row-span-5
            max-[730px]:flex-col
          "
          >
            {JsonExplore.map(
              ({ id, img, name, price, location, rate }: ExploreType) => {
                return (
                  <div
                    key={id}
                    className="bg-white h-[550px] w-[400px] border-[1px] border-[#191825]/[10%] 
                    gap-6
                    rounded-[2.7rem] transition-all duration-300 flex items-center 
                    flex-col justify-start
                    drop-shadow-2xl
                    max-[1024px]:w-[350px] max-[1024px]:h-[550px]
                    max-[950px]:h-[500px]
                    max-[730px]:w-full max-[730px]:h-[550px]
                    
                  "
                  >
                    <div className="h-[60%] w-full">
                      <Image
                        src={img as string}
                        width={3000}
                        height={3000}
                        alt={name as string}
                        placeholder="blur"
                        loading="lazy"
                        className="w-full h-full rounded-t-[2.3rem] object-cover"
                      />
                    </div>
                    <div className="flex justify-between w-full px-[8%]
                    max-[1280px]:flex-col
                    ">
                      <span
                        className="font-bold text-[1.5rem] text-[#191825] w-[55%] flex
                      justify-start
                      max-[1455px]:text-[1.3rem]
                      max-[1280px]:text-[1.2rem]
                      max-[1280px]:order-last
                      max-[1280px]:w-[65%]
                      max-[950px]:text-[1rem]
                      max-[730px]:text-[1.3rem]
                      "
                      >
                        {name}
                      </span>
                      <span
                        className="font-bold text-[1.5rem] text-[#F85E9F]
                      max-[1455px]:text-[1.3rem]
                      max-[950px]:text-[1rem]
                      max-[730px]:text-[1.3rem]
                      "
                      >
                        {price}
                      </span>
                    </div>
                    <div className="flex justify-start w-full px-[8%] mt-[-2%]">
                      <span
                        className="font-normal text-[1.3rem] text-[#191825]/[50%]
                      max-[1455px]:text-[1.3rem]
                      max-[950px]:text-[1rem]
                      max-[730px]:text-[1.3rem]
                      "
                      >
                        {location}
                      </span>
                    </div>
                    <div className="flex justify-start w-full px-[8%] mt-[3%] items-center
                    max-[1024px]:mt-0
                    ">
                      <span
                        className="font-bold text-[1.5rem] text-[#FF5722]
                      max-[1455px]:text-[1.3rem]
                      max-[950px]:text-[1rem]
                      max-[730px]:text-[1.3rem]
                      "
                      >
                        {rate}
                      </span>
                      <AiFillStar className="ml-[2%] text-[#FF5722] text-[1.6rem]
                      max-[1455px]:text-[1.3rem]
                      max-[950px]:text-[1rem]
                      max-[730px]:text-[1.3rem]
                      " />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
