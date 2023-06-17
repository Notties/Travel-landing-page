import Image from "next/image";

import tour from "../../../public/services/tour.png";
import booking from "../../../public/services/booking.png";
import weather from "../../../public/services/weather.png";

const Services = () => {
  return (
    <section
      id="services"
      className="overflow-hidden
    max-[1024px]:overflow-visible
    "
    >
      <div
        className="grid grid-cols-5 grid-rows-5 mx-[10%] my-[4%]
      "
      >
        {/* Services */}
        <div
          className="col-span-2 row-span-5 w-full h-full
        max-[1024px]:col-span-5
        max-[1024px]:row-span-1
        "
        >
          <div
            className="flex flex-col justify-center items-start h-full gap-3
          max-[1024px]:items-center
          "
          >
            <span
              className="font-bold text-[#F85E9F] text-[1.8rem] tracking-[0.3rem]
            max-[1170px]:text-[1.6rem]
            max-[555px]:text-[1.2rem]
            "
            >
              SERVICES
            </span>
            <span
              className="font-bold text-[#191825] text-[3.4rem] text-start
            max-[1329px]:text-[3rem]
            max-[1190px]:text-[2.7rem]
            max-[1170px]:text-[2.5rem]
            max-[1024px]:text-center
            max-[695px]:text-[2rem]
            max-[555px]:text-[1.5rem]
            "
            >
              Our top value <br className="flex max-[1024px]:hidden" />
              categories
              <br className="hidden max-[430px]:flex" /> for you
            </span>
          </div>
        </div>
        {/* Card */}
        <div
          className="col-span-3 row-span-5 w-full h-full gap-10
        flex justify-start items-center 
        max-[1024px]:col-span-5
        max-[1024px]:row-span-4
        max-[1024px]:flex-row
        max-[1024px]:justify-center
        max-[1024px]:mt-5
        max-[730px]:flex-col
        max-[730px]:mt-0
        "
        >
          <div
            className="relative
          max-[1024px]:flex
          max-[730px]:w-full
          "
          >
            <div
              className="bg-white h-[550px] w-[400px] border-[1px] border-[#191825]/[10%] 
              rounded-[2.7rem] transition-all duration-300 flex justify-center items-center 
              gap-7
              flex-col text-center
              hover:border-transparent
              hover:drop-shadow-2xl
              max-[1024px]:w-[250px] max-[1024px]:h-[400px]
              max-[885px]:w-[230px] max-[885px]:h-[375px]
              max-[805px]:w-[200px] max-[805px]:h-[350px]
              max-[730px]:w-full
              max-[1024px]:rounded-[1.5rem]
              "
            >
              <Image
                  src={tour}
                  width={128}
                  height={128}
                  alt={"tour"}
                  className="mt-[-2rem] mb-[4rem] w-[64px] h-[64px]
                  max-[1024px]:mb-0
                  max-[1024px]:mt-0
                  "
                />
              <span className="font-semibold text-[2rem] text-[#191825]
              max-[1024px]:text-[1.5rem]
              ">Best Tour Guide</span>
              <span className="font-normal text-[1.3rem] text-[#191825]/[50%]
              max-[1024px]:text-[1rem]
              ">
                What looked like a small <br /> patch of purple grass,<br /> above five feet.
              </span>
            </div>
          </div>
          <div
            className="relative
          max-[1024px]:flex
          max-[730px]:w-full
          "
          >
            <div
              className="bg-white h-[550px] w-[400px] border-[1px]
              rounded-[2.7rem] transition-all duration-300 flex justify-center items-center 
              gap-7
              flex-col text-center border-transparent drop-shadow-2xl
              max-[1024px]:w-[250px] max-[1024px]:h-[400px]
              max-[885px]:w-[230px] max-[885px]:h-[375px]
              max-[805px]:w-[200px] max-[805px]:h-[350px]
              max-[730px]:w-full
              max-[1024px]:rounded-[1.5rem]
              "
            >
              <Image
                  src={booking}
                  width={128}
                  height={128}
                  alt={"tour"}
                  className="mt-[-2rem] mb-[4rem] w-[64px] h-[64px]
                  max-[1024px]:mb-0
                  max-[1024px]:mt-0
                  "
                />
              <span className="font-semibold text-[2rem] text-[#191825]
              max-[1024px]:text-[1.5rem]
              ">Easy Booking</span>
              <span className="font-normal text-[1.3rem] text-[#191825]/[50%]
              max-[1024px]:text-[1rem]
              ">
                Square, was moving <br />across the sand in their<br /> direction.
              </span>
            </div>
          </div>
          <div
            className="relative
          max-[1024px]:flex
          max-[730px]:w-full
          "
          >
            <div
              className="bg-white h-[550px] w-[400px] border-[1px] border-[#191825]/[10%] 
              rounded-[2.7rem] transition-all duration-300 flex justify-center items-center 
              gap-7
              flex-col text-center
              hover:border-transparent
              hover:drop-shadow-2xl
              max-[1024px]:w-[250px] max-[1024px]:h-[400px]
              max-[885px]:w-[230px] max-[885px]:h-[375px]
              max-[805px]:w-[200px] max-[805px]:h-[350px]
              max-[730px]:w-full
              max-[1024px]:rounded-[1.5rem]
              "
            >
              <Image
                  src={weather}
                  width={128}
                  height={128}
                  alt={"tour"}
                  className="mt-[-2rem] mb-[4rem] w-[64px] h-[64px]
                  max-[1024px]:mb-0
                  max-[1024px]:mt-0
                  "
                />
              <span className="font-semibold text-[2rem] text-[#191825]
              max-[1024px]:text-[1.5rem]
              ">Weather Forecast</span>
              <span className="font-normal text-[1.3rem] text-[#191825]/[50%]
              max-[1024px]:text-[1rem]
              ">
                What looked like a small<br/> patch of purple grass,<br/> above five feet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
