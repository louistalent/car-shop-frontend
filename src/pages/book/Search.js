const BookSearch = () => {
  return (
    <div
      className="h-[478px]"
      style={{
        backgroundImage: "url(/book-page.jpg)",
        backgroundSize: "100% ",
        backgroundPosition: "bottom",
      }}
    >
      <div className="w-full h-full" style={{ background: "#0000004f" }}>
        <div className="max-w-[1240px] mx-auto md:flex pt-[51px] pb-[40px] flex flex-col h-full justify-between">
          <div className="flex flex-row justify-between w-full">
            <div className='w-full  font-["Syne"] font-semibold text-[72px]  text-left leading-[52.56px] text-white'>
              Rent Your
              <br />
              Dream Exotic Cars.
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full flex flex-col font-['Syne'] md:max-w-[503px] gap-[26px]">
                <p className="text-white text-[20px] font-normal text-left">
                  Whether it’s for a special event or a day of indulgence, we
                  ensure a seamless rental experience that’s as luxurious as the
                  cars we provide.
                </p>
                <div className="flex flex-row md:gap-[1rem]">
                  <div className="w-[154px] h-[56px] md:text-[16px] text-black text-[0.8rem]  bg-[#a5ff2b] px-[1rem] md:px-[1.4rem] py-[0.6rem] md:py-[1rem] cursor-pointer hover:bg-white transition-all duration-300 ease-in-out flex gap-2">
                    book now
                    <img
                      className="h-[1.2rem] md:h-auto"
                      src="/arrow-right.svg"
                      alt=""
                    />
                  </div>
                  <div className="w-[142px] h-[56px] md:text-[16px]  text-[0.8rem]  text-[#a5ff2b] border-solid border-[1px] border-[#a5ff2b] px-[1rem] md:px-[1.4rem] py-[0.6rem] md:py-[1rem] cursor-pointer hover:bg-white transition-all duration-300 ease-in-out flex gap-2">
                    How It Works
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content w-[100%] top-80 left-0 flex justify-center">
            <div className="flex flex-row gap-[24px] items-center">
              <div className="flex items-center space-x-4 p-4 px-[24px] bg-gray-800 gap-[8px]   text-[18px] text-white tracking-[-2%]">
                <div className="flex items-center   w-[143px]">
                  <img
                    src="/images/car.svg"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <span>Select Car</span>
                </div>

                <div className="flex items-center  w-[133px]">
                  <img
                    src="/images/Vector.svg"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <span>Location</span>
                </div>

                <div className="flex items-center  w-[157px]">
                  <img
                    src="/images/calendar 01.svg"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <span>Pickup Date</span>
                </div>

                <div className="flex items-center  w-[124px]">
                  <img
                    src="/images/calendar 01.svg"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <span>Return Date</span>
                </div>

                <div className="w-[97px] h-[56px] md:text-[16px] text-black text-[0.8rem]  bg-[#a5ff2b] px-[1rem] md:px-[1.4rem] py-[0.6rem] md:py-[1rem] cursor-pointer hover:bg-white transition-all duration-300 ease-in-out flex gap-2">
                  Search
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSearch;
