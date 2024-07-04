import Marquee from "react-fast-marquee";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10">
      <div className="bg-category-darker h-16 z-10 border-b border-b-dark">
        <Marquee autoFill className="h-full flex items-center">
          <h1 className="text-5xl uppercase text-dark font-display">
            polo.sh &nbsp;
          </h1>
        </Marquee>
      </div>
    </div>
  );
}
