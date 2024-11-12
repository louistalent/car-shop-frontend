import { Link } from "react-router-dom";
import HeaderSection from "./HeaderSection";
import CategoryPagination from "./pagination";

const CateList = [
  {
    id: 1,
    type: "Lamborghini",
    name: "Huracan 1.5 Sports",
    price: 1500,
    image: "/images/image 235.jpg",
  },
  {
    id: 2,
    type: "Ferrari",
    name: "488 Pista",
    price: 1650,
    image: "/images/image 236.jpg",
  },
  {
    id: 3,
    type: "Porsche",
    name: "Panamera S-Line",
    price: 800,
    image: "/images/image 238.jpg",
  },
  {
    id: 1,
    type: "Porsche",
    name: "Panamera S-Line",
    price: 800,
    image: "/images/image 238.jpg",
  },
  {
    id: 1,
    type: "Tesla",
    name: "Model S",
    price: 750,
    image: "/images/image 239.jpg",
  },
  {
    id: 1,
    type: "Porsche",
    name: "Panamera S-Line",
    price: 800,
    image: "/images/image 238.jpg",
  },
  {
    id: 1,
    type: "Porsche",
    name: "Panamera S-Line",
    price: 800,
    image: "/images/image 238.jpg",
  },
  {
    id: 1,
    type: "Tesla",
    name: "Model S",
    price: 750,
    image: "/images/image 239.jpg",
  },
  {
    id: 1,
    type: "Porsche",
    name: "Panamera S-Line",
    price: 800,
    image: "/images/image 238.jpg",
  },
];

const Category = () => {
  return (
    <div className="pb-[160px]">
      <HeaderSection />

      <div className="max-w-[1240px] mx-auto">
        <div className="h-[256px] content-center ">
          <div className="flex flex-row  md:gap-[4rem]">
            <div>
              <img src="/images/rolls-royce 1.png" alt="" />
            </div>
            <div>
              <img src="/images/Bentley.png" alt="" />
            </div>
            <div>
              <img src="/images/Tesla_Motors 1.png" alt="" />
            </div>
            <div>
              <img src="/images/ferrari-ges-logo-svgrepo-com 1.png" alt="" />
            </div>
            <div>
              <img src="/images/ferrari-ges-logo-svgrepo-com 2.png" alt="" />
            </div>
            <div>
              <img src="/images/bmw 1.png" alt="" />
            </div>
            <div>
              <img src="/images/Mask group.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[64px] pt-[80px] pb-[64px]">
          <div className="flex flex-row justify-between items-end">
            <div className="text-[32px] font-semibold tracking-[-2%] leading-[40.32px] text-[#FFFFFF] text-left">
              Cars for every taste and budget,
              <br /> available for rent at your convenience
            </div>
            <div className="flex flex-row gap-[24px]">
              <div className="w-[220px] h-[48px] gap-[10px]">
                <select
                  id="countries"
                  className="h-12 border border-[#D6D2D2] text-[#D6D2D2] bg-transparent  text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
                >
                  <option className="text-[#D6D2D2] bg-black" selected>
                    Sort by Price
                  </option>
                  <option value="US" className="text-[#D6D2D2] bg-black">
                    Sort by Area
                  </option>
                  <option value="CA" className="text-[#D6D2D2] bg-black">
                    Sort by Color
                  </option>
                  <option value="FR" className="text-[#D6D2D2] bg-black">
                    Sort by Type
                  </option>
                </select>
              </div>
              <div className="w-[220px] h-[48px] gap-[10px]">
                <select
                  id="countries"
                  className="h-12 border border-[#D6D2D2] text-[#D6D2D2] bg-transparent  text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
                >
                  <option className="text-[#D6D2D2] bg-black" selected>
                    Sort by Popularity
                  </option>
                  <option value="US" className="text-[#D6D2D2] bg-black">
                    Sort by Area
                  </option>
                  <option value="CA" className="text-[#D6D2D2] bg-black">
                    Sort by Color
                  </option>
                  <option value="FR" className="text-[#D6D2D2] bg-black">
                    Sort by Type
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[64px]">
            {CateList.map((item, index) => (
              <Link to={`/category/${item.id}`} key={index}>
                <div className="flex flex-row gap-[32px]">
                  <div className=" flex flex-col gap-[16px] border-solid border-b-[2px] border-[#545454] hover:border-[#A5FF2B] duration-150">
                    <img src={`${item.image}`} alt="" />
                    <div className="pb-[24px]">
                      <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                        {item.type}
                      </div>
                      <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                        {item.name}
                      </div>
                      <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                        ${item.price}
                        <span className="font-normal text-[16px] leading-[24px]">
                          /day
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <CategoryPagination />
      </div>
    </div>
  );
};

export default Category;
