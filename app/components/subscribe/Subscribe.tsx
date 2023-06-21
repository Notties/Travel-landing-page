import Image from "next/image";
import Graphic_Elements from "../../../public/subscribe/Graphic_Elements.png";

import { MdEmail } from "react-icons/md";

const Subscribe = () => {
  return (
    <section id="subscribe" className="max-[769px]:my-[10%]">
      <div className="relative ml-[10%] max-[1024px]:hidden">
        <Image
          src={Graphic_Elements}
          width={5000}
          height={5000}
          alt={"paradise"}
          placeholder="blur"
          priority
          className="object-cover absolute w-[183px] h-[176px]
            "
        />
      </div>
      <div className="grid grid-cols-12 h-[80vh] mx-[10%] my-[5%]
      max-[1024px]:h-[60vh]
      max-[900px]:h-[50vh]
      max-[769px]:h-[60vh]
      ">
        <div
          className="col-span-12 bg-[#FACD49]/[8%] m-[3%] rounded-3xl
        flex justify-center items-center flex-col gap-10
        max-[1024px]:m-0
        max-[1024px]:justify-start"
        >
          <span
            className="font-bold text-[#F85E9F] text-[1.8rem] tracking-[0.3rem]
            max-[1170px]:text-[1.6rem]
            max-[555px]:text-[1.2rem]
            max-[1024px]:text-center
            max-[1024px]:mt-[10%] uppercase
            "
          >
            subscribe to our newsletter
          </span>
          <span
            className="font-bold text-[#191825] text-[3.4rem] text-center
              max-[1475px]:text-[3.1rem]
              max-[1300px]:text-[2.5rem]
              max-[1190px]:text-[2.5rem]
              max-[1170px]:text-[2.3rem]
              max-[1024px]:text-center
              max-[695px]:text-[2rem]
              max-[555px]:text-[1.7rem]
              max-[769px]:mb-[10%]
              "
          >
            Prepare yourself & let’s explore the
            <br className="flex max-[769px]:hidden"/> beauty of the world
          </span>
          <div className="flex justify-between w-full 
          ">
            <div className="flex flex-row mx-[5%] w-full
            max-[769px]:flex-col">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full mr-10">
                <div
                  className="absolute inset-[3.4rem] left-[1rem] flex items-center 
                pl-3 pointer-events-none
                max-[769px]:inset-[1rem]"
                >
                  <MdEmail className="w-[42px] h-[42px] text-[#191825]/[75%]
                  max-[769px]:w-[38px] max-[769px]:h-[38px]" />
                </div>
                <input
                  type="email"
                  className="bg-white text-[#191825]/[75%] rounded-[25px] 
                  block w-full text-2xl p-1 font-medium
                  h-[300%] pl-[6rem] max-[769px]:h-[75px] max-[769px]:text-xl
                  max-[769px]:pl-[5.5rem]
                  "
                  placeholder="Your Email"
                  required
                />
              </div>

              <button
                className="bg-[#5D50C6] w-[235px] h-[300%] rounded-[25px] transition-all duration-300
              text-white text-2xl font-medium hover:shadow-xl
              max-[769px]:mt-[2rem] max-[769px]:w-full
              max-[769px]:h-[75px]
              max-[769px]:text-xl"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
