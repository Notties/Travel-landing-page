import Image from "next/image";

const Nav = () => {
  return (
    <>
    
      <nav className="flex flex-row justify-around p-5">
        
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center gap-3">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="logo"
              priority
            />
          <p className="text-[#222831] font-extrabold text-[20px]">Travlog</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <ul className="flex flex-row gap-10">
            <li
              className="
                    cursor-pointer transition-all text-gray-400 font-semibold
                    hover:text-[#222831]"
            >
              Home
            </li>
            <li
              className="
                    cursor-pointer transition-all text-gray-400 font-semibold
                    hover:text-[#222831]"
            >
              Discover
            </li>
            <li
              className="
                    cursor-pointer transition-all text-gray-400 font-semibold
                    hover:text-[#222831]"
            >
              Special Deals
            </li>
            <li
              className="
                    cursor-pointer transition-all text-gray-400 font-semibold
                    hover:text-[#222831]"
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center gap-5">
          <button className="font-semibold">Log In</button>
          <button className="btn ">Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
