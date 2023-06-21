"use client";

import Image from "next/image";
import bg from "../../../public/testiminials/bg.png";
import star from "../../../public/testiminials/star.png";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import { JsonTestimonials } from "../../constants/JsonDatas";

const Testiminials = () => {
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);

  const [currentClient, setCurrentClient] = useState(JsonTestimonials);

  const handleNextClient = () => {
    setCurrentClient((prevClients: any) => {
      const nextClients = [...prevClients];
      const firstClient: any = nextClients.shift();
      nextClients.push(firstClient);
      return nextClients;
    });
  };

  const handlePrevClient = () => {
    setCurrentClient((prevClients: any) => {
      const prevClient = prevClients.pop();
      const nextClients = [prevClient, ...prevClients];
      return nextClients;
    });
  };

  return (
    <>
      <section id="testiminials">
        <div className="relative -z-50 max-[695px]:hidden">
          <Image
            src={bg}
            width={5000}
            height={5000}
            alt={"paradise"}
            placeholder="blur"
            priority
            className="object-cover absolute mt-[-29%]
            max-[1495px]:mt-[-24%]
            max-[1024px]:mt-[-17%]
            "
          />
        </div>
        <div
          className="grid grid-cols-12 mx-[5%]
      max-[695px]:col-span-12
      "
        >
          {/* left click */}
          <div
            className="relative self-center col-span-1 justify-start items-center
        max-[1024px]:col-span-2
        max-[695px]:col-span-0 max-[695px]:hidden
        "
          >
            <button
              className="flex w-[100px] h-[100px] rounded-[50%] bg-[#FFFFFF] 
            border-[1px] border-[#191825]/[10%]
            justify-center items-center transition-all duration-300
            hover:bg-[#5D50C6] cursor-pointer
            hover:shadow-2xl
            max-[1024px]:w-[80px] max-[1024px]:h-[80px] 
            "
              onMouseEnter={() => setArrowLeft(true)}
              onMouseLeave={() => setArrowLeft(false)}
              onClick={handlePrevClient}
            >
              <HiArrowNarrowLeft
                className={`w-[24px] h-[24px] ${arrowLeft && `text-[#FFFFFF]`}`}
              />
            </button>
          </div>

          {/* client */}
          <div
            className="flex col-span-10 flex-col
          justify-center items-center gap-7
          max-[1024px]:col-span-8
          max-[695px]:col-span-12
          "
          >
            <span
              className="font-bold text-[#F85E9F] text-[1.8rem] tracking-[0.3rem]
            max-[1170px]:text-[1.6rem]
            max-[555px]:text-[1.2rem]
            max-[1024px]:text-center
            max-[1024px]:mt-[10%]
            "
            >
              TESTIMONIALS
            </span>
            <span
              className="font-bold text-[#191825] text-[3.4rem]
              max-[1475px]:text-[3.1rem]
              max-[1300px]:text-[2.5rem]
              max-[1190px]:text-[2.5rem]
              max-[1170px]:text-[2.3rem]
              max-[1024px]:text-center
              max-[695px]:text-[2rem]
              max-[555px]:text-[1.5rem]
              "
            >
              Trust our clients
            </span>

            {currentClient
              .slice(0, 1)
              .map(({ id, img, name, label, comment, rate }: any, index) => {
                return (
                  <>
                    <Image
                      key={index}
                      src={img}
                      width={1600}
                      height={1600}
                      alt={img as string}
                      placeholder="blur"
                      priority
                      className="object-cover w-[128px] h-[128px] my-[3%]"
                    />
                    <span
                      className="font-bold text-[#FF5722] text-[1.7rem]
                  max-[1329px]:text-[1.5rem]
                  max-[1190px]:text-[1.4rem]
                  max-[1180px]:text-[1.2rem]
                  max-[695px]:text-[1.7rem]
                  max-[555px]:text-[1.5rem]
                  "
                    >
                      {name}{" "}
                      <span
                        className="font-bold text-[#191825]/[75%] text-[1.5rem]
                  max-[1329px]:text-[1.3rem]
                  max-[1190px]:text-[1.2rem]
                  max-[1180px]:text-[1rem]
                  max-[695px]:text-[1.5rem]
                  max-[555px]:text-[1.3rem]
                  "
                      >
                        {" "}
                        / {label}
                      </span>
                    </span>
                    <div className="flex justify-center items-center my-[3%] gap-3">
                      {Array.from({ length: rate as number }).map(
                        (value, index) => (
                          <Image
                            src={star}
                            width={800}
                            height={800}
                            alt={"star"}
                            placeholder="blur"
                            priority
                            className="object-cover w-[32px] h-[32px]"
                          />
                        )
                      )}
                    </div>
                    <span
                      className="font-normal text-[#191825]/[75%] text-[1.5rem] text-center
            max-[1329px]:text-[1.3rem]
            max-[1190px]:text-[1.2rem]
            max-[1180px]:text-[1rem]
            max-[695px]:text-[1.5rem]
            max-[555px]:text-[1.3rem]
                  "
                    >
                      {comment}
                    </span>
                    <div className="flex justify-center items-center my-[3%] gap-3">
                      {currentClient.map((v, index) => (
                        <>
                          <span
                            key={id}
                            className={`${
                              index === id - 1 ? `bg-[#F85E9F]` : `bg-[#F3F3F4]`
                            } w-[24px] h-[24px] rounded-[50%] transition-all duration-500
                            max-[1024px]:w-[18px] max-[1024px]:h-[18px]`}
                          />
                        </>
                      ))}
                    </div>
                  </>
                );
              })}
          </div>

          {/* right click */}
          <div
            className="flex col-span-1 justify-end items-center
        max-[1024px]:col-span-2
        max-[695px]:col-span-12
        max-[695px]:justify-between
        "
          >
            <button
              className="hidden w-[100px] h-[100px] rounded-[50%] bg-[#FFFFFF] 
            border-[1px] border-[#191825]/[10%]
            justify-center items-center transition-all duration-300
            hover:bg-[#5D50C6] cursor-pointer
            hover:shadow-2xl
            max-[1024px]:w-[80px] max-[1024px]:h-[80px]
            max-[695px]:flex
            "
              onMouseEnter={() => setArrowLeft(true)}
              onMouseLeave={() => setArrowLeft(false)}
              onClick={handlePrevClient}
            >
              <HiArrowNarrowLeft
                className={`w-[24px] h-[24px] ${arrowLeft && `text-[#FFFFFF]`}`}
              />
            </button>
            <div>
              <button
                className="flex w-[100px] h-[100px] rounded-[50%] bg-[#FFFFFF] 
            border-[1px] border-[#191825]/[10%]
            justify-center items-center transition-all duration-300
            hover:bg-[#5D50C6] cursor-pointer
            hover:shadow-2xl
            max-[1024px]:w-[80px] max-[1024px]:h-[80px]
            "
                onMouseEnter={() => setArrowRight(true)}
                onMouseLeave={() => setArrowRight(false)}
                onClick={handleNextClient}
              >
                <HiArrowNarrowRight
                  className={`w-[24px] h-[24px] ${
                    arrowRight && `text-[#FFFFFF]`
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testiminials;
