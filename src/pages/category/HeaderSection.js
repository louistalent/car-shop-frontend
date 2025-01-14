const HeaderSection = () => {
  return (
    <div
      className="w-full h-[395px]"
      style={{
        backgroundImage:
          "url(/images/black-sport-car-dark-background-3d-render-1.jpg)",
        backgroundSize: "100%",
      }}
    >
      <div className="content absolute w-full top-40 flex justify-center">
        <div className="flex flex-col gap-[8px]  items-center">
          <div className="text-[48px] font-semibold tracking-[-2%] leading-[60.48px] text-[#FFFFFF]">
            Car Rental
          </div>
          <div className="flex flex-row gap-[6px]">
            <div>Home</div>
            <div>&gt;</div>
            <div>Category</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
