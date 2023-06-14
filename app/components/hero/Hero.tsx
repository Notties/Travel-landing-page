import Image from "next/image";
import p1 from "../../../public/hero/place1.png";
import p2 from "../../../public/hero/place2.png";
import p3 from "../../../public/hero/place3.png";

export const Hero = async () => {
  return (
    <section id="#" className="">
      <div
        className="border border-red-600 mx-[10%] my-[2%]
      grid grid-cols-5
      max-[1060px]:mx-[3%]
      max-[790px]:grid-cols-6
      "
      >
        <div
          className="border border-blue-700 col-span-2 my-[15%]
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
              "
              >
                Get Started
              </button>
              <button
                className="btn-sec flex flex-row gap-2
              max-[880px]:px-6
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
          className="border border-yellow-300 col-span-3
          max-[1060px]:col-span-2.5
          max-[790px]:col-span-3
          max-[640px]:hidden
        "
        >
          <div className="flex justify-center">
            <div className="absolute -z-10">
              <Image
                src={"/hero/layer.png"}
                width={872}
                height={387}
                alt={"layer"}
                priority
              />
            </div>
          </div>
          <div
            className="grid h-auto grid-cols-2 gap-10 border border-green-600 z-10 mt-[10%] mx-[10%]
            max-[1060px]:my-[10%]
            max-[1060px]:mx-[5%]
            max-[790px]:gap-5
            max-[790px]:mt-[30%]
          "
          >
            <div
              className="border border-blue-400 grid justify-center gap-10 
              max-[790px]:gap-5
              "
            >
              <Image
                src={p1}
                width={372}
                height={400}
                alt={"place1"}
                placeholder="blur"
                className="rounded-lg"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Image
                src={p2}
                width={372}
                height={400}
                alt={"place1"}
                placeholder="blur"
                className="rounded-lg"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="border border-blue-400 grid items-center">
              <Image
                src={p3}
                width={372}
                height={400}
                alt={"place3"}
                placeholder="blur"
                className="rounded-lg"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
