import Button from "./button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="content absolute top-0 left-0 w-full z-50 flex items-center justify-between py-[1.5rem] md:py-[2rem] px-[2rem] md:px-[8rem] bg-transparent border-solid border-b-[1px] border-[#a5ff2b] md:border-none">
      <Link to="/">
        <div className="w-[120px] md:w-auto">
          <img src="/logo.svg" alt="" />
        </div>
      </Link>
      <div className="flex text-[1.2rem] gap-12 md:flex">
        {/* <div className="flex items-center">
          <Link to="/">Home</Link>
        </div>
        <div className="flex items-center">
          <Link to="/category">Category</Link>
        </div>
        <div className="flex items-center">
          <a href="#">About Us</a>
        </div>
        <div className="flex items-center">
          <a href="#">Blog</a>
        </div>
        <div className="flex items-center">
          <a href="#">Contact Us</a>
        </div>
        <Link to="/book">
          <Button>Book Now</Button>
        </Link> */}
      </div>
      <div className="block md:hidden">
        <img src="/drawer.svg" alt="" />
      </div>
    </div>
  );
}
