import Image from "next/image";

export const Hero = () => {
  return (
    <section id="#" className="">
      <div
        className="h-[100vh] border border-red-600 mx-[10%] my-[2%]
      grid grid-cols-5"
      >
        <div className="border border-blue-700 col-span-2 my-[15%]">
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
            <span className="font-bold text-[6.5rem] leading-tight">
              Travel{" "}
              {
                <>
                  <span className="font-bold text-[6.5rem] text-[#F85E9F]">
                    top <br /> destination
                  </span>
                </>
              }
              <br />
              of the world
            </span>
            <p className="text-[#191825]/[50%] text-xl">
              We always make our customer happy by providing <br />
              as many choices as possible
            </p>
            <div className="flex flex-row gap-5">
              <button className="btn">Get Started</button>
              <button className="btn-sec flex flex-row gap-2">
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
        <div className="border border-yellow-300 col-span-3 ">
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
          <div className="grid grid-cols-2 gap-10 border border-green-600 z-10 mt-[10%] mx-[10%]">
              <div className="border border-blue-400 grid justify-center gap-10">
              <Image
                src={"/hero/place1.png"}
                width={372}
                height={400}
                alt={"place1"}
                priority
              />
              <Image
                src={"/hero/place2.png"}
                width={372}
                height={400}
                alt={"place1"}
                priority
              />
              </div>
              <div className="border border-blue-400 grid items-center">
              <Image
                src={"/hero/place3.png"}
                width={372}
                height={400}
                alt={"place3"}
                priority
              />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
