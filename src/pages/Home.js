import { useState } from "react";
import Button from "../components/button";
import InputGreen from "../components/input_green";

const Home = () => {
  const [isHome, setIsHome] = useState(true);

  const signUp = () => {
    setIsHome(false);
  };

  const goHome = () => {
    setIsHome(true);
  };
  return (
    <>
      <div className="relative">
        <img className="w-[100%] hidden md:block" src="/hero-back.jpg" alt="" />
        <img
          className="w-[100%] block md:hidden"
          src="/mobile-back.jpg"
          alt=""
        />
        {isHome && (
          <div className="content absolute w-full top-32 md:top-64 left-0 flex flex-col md:flex-row gap-[1rem] md:gap-[16rem] px-[2rem] md:px-[8rem]">
            <div className='w-full md:w-1/2 font-["Syne-SemiBold"] text-[2rem] md:text-[5rem] text-left leading-[120%]'>
              Website Under
              <br /> Development
            </div>
            <div className="w-full md:w-1/2 text-left flex flex-col items-start gap-[1rem] gap-1 md:gap-4">
              <div className="text-[0.9rem] md:text-[1.5rem] leading-[150%] mb-4">
                Sign-up for updates and more!
              </div>
              <InputGreen />
              <div className="w-auto" onClick={signUp}>
                <Button>
                  Sign-up
                  <img
                    className="h-[1.2rem] md:h-auto"
                    src="/arrow-right.svg"
                    alt=""
                  ></img>
                </Button>
              </div>
              <div className="flex gap-2 items-center text-[1.2rem] md:text-[2rem] w-full justify-center md:w-auto mt-[4rem] md:mt-[2rem]">
                <img src="/gmail.svg" alt="" />
                <span>text@example.com</span>
              </div>
            </div>
          </div>
        )}

        {!isHome && (
          <div className="content absolute w-full top-32 md:top-64 left-0 flex flex-col items-center justify-center gap-[2rem] md:gap-[4rem] px-[2rem] md:px-[8rem]">
            <div className='font-["Syne-SemiBold"] text-[2rem] md:text-[5rem] text-left leading-[120%]'>
              You've Signed Up.
            </div>
            <div className="text-left flex flex-col items-start gap-[1rem] gap-1 md:gap-4">
              <div className="w-auto" onClick={goHome}>
                <Button>
                  Home
                  <img
                    className="h-[1.2rem] md:h-auto"
                    src="/arrow-right.svg"
                    alt=""
                  ></img>
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="absolute flex md:hidden bottom-[1rem] left-0 w-full items-center justify-center">
          <img className="w-2/5" src="/logo.svg" alt="" />
        </div>
      </div>

      <div className="w-full px-[8rem] hidden md:flex grow-1 gap-16 py-[6rem]">
        <div className="flex items-center grow ">
          <img className="w-full" src="/logos/ferrari.svg" alt="" />
        </div>
        <div className="flex items-center grow ">
          <img className="w-full" src="/logos/Bentley.svg" alt="" />
        </div>
        <div className="flex items-center grow ">
          <img className="w-full" src="/logos/Porsche.svg" alt="" />
        </div>
        <div className="flex items-center grow px-8">
          <img className="w-full" src="/logos/ferrari2.svg" alt="" />
        </div>
        <div className="flex items-center grow px-8">
          <img className="w-full" src="/logos/ferrari3.svg" alt="" />
        </div>
        <div className="flex items-center grow px-8">
          <img className="w-full" src="/logos/bmw.svg" alt="" />
        </div>
        <div className="flex items-center grow pl-8">
          <img className="w-full" src="/logos/Mask.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
