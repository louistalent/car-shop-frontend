import Testimonials from "../../components/testimonials";
import BookSearch from "./Search.js";

const Book = () => {
  return (
    <div className="pb-[160px]">
      <div className="h-[124px]"></div>
      <BookSearch />

      <div className="max-w-[1240px] mx-auto">
        <div>
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
          <div className="py-[80px] flex flex-col gap-[111px]">
            <div className="flex flex-col gap-[16px]">
              <div className="text-left text-[#FFFFFF] font-semibold text-[48px] tracking-[-2%] font-[Syne] leading-[60.48px] ">
                Ride To Destinations
                <br />
                With Maximum Comfort
              </div>
              <div className="text-[#A1A1A1] text-[20px] leading-[30px] text-left  tracking-[-2%] w-[922px]">
                Founded in Southern California, our mission is to offer an
                unparalleled fleet of high-performance and exotic vehicles that
                turn heads and ignite passions.
              </div>
            </div>
            <div className="flex flex-row gap-[32px]">
              <div className=" flex flex-col gap-[16px]">
                <img src="/images/image 235.jpg" alt="" />
                <div className=" border-solid border-b-[2px] border-[#A5FF2B] pb-[24px]">
                  <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                    Lamborghini
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    Huracan 1.5 Sports
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    $1500
                    <span className="font-normal text-[16px] leading-[24px]">
                      /day
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-[16px]">
                <img src="/images/image 236.jpg" alt="" />
                <div className=" border-solid border-b-[2px] border-[#545454] pb-[24px]">
                  <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                    Ferrari
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    488 Pista
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    $1650
                    <span className="font-normal text-[16px] leading-[24px]">
                      /day
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-[16px]">
                <img src="/images/image 238.jpg" alt="" />
                <div className=" border-solid border-b-[2px] border-[#545454] pb-[24px]">
                  <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                    Porsche
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    Panamera S-Line
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    $800
                    <span className="font-normal text-[16px] leading-[24px]">
                      /day
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[80px] flex flex-col gap-[64px]">
            <div className="flex flex-col gap-[16px]">
              <div className="text-[48px] leading-[60.48px] tracking-[-2%] font-semibold text-[#FFFFFF] text-left">
                How It Works
              </div>
              <div className="text-[#A1A1A1] text-[20px] leading-[30px] text-left tracking-[-2%]">
                It is a long established fact that a reader will be distracted
                by
                <br />
                the readable content of a page when looking at its layout.
              </div>
            </div>
            <div className="flex flex-row gap-[64px]">
              <div className="flex flex-col gap-[32px] max-w-[572px]">
                <div className="border-solid border-[1px] border-[#424448] p-[16px] flex flex-col gap-[24px]">
                  <div>
                    <img
                      src="/images/car.svg"
                      alt=""
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                      Discover Your Perfect Car
                    </div>
                    <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Luctus cum purus bibendum risus.
                    </div>
                  </div>
                </div>
                <div className="border-solid border-[1px] border-[#424448] p-[16px] flex flex-col gap-[24px]">
                  <div>
                    <img
                      src="/images/calendar 01.svg"
                      alt=""
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                      Secure Your Rental Booking
                    </div>
                    <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Luctus cum purus bibendum risus.
                    </div>
                  </div>
                </div>
                <div className="border-solid border-[1px] border-[#424448] p-[16px] flex flex-col gap-[24px]">
                  <div>
                    <img
                      src="/images/card.svg"
                      alt=""
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                      Complete Your Booking Payment
                    </div>
                    <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Luctus cum purus bibendum risus.
                    </div>
                  </div>
                </div>
                <div className="border-solid border-[1px] border-[#424448] p-[16px] flex flex-col gap-[24px]">
                  <div>
                    <img
                      src="/images/task-check.svg"
                      alt=""
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                      Your Booking Is Confirmed
                    </div>
                    <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Luctus cum purus bibendum risus.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src="/images/image 237.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[64px] h-[1968px] pt-[80px] pb-[160px]">
            <div className="flex flex-col gap-[16px]">
              <div className="text-[48px] leading-[60.48px] tracking-[-2%] font-semibold text-[#FFFFFF] text-left">
                Most Popular Car Rental Deals
              </div>
              <div className="text-[20px] leading-[30px] text-[#C8C8C8] tracking-[-2%] text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                lorem sagittis, proin ut <br />
                lectus sed ut. Enim egestas enim id duis.
              </div>
            </div>
            <div className="flex flex-row gap-[32px]">
              <div className=" flex flex-col gap-[16px]">
                <img src="/images/image 235.jpg" alt="" />
                <div className=" border-solid border-b-[2px] border-[#A5FF2B] pb-[24px]">
                  <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                    Lamborghini
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    Huracan 1.5 Sports
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    $1500
                    <span className="font-normal text-[16px] leading-[24px]">
                      /day
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-[16px]">
                <img src="/images/image 236.jpg" alt="" />
                <div className=" border-solid border-b-[2px] border-[#545454] pb-[24px]">
                  <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                    Ferrari
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    488 Pista
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    $1650
                    <span className="font-normal text-[16px] leading-[24px]">
                      /day
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-[16px]">
                <img src="/images/image 237 (1).jpg" alt="" />
                <div className=" border-solid border-b-[2px] border-[#545454] pb-[24px]">
                  <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                    Rolls Royce
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    Phantom
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    $2000
                    <span className="font-normal text-[16px] leading-[24px]">
                      /day
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[32px]">
              <div className=" flex flex-col gap-[16px]">
                <img src="/images/image 238.jpg" alt="" />
                <div className=" border-solid border-b-[2px] border-[#545454] pb-[24px]">
                  <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                    Porsche
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    Panamera S-Line
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    $800
                    <span className="font-normal text-[16px] leading-[24px]">
                      /day
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-[16px]">
                <img src="/images/image 239.jpg" alt="" />
                <div className=" border-solid border-b-[2px] border-[#545454] pb-[24px]">
                  <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                    Tesla
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    Model S
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    $750
                    <span className="font-normal text-[16px] leading-[24px]">
                      /day
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-[16px]">
                <img src="/images/image 236-1.jpg" alt="" />
                <div className=" border-solid border-b-[2px] border-[#545454] pb-[24px]">
                  <div className="text-[16px] text-[#A1A1A1] leading-[24px] text-left">
                    Lamborghini
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    Aventador
                  </div>
                  <div className="text-[24px] text-[#FFFFFF] leading-[31.68px] text-left tracking-[-2%] font-bold">
                    $1500
                    <span className="font-normal text-[16px] leading-[24px]">
                      /day
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[64px] pt-[13px] pb-[160px]">
            <div className="flex flex-col gap-[16px]">
              <div className="text-[48px] text-[#FFFFFF] leading-[64px] text-left tracking-[-2%] font-semibold">
                What’s Our Client’s Says
              </div>
              <div className="text-[20px] text-[#A1A1A1] leading-[30px] tracking-[-2%] text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                lorem sagittis, proin ut <br />
                lectus sed ut. Enim egestas enim id duis.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-row gap-[32px]">
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
        </div>
        <div className="flex flex-row gap-[32px]">
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Book;
