import Image from "next/image";
import paradise from "../../../public/feature/paradise.png";
import map from "../../../public/feature/map.png";
import schedule from "../../../public/feature/schedule.png";
import coupons from "../../../public/feature/coupons.png";

const Features = () => {
  return (
    <section id="features">
      <div className="grid grid-cols-10 mx-[10%]
      max-[1024px]:my-[10%]
      
      ">
        {/* Key feature */}
        <div
          className="flex col-span-5 flex-col mr-[10%]
          max-[1024px]:col-span-10 max-[1024px]:m-0
          "
        >
          <div className="flex flex-col gap-3">
            <span
              className="font-bold text-[#F85E9F] text-[1.8rem] tracking-[0.3rem]
            max-[1170px]:text-[1.6rem]
            max-[555px]:text-[1.2rem]
            max-[1024px]:text-center
            max-[1024px]:mt-[10%]
            "
            >
              KEY FEATURES
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
              We offer best services
            </span>
            <span
              className="font-normal text-[1.2rem] text-[#191825]/[50%]
            mb-[10%] mt-[3%]
            max-[1250px]:text-[1.1rem]
            max-[1024px]:text-center
            "
            >
              Contrary to popular belief, Lorem Ipsum is not simply random
              <br className="flex max-[1360px]:hidden"/> text. It has roots in a piece of classical Latin literature
              <br className="flex max-[1360px]:hidden"/> from 45 BC.
            </span>
          </div>

          <div className="flex flex-col gap-1 h-auto">
            <div
              className="flex flex-row gap-5 p-[4%]
            rounded-3xl
            max-[515px]:flex-col
            max-[515px]:p-[10%]
            "
            >
              <div
                className="bg-[#FF5722] rounded-[2rem] w-[100px] h-[100px]
              flex justify-center items-center"
              >
                <Image
                  src={map}
                  width={128}
                  height={128}
                  alt={"paradise"}
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover h-[48px] w-[48px]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span
                  className="font-bold text-[#191825] text-[1.7rem]
                  max-[1329px]:text-[1.5rem]
                  max-[1190px]:text-[1.4rem]
                  max-[1180px]:text-[1.2rem]
                  max-[695px]:text-[1.7rem]
                  max-[555px]:text-[1.5rem]
                  "
                >
                  We offer best services
                </span>
                <span
                  className="font-normal text-[1.2rem] text-[#191825]/[50%]
                  max-[1300px]:text-[1rem]
                  max-[1140px]:text-[0.9rem]
                  max-[555px]:text-[1rem]
                  "
                >
                  Lorem Ipsum is not simply random text
                </span>
              </div>
            </div>
            <div
              className="flex flex-row gap-5 p-[4%]
            rounded-3xl border border-[#191825]/[10%]
            max-[515px]:flex-col
            max-[515px]:p-[10%]
            "
            >
              <div
                className="bg-[#FACD49] rounded-[2rem] w-[100px] h-[100px]
              flex justify-center items-center"
              >
                <Image
                  src={schedule}
                  width={128}
                  height={128}
                  alt={"paradise"}
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover h-[48px] w-[48px]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span
                  className="font-bold text-[#191825] text-[1.7rem]
                  max-[1329px]:text-[1.5rem]
                  max-[1190px]:text-[1.4rem]
                  max-[1180px]:text-[1.2rem]
                  max-[695px]:text-[1.7rem]
                  max-[555px]:text-[1.5rem]
                  "
                >
                  Schedule your trip
                </span>
                <span
                  className="font-normal text-[1.2rem] text-[#191825]/[50%]
                  max-[1300px]:text-[1rem]
                  max-[1140px]:text-[0.9rem]
                  max-[555px]:text-[1rem]
                  "
                >
                  It has roots in a piece of classical
                </span>
              </div>
            </div>
            <div
              className="flex flex-row gap-5 p-[4%]
            rounded-3xl max-[515px]:flex-col
            max-[515px]:p-[10%]
            "
            >
              <div
                className="bg-[#F85E9F] rounded-[2rem] w-[100px] h-[100px] 
              flex justify-center items-center
              "
              >
                <Image
                  src={coupons}
                  width={128}
                  height={128}
                  alt={"paradise"}
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover h-[48px] w-[48px]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span
                  className="font-bold text-[#191825] text-[1.7rem]
                  max-[1329px]:text-[1.5rem]
                  max-[1190px]:text-[1.4rem]
                  max-[1180px]:text-[1.2rem]
                  max-[695px]:text-[1.7rem]
                  max-[555px]:text-[1.5rem]
                  "
                >
                  Get discounted coupons
                </span>
                <span
                  className="font-normal text-[1.2rem] text-[#191825]/[50%]
                  max-[1300px]:text-[1rem]
                  max-[1140px]:text-[0.9rem]
                  max-[555px]:text-[1rem]
                  "
                >
                  Lorem Ipsum is not simply random text
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* images */}
        <div className="col-span-5 flex justify-center items-center
        max-[1024px]:col-span-10 max-[1024px]:order-first overflow-hidden
        ">
          <Image
            src={paradise}
            width={5000}
            height={5000}
            alt={"paradise"}
            placeholder="blur"
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
