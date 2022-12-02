import React from "react";

const UtilityPerk = ({imgsrc,heading,text}) => {
  return (
    <div className="bg-[#202633] rounded-[40px] shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)] ">
      <div className="w-[300px] h-[234px] px-4 py-5   md:h-full md:w-full  md:py-10 md:px-8">
        <div className="bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 w-[56px] rounded-lg p-5 px-4">
          <img src={imgsrc} alt="hand" />
        </div>
        <p className="font-semibold text-2xl leading-9 text-white pt-4">
          {heading}
        </p>
        <p className="font-normal text-base leading-6 text-white pt-2">
          {text}
        </p>
      </div>
    </div>
  );
};

export default UtilityPerk;
