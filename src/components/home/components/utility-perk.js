import React, { useState } from "react";

const UtilityPerk = ({ imgsrc, heading, text, Enter, Leave }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      {/* {isShown && (   */}

      {/* )} */}
      <div
        className="cursor-pointer   bg-[#202633] h-full w-full md:min-h-full min-h-[340px]   relative  rounded-[50px] shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)]   "
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown ? (
          <>
            <div className=" w-[300px] h-auto px-4 py-5   md:h-[350px] md:w-full  md:py-10 md:px-8">
              <p className="font-semibold text-2xl leading-9 text-white text-left ">
                {heading}
              </p>
              <p className="font-normal text-base leading-5 text-white pt-4">
                {text}
              </p>

              <p className="font-normal text-base leading-5 text-white  pt-2">
                *Terms & Conditions Apply*
              </p>
            </div>
            <div
              data-aos="fade"
              data-aos-duration="1000"
              className="absolute w-full h-full top-0"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <img
                className="w-full h-full "
                width={"100%"}
                height="100%"
                alt="neon"
                src="/assets/images/neon.png"
              />
            </div>
          </>
        ) : (
          <div className=" cursor-pointer w-[300px] h-auto px-4 py-5   md:h-[100%] md:w-full  md:py-10 md:px-8">
            <div className="bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 w-[56px] rounded-lg p-5 px-4 ml-2 mt-2">
              <img src={imgsrc} alt="hand" />
            </div>
            <p className="font-semibold text-[18px] leading-9 text-white pt-4 ml-2">
              {heading}
            </p>
            <p className="font-normal text-base leading-6 text-white pt-2 ml-2">
              {text}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default UtilityPerk;
