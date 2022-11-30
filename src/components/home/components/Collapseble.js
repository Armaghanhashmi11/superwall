import React, { useState } from "react";

import { Collapsible } from "collapsible-react-component";
import "collapsible-react-component/dist/index.css";
const Collapseble = ({heading,imgsrc,imgWidth}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full  mt-10 p-2">
      <div className="  shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)] rounded-[30px] ">
        <div className={` bg-gradient-to-r from-[#FF566B] via-[#702CD5] to-[#21E5F0] ${open ?"rounded-t-[30px]":"rounded-[30px]"}    p-2`}>
          <div className="flex   justify-between items-center bg-[#202633] rounded-[30px]">
            <div className="flex items-center ">
              <div className="border-[#FF566B] border-r-8">
                <img
                  className={imgWidth}
                  src={imgsrc}
                  alt="superdeakneon "
                />
              </div>
              <p className="text-[26px] font-bold leading-[22px] text-white ml-8 ">
                {heading}
              </p>
            </div>
            <div className="mr-10">
              <button
                type="button"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {open ? (
                  <img src="/assets/images/arrup.png" alt="arrup " />
                ) : (
                  <img src="/assets/images/arrdown.png" alt="arrdown " />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <Collapsible open={open}>
            <div className="bg-gradient-to-r from-[#FF566B] via-[#702CD5] to-[#21E5F0] p-2 rounded-b-[30px] -mt-[7px]">
              <div className="flex justify-between items-center bg-[#202633] rounded-b-[30px] ">
                <div className="mx-5 my-10">
              <p className="text-2xl font-semibold">Super Pass = 1 Free GEB Mint</p>
              <p className="text-[22px] font-medium mt-2">Free Mint Terms & Conditions: </p>
              <p className="text-lg font-medium">✅ Super Pass Must be Delisted or listed above 1 Eth.</p>
              <p className="text-lg font-medium">✅ 1st snapshot of holders will be taken 2 weeks after Mint</p>
              <p className="text-lg font-medium">✅  2nd snapshot of holders to be taken before GEB Mint. </p>
              <p className="text-lg font-medium">✅ If bought from Secondary Market, Holder can claim GEB OG Role and get 50% Discount on mint.</p>
              <p className="text-sm font-normal">*2nd snapshot date and time TBD</p>
              <p className="text-sm font-normal">**Current Holder Screenshot will be taken and used to identify the holders who will be eligible for the 50% discount </p>
              </div>
              <div >
              <img src="/assets/images/rocks.png" alt="rock " />
              </div>
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default Collapseble;
