import Image from "next/image";
import p1 from "../../../public/hero/place1.png";
import p2 from "../../../public/hero/place2.png";
import p3 from "../../../public/hero/place3.png";
import layer from "../../../public/hero/layer.png";
import tripadvisor from "../../../public/hero/tripadvisor.png";
import Expedia from "../../../public/hero/Expedia.png";
import Booking from "../../../public/hero/Booking.png";
import airbnb from "../../../public/hero/airbnb.png";
import RBITZ from "../../../public/hero/RBITZ.png";

export const Hero = async () => {
  return (
    <section id="#" className="">
      <div
        className="mx-[10%] my-[2%]
      grid grid-cols-5 grid-rows-3 grid-flow-row
      max-[1360px]:mx-[3%]
      max-[1024px]:grid-rows-3
      "
      >
        {/* Get Started */}
        <div
          className="col-span-2 my-[15%] row-span-3 order-1
          max-[1024px]:col-span-5
          max-[1024px]:order-2
          max-[1024px]:row-span-3
          max-[1024px]:my-[5%]
        "
        >
          <div
            className="flex flex-col gap-10
            max-[1024px]:items-center

          "
          >
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
              max-[1024px]:text-[4rem]
              max-[1024px]:text-center
            "
            >
              Travel{" "}
              {
                <>
                  <span
                    className="font-bold text-[6.5rem] text-[#F85E9F]
                    max-[1675px]:text-[4.5rem]
                    max-[1170px]:text-[3.5rem]
                    max-[1024px]:text-[4rem]
                    max-[1024px]:text-center

                  "
                  >
                    top{" "}
                    <br
                      className="flex
                    max-[1024px]:hidden
                    "
                    />{" "}
                    destination
                  </span>
                </>
              }{" "}
              <br
                className="flex
                
              "
              />
              of the world
            </span>
            <p
              className="text-[#191825]/[50%] text-xl
              max-[1325px]:text-[1rem]
              max-[1024px]:text-center
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
            "
            >
              <button
                className="btn
              "
              >
                Get Started
              </button>
              <button
                className="btn-sec flex flex-row gap-2
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
          className="col-span-3 row-span-3 order-2
          max-[1024px]:col-span-5
          max-[1024px]:order-1
          max-[1024px]:row-span-3
        "
        >
          <div className="flex justify-center ">
            <div
              className="absolute -z-10
            max-[1024px]:mx-[5%]
            "
            >
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
            max-[1024px]:my-[10%]
            max-[1024px]:mx-[5%]
            max-[790px]:gap-5
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
                shadow-lg z-10
                max-[1024px]:w-[58px]
                max-[1024px]:h-[58px]
                max-[1024px]:-top-19
                max-[1024px]:-left-4
                max-[620px]:w-[48px]
                max-[620px]:h-[48px]
                max-[620px]:-top-12
                max-[620px]:-left-4
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
                <div
                  className="absolute w-[12rem] -top-[16rem] left-[17rem] z-10 transition-all
                max-[1555px]:-top-[14rem] max-[1555px]:left-[13rem]
                max-[1250px]:-top-[11rem] max-[1250px]:left-[9rem]
                max-[1024px]:left-[16rem] max-[1024px]:-top-[14rem]
                max-[840px]:left-[13rem] max-[840px]:-top-[14rem]
                max-[720px]:left-[11rem] max-[720px]:-top-[13rem]
                max-[670px]:left-[9rem] max-[670px]:-top-[13rem]
                max-[600px]:left-[7rem] max-[600px]:-top-[12rem]
                max-[550px]:left-[5rem] max-[550px]:-top-[11rem]
                max-[500px]:left-[3rem] max-[500px]:-top-[10rem]
                max-[430px]:left-[1rem] max-[430px]:-top-[8rem]
                max-[400px]:-left-[10rem] max-[400px]:-top-[1rem]
                "
                >
                  <button className="btn-light flex flex-row gap-3.5 ">
                    <Image
                      src={"/hero/map.png"}
                      width={24}
                      height={24}
                      alt={"map"}
                    />
                    <p className="mt-0.5 font-semibold ">Top places</p>
                  </button>
                </div>

                <button
                  className="bg-[#FF5722] w-[64px] h-[64px] rounded-[50%]
                absolute -top-16 left-32 flex justify-center transition-all duration-300
                shadow-lg z-10
                max-[1024px]:w-[58px]
                max-[1024px]:h-[58px]
                max-[1024px]:-top-9
                max-[1024px]:left-24
                max-[620px]:w-[48px]
                max-[620px]:h-[48px]
                max-[620px]:-top-7
                max-[620px]:left-16
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
        {/* Partner */}
        <div
          className="my-10 row-span-3 col-span-5 justify-center order-3 h-[160px]
        max-[1024px]:order-3
        "
        >
          <div
            className="flex flex-row w-full h-full justify-between items-center
            max-[1024px]:flex-col
          "
          >
            {/* Tablet & Mobile view */}
            <div className="hidden max-[1024px]:flex max-[1024px]:justify-between max-[1024px]:items-center
            max-[1024px]:h-full max-[1024px]:gap-10 max-[1024px]:w-fit
            max-[475px]:gap-3
            ">
              <Image
                src={tripadvisor}
                width={211}
                height={32}
                alt={"tripadvisor"}
                placeholder="blur"
                className="h-auto max-[640px]:w-[150px] opacity-80 transition-all duration-300 hover:opacity-100
                max-[530px]:w-[130px]
                max-[420px]:w-[100px]
                "
              />
              <Image
                src={Expedia}
                width={113}
                height={32}
                alt={"Expedia"}
                placeholder="blur"
                className="h-auto max-[640px]:w-[90p] opacity-80 transition-all duration-300 hover:opacity-100
                max-[530px]:w-[80px]
                max-4230px]:w-[70px]
                "
              />
              <Image
                src={Booking}
                width={188}
                height={32}
                alt={"Booking"}
                placeholder="blur"
                className="h-auto max-[640px]:w-[160px] opacity-80 transition-all duration-300 hover:opacity-100
                max-[530px]:w-[150px]
                max-[420px]:w-[120px]
                "
              />
            </div>
            <div className="hidden max-[1024px]:flex max-[1024px]:justify-between max-[1024px]:items-center
            max-[1024px]:h-full max-[1024px]:gap-10 max-[1024px]:w-fit
            max-[475px]:gap-3
            ">
              <Image
                src={airbnb}
                width={102}
                height={32}
                alt={"airbnb"}
                placeholder="blur"
                className="h-auto max-[640px]:w-[90px] opacity-80 transition-all duration-300 hover:opacity-100
                max-[530px]:w-[80px]
                max-4230px]:w-[70px]
                "
              />
              <Image
                src={RBITZ}
                width={173}
                height={32}
                alt={"RBITZ"}
                placeholder="blur"
                className="h-auto max-[640px]:w-[150px] opacity-80 transition-all duration-300 hover:opacity-100
                max-[530px]:w-[130px]
                max-[420px]:w-[100px]
                "
              />
            </div>
            {/* Desktop view */}
            <Image
              src={tripadvisor}
              width={211}
              height={32}
              alt={"tripadvisor"}
              placeholder="blur"
              className="h-[32px] max-[1024px]:hidden opacity-80 transition-all duration-300 hover:opacity-100"
            />
            <Image
              src={Expedia}
              width={113}
              height={32}
              alt={"Expedia"}
              placeholder="blur"
              className="h-[32px] max-[1024px]:hidden opacity-80 transition-all duration-300 hover:opacity-100"
            />
            <Image
              src={Booking}
              width={188}
              height={32}
              alt={"Booking"}
              placeholder="blur"
              className="h-[32px] max-[1024px]:hidden opacity-80 transition-all duration-300 hover:opacity-100"
            />
            <Image
              src={airbnb}
              width={102}
              height={32}
              alt={"airbnb"}
              placeholder="blur"
              className="h-[32px] max-[1024px]:hidden opacity-80 transition-all duration-300 hover:opacity-100"
            />
            <Image
              src={RBITZ}
              width={173}
              height={32}
              alt={"RBITZ"}
              placeholder="blur"
              className="h-[32px] max-[1024px]:hidden opacity-80 transition-all duration-300 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};