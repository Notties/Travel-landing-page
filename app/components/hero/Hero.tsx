import Image from "next/image";
import p1 from "../../../public/hero/place1.png";
import p2 from "../../../public/hero/place2.png";
import p3 from "../../../public/hero/place3.png";
import layer from "../../../public/hero/layer.png";

export const Hero = async () => {
  return (
    <section id="#" className="">
      <div
        className="mx-[10%] my-[2%]
      grid grid-cols-5
      max-[1060px]:mx-[3%]
      max-[790px]:grid-cols-6
      "
      >
        <div
          className="col-span-2 my-[15%]
          max-[1060px]:col-span-2.5
          max-[790px]:col-span-3
          max-[640px]:col-span-6
        "
        >
          <div className="flex flex-col gap-10">
            <button className="btn-light flex flex-row gap-3.5">
              <p className="mt-0.5 font-semibold text-[#F85E9F]">
                Explore the world!
              </p>
              <Image
                src={"/icons/work.png"}
                width={24}
                height={24}
                alt={"work"}
              />
            </button>
            <span
              className="font-bold text-[6.5rem] leading-tight
              max-[1675px]:text-[4.5rem]
              max-[1170px]:text-[3.5rem]
            "
            >
              Travel{" "}
              {
                <>
                  <span
                    className="font-bold text-[6.5rem] text-[#F85E9F]
                    max-[1675px]:text-[4.5rem]
                    max-[1170px]:text-[3.5rem]
                  "
                  >
                    top <br /> destination
                  </span>
                </>
              }
              <br />
              of the world
            </span>
            <p
              className="text-[#191825]/[50%] text-xl
              max-[1325px]:text-[1rem]
            "
            >
              We always make our customer happy by providing{" "}
              <br
                className="
              max-[890px]:hidden
              max-[640px]:flex
              max-[360px]:hidden
              "
              />
              as many choices as possible
            </p>
            <div
              className="flex flex-row gap-5
            max-[880px]:gap-3
            max-[880px]:bottom-[20%]
            max-[880px]:
            "
            >
              <button
                className="btn
              max-[880px]:px-6
              max-[640px]:px-7
              "
              >
                Get Started
              </button>
              <button
                className="btn-sec flex flex-row gap-2
              max-[880px]:px-6
              max-[640px]:px-7
              "
              >
                <Image
                  src={"/icons/play-circle.png"}
                  width={24}
                  height={24}
                  alt={"play-circle"}
                />
                <p className="mt-0.5 font-semibold">Watch Demo</p>
              </button>
            </div>
          </div>
        </div>

        {/* images */}
        <div
          className="col-span-3
          max-[1060px]:col-span-2.5
          max-[790px]:col-span-3
          max-[640px]:hidden
        "
        >
          <div className="flex justify-center">
            <div className="absolute -z-10">
              <Image
                src={layer}
                width={872}
                height={387}
                alt={"layer"}
                priority
              />
            </div>
          </div>
          <div
            className="grid h-auto grid-cols-2 gap-10 z-10 mt-[10%] mx-[10%]
            max-[1060px]:my-[10%]
            max-[1060px]:mx-[5%]
            max-[790px]:gap-5
            max-[790px]:mt-[30%]
          "
          >
            <div
              className="grid justify-center gap-5
              max-[790px]:gap-2
              "
            >
              <Image
                src={p1}
                width={372}
                height={400}
                alt={"place1"}
                placeholder="blur"
                className="scale-95 rounded-[12%] transition-all duration-300 
                hover:shadow-2xl hover:scale-100 z-10"
              />
              <div className="relative w-0 h-0">
                <button
                  className="bg-[#F85E9F] w-[64px] h-[64px] rounded-[50%]
                absolute -top-20 -left-7 flex justify-center transition-all duration-300
                hover:shadow-lg z-10
                max-[1060px]:w-[48px]
                max-[1060px]:h-[48px]
                max-[1060px]:-top-14
                max-[1060px]:-left-
                max-[790px]:w-[32px]
                max-[790px]:h-[32px]
                max-[790px]:-top-9
                max-[790px]:-left-4
              "
                >
                  <Image
                    src={"/hero/nav.png"}
                    width={64}
                    height={64}
                    alt={"nav"}
                    className="h-full w-full p-[23%] "
                  />
                </button>
              </div>
              <Image
                src={p2}
                width={372}
                height={400}
                alt={"place1"}
                placeholder="blur"
                className="scale-95 rounded-[12%] transition-all duration-300 
                hover:shadow-2xl hover:scale-100 z-10"
              />
            </div>
            <div className="grid items-center">
              <Image
                src={p3}
                width={372}
                height={400}
                alt={"place3"}
                placeholder="blur"
                className="mt-[30%] scale-95 rounded-[12%] transition-all duration-300 
                hover:shadow-2xl hover:scale-100 z-10"
              />
              <div className="relative w-0 h-0">
                <div className="absolute w-[12rem] -top-[16rem] left-[17rem] z-10 transition-all
                max-[1555px]:-top-[14rem] max-[1555px]:left-[13rem]
                max-[1250px]:-top-[11rem] max-[1250px]:left-[9rem]
                max-[1060px]:left-[7rem]
                max-[915px]:left-[6rem]
                max-[790px]:-top-[1rem] max-[790px]:-left-[8rem]
                ">
                  <button className="btn-light flex flex-row gap-3.5 ">
                    <Image
                      src={"/hero/map.png"}
                      width={24}
                      height={24}
                      alt={"map"}
                    />
                    <p className="mt-0.5 font-semibold ">
                      Top places
                    </p>
                  </button>
                </div>

                <button
                  className="bg-[#FF5722] w-[64px] h-[64px] rounded-[50%]
                absolute -top-16 left-32 flex justify-center transition-all duration-300
                hover:shadow-lg z-10
                max-[1060px]:w-[48px]
                max-[1060px]:h-[48px]
                max-[1060px]:-top-14
                max-[1060px]:-left-
                max-[790px]:w-[32px]
                max-[790px]:h-[32px]
                max-[790px]:-top-9
                max-[790px]:left-16
              "
                >
                  <Image
                    src={"/hero/addfriend.png"}
                    width={64}
                    height={64}
                    alt={"addfriend"}
                    className="h-full w-full p-[23%] "
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
