import Nav from "./components/nav/Nav";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div
          className="
        bg-[#FF5722] blur-[270px] -z-50 absolute
          w-[500px] h-[500px] top-[-450%] left-[-25%]
        "
        />

          <Nav />

      </div>
    </>
  );
}
