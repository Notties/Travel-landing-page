import Image from "next/image";
import discounted from "../../../public/travel-point/discounted.png";

const Travel = () => {
  return (
    <section id="travel" className="">
      <div className="grid grid-cols-10 mr-[5%] 
      max-[1024px]:mx-[5%] 
      ">
        {/* images */}
        <div className="flex col-span-6 h-full w-full
        max-[1024px]:col-span-10 
        ">
          <div className="my-[10%] w-full
          max-[1024px]:my-0
          ">
            <Image
              src={discounted}
              width={5000}
              height={5000}
              alt={"discounted"}
              placeholder="blur"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>

        {/* TRAVEL POINT */}
        <div
          className="my-[15%] flex flex-col col-span-4 w-full justify-start
        max-[1024px]:col-span-10 max-[1024px]:my-0
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
            TRAVEL POINT
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
            We helping you find your dream location
          </span>
          <span
            className="font-normal text-[1.2rem] text-[#191825]/[50%]
            mb-[10%] mt-[5%]
            max-[1250px]:text-[1.1rem]
            max-[1024px]:text-center
            "
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of<br className="hidden max-[1024px]:flex"/> classical Latin literature from 45 BC.
          </span>

          {/* Card */}
          <div className="grid grid-cols-2 h-full items-center gap-5
          max-[1024px]:h-[300px]
          max-[730px]:grid-cols-1
          max-[730px]:h-[800px]
          ">
            <div
              className="bg-white h-full w-full border-[1px] border-[#191825]/[10%] 
              rounded-[2rem] transition-all duration-300 flex justify-center items-center 
              gap-3
              flex-col text-center
              hover:border-transparent
              hover:drop-shadow-2xl

              "
            >
              <span
                className="font-semibold text-[2rem] text-[#FF5722]
              max-[1320px]:text-[1.5rem]
              max-[1024px]:text-[2rem]
              max-[1024px]:font-extrabold
              "
              >
                500+
              </span>
              <span
                className="font-medium text-[1.3rem] text-[#191825]
              max-[1320px]:text-[1rem]
              max-[1024px]:text-[1.3rem]
              "
              >
                Holiday Package
              </span>
            </div>
            <div
              className="bg-white h-full w-full border-[1px] border-[#191825]/[10%] 
              rounded-[2rem] transition-all duration-300 flex justify-center items-center 
              gap-3
              flex-col text-center
              hover:border-transparent
              hover:drop-shadow-2xl
              "
            >
              <span
                className="font-semibold text-[2rem] text-[#FF5722]
              max-[1320px]:text-[1.5rem]
              max-[1024px]:text-[2rem]
              max-[1024px]:font-extrabold
              "
              >
                100
              </span>
              <span
                className="font-medium text-[1.3rem] text-[#191825]
              max-[1320px]:text-[1rem]
              max-[1024px]:text-[1.3rem]
              "
              >
                Luxury Hotel
              </span>
            </div>

            <div
              className="bg-white h-full w-full border-[1px] border-[#191825]/[10%] 
              rounded-[2rem] transition-all duration-300 flex justify-center items-center 
              gap-3
              flex-col text-center
              hover:border-transparent
              hover:drop-shadow-2xl
              "
            >
              <span
                className="font-semibold text-[2rem] text-[#FF5722]
                max-[1320px]:text-[1.5rem]
                max-[1024px]:text-[2rem]
                max-[1024px]:font-extrabold
              "
              >
                7
              </span>
              <span
                className="font-medium text-[1.3rem] text-[#191825]
              max-[1320px]:text-[1rem]
              max-[1024px]:text-[1.3rem]
              "
              >
                Premium Airlines
              </span>
            </div>
            <div
              className="bg-white h-full w-full border-[1px] border-[#191825]/[10%] 
              rounded-[2rem] transition-all duration-300 flex justify-center items-center 
              gap-3
              flex-col text-center
              hover:border-transparent
              hover:drop-shadow-2xl
              "
            >
              <span
                className="font-semibold text-[2rem] text-[#FF5722]
              max-[1320px]:text-[1.5rem]
              max-[1024px]:text-[2rem]
              max-[1024px]:font-extrabold
              "
              >
                2k+
              </span>
              <span
                className="font-medium text-[1.3rem] text-[#191825]
              max-[1320px]:text-[1rem]
              max-[1024px]:text-[1.3rem]
              "
              >
                Happy Customer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
