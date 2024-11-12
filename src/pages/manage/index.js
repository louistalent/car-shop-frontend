import { Link } from "react-router-dom";
import HeaderSection from "./HeaderSection";
import CategoryPagination from "./pagination";
import { useState } from "react";
import Additem from "./additem";
import Confirm from "./confirm";

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
    }
];

const Manage = () => {
    const [addItemModal, setAddItemModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);

    return (
        <div className="pb-[160px]">
            <HeaderSection />

            <div className="max-w-[1240px] mx-auto">
                <div className="flex flex-col gap-[64px] pt-[80px] pb-[64px]">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[64px]">
                        {CateList.map((item, index) => (
                            <Link to={`#`} key={index}>
                                <div className="flex flex-row gap-[32px] justify-center">
                                    <div className="relative flex flex-col gap-[16px] border-solid border-b-[2px] border-[#545454] hover:border-[#A5FF2B] duration-150">
                                        <div className="relative">
                                            <img src={`${item.image}`} alt="" />
                                            <div className="absolute right-2 top-2">
                                                <button className="bg-[#282828] px-6 py-1 text-md text-[#A5FF2B]">
                                                    Edit
                                                </button>
                                            </div>

                                            <div className="absolute right-2 bottom-2">
                                                <button onClick={() => setConfirmModal(!confirmModal)} className="bg-[#ffffff] px-2 rounded-sm py-2 text-md text-[#A5FF2B]">
                                                    <img src={`/images/delete.svg`} alt="" />
                                                </button>
                                            </div>
                                        </div>
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

                        <div className="flex flex-row gap-[32px] relative">
                            <div className="fixed sm:absolute -right-4 sm:right-[50%] bottom-10 sm:top-[50%] translate-x-0 sm:translate-x-[50%] translate-y-0  sm:translate-y-[-150px]">
                                <div className="flex flex-col gap-6">
                                    <button onClick={() => setAddItemModal(!addItemModal)} className="bg-[#7baa38cc] sm:bg-[#282828] px-6 py-4 sm:py-6 text-md text-[#A5FF2B] rounded-md">
                                        <img className="w-[30px] sm:w-auto" src="/images/plus.svg" alt="" />
                                    </button>
                                    <a className="hidden sm:block underline text-white text-lg cursor-pointer">Add item</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    addItemModal &&
                    <Additem setAddItemModal={setAddItemModal} />
                }
                {
                    confirmModal &&
                    <Confirm setConfirmModal={setConfirmModal} />
                }
                <CategoryPagination itemsPerPage={1} items={CateList} />
            </div>
        </div>
    );
};

export default Manage;
