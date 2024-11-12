const Additem = ({setAddItemModal}) => {
    return (
        <>
            <div className="fixed flex justify-center items-center left-0 right-0 bottom-0 top-0 text-white z-[999]">
                <div onClick={()=>setAddItemModal(false)} className="fixed left-0 right-0 bottom-0 top-0 bg-black opacity-60">
                </div>

                <div className="m-[18px] sm:m-auto p-10 max-w-[800px] max-h-[80vh] sm:max-h-[90vh] overflow-auto w-full h-full z-10 bg-[#151515] rounded-md">
                    <div className="flex flex-col gap-4">
                        <div className=" relative">
                            <img className="w-full max-h-[400px] h-full" src="/images/image 239.jpg" alt="" />

                            <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <button className=" flex justify-center items-center rounded-sm gap-2 px-6 py-4 sm:py-6 bg-[#A5FF2B]">
                                    <img className="w-[30px] sm:w-auto" src="/images/upload.svg" alt="" />
                                    <div className=" text-black text-nowrap">
                                        Upload new photo
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 pb-4 overflow-auto">
                            <img className="w-[180px] min-w-[140px] h-[120px] rounded-sm" src="/images/image 239.jpg" alt="" />
                            <img className="w-[180px] min-w-[140px] h-[120px] rounded-sm" src="/images/image 239.jpg" alt="" />
                            <img className="w-[180px] min-w-[140px] h-[120px] rounded-sm" src="/images/image 239.jpg" alt="" />
                            <img className="w-[180px] min-w-[140px] h-[120px] rounded-sm" src="/images/image 239.jpg" alt="" />
                        </div>
                        <div className="flex items-center gap-4">
                            <button className=" flex justify-center items-center rounded-sm gap-2 p-4 bg-[#A5FF2B]">
                                <img className="" src="/images/upload.svg" width={"30px"} alt="" />
                            </button>
                            Upload  up to 4 images of your choice
                        </div>
                        <div className="justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
                            <div className="">Car Name</div>
                            <input className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none" value={""} />
                        </div>
                        <div className="flex items-center justify-between gap-8">

                            <div className="justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
                                <div className="">Input Daily Rate</div>
                                <input className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none" value={""} />
                            </div>
                            <div className="justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
                                <div className="">Input Weekly Rate</div>
                                <input className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none" value={""} />
                            </div>

                        </div>
                        <div className="flex items-center justify-between gap-8">

                            <div className="w-full">
                                <div className="flex text-[#A5FF2B] text-2xl">
                                    SPECIFICATIONS:
                                </div>
                                <div className=" mt-10 justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
                                    <div className="">Seats</div>
                                    <input className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none" value={""} />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
                                    <div className="">Gas</div>
                                    <input className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none" value={""} />
                                </div>
                                <div className="mt-5 justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
                                    <div className="">Horse Power</div>
                                    <input className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none" value={""} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Additem;
