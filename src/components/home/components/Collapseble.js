import React, { useState } from "react";

import { Collapsible } from "collapsible-react-component";
import "collapsible-react-component/dist/index.css";
const Collapseble = ({ heading, imgsrc, imgWidth, firstitems, firstimage }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full  mt-10 p-2">
      <div className="  shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)] rounded-[30px] ">
        <div
          className={` bg-gradient-to-r red-box-shadow bg-white ${
            open ? "rounded-t-[30px]" : "rounded-[30px]"
          }    p-1`}
        >
          <div className="flex   justify-between items-center bg-[#202633] rounded-[30px]">
            <div className="flex items-center ">
              <div className="right-gradient-bdr ">
                <img className={imgWidth} src={imgsrc} alt="superdeakneon " />
              </div>
              <p className="text-[12px] md:text-[26px] font-bold leading-[22px] text-white ml-8 ">
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
            <div className="bg-gradient-to-r red-box-shadow bg-white p-1 rounded-b-[30px] -mt-[7px]">
              <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center bg-[#202633] rounded-b-[30px] w-full">
                {firstitems ? (
                  <div className="w-[95%] md:w-[70%] mx-5 my-10">
                    <p className="text-lg md:text-2xl font-semibold">
                      Super Pass = 1 Free GEB Mint
                    </p>
                    <p className="text-[17px] md:text-[22px] font-medium mt-2">
                      Free Mint Terms & Conditions:{" "}
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex ">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      Super Pass Must be Delisted or listed above 1 Eth.
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      1st snapshot of holders will be taken 2 weeks after Mint
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      2nd snapshot of holders to be taken before GEB Mint.{" "}
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      If bought from Secondary Market, Holder can claim GEB OG
                      Role and get 50% Discount on mint.
                    </p>
                    <p className="text-[11px] md:text-sm font-normal hidden md:block">
                      *2nd snapshot date and time TBD
                    </p>
                    <p className="text-[11px] md:text-sm font-normal hidden md:block">
                      **Current Holder Screenshot will be taken and used to
                      identify the holders who will be eligible for the 50%
                      discount{" "}
                    </p>

                    <div className="w-[90%] flex justify-between items-center md:hidden mt-2">
                      <div className="">
                        <p className="text-[11px] md:text-sm font-normal">
                          *2nd snapshot date and time TBD
                        </p>
                        <p className="text-[11px] md:text-sm font-normal">
                          **Current Holder Screenshot will be taken and used to
                          identify the holders who will be eligible for the 50%
                          discount{" "}
                        </p>
                      </div>
                      <div className="">
                        <img src="/assets/images/rocks.png" alt="rocks" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-[95%] md:w-[70%] mx-2 my-5 lg:mx-5 lg:my-10">
                    <p className="text-lg md:text-2xl font-semibold">
                      Super Pass = 1 Free GEB Mint
                    </p>
                    <p className="text-[17px] md:text-[22px] font-medium mt-2">
                      Free Mint Terms & Conditions:{" "}
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex ">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      The originial minter must be in possession of their Super
                      Pass
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />{" "}
                      Hard Stake your GEB using the Pylons provided on our GEB
                      Staking Site
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      Staked GEB will reward $BRCK + Elemental Brick Fragments
                      to holders every week
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      Holders must collect Elemental Brick Fragments and
                      complete all 6 Elemental Bricks
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      Staked GEB will reward $BRCK + Elemental Brick Fragments
                      to holders every week
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      Holders may stake and unstake freely but the longer you
                      stake, better the rewards.
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      Holders must collect Elemental Brick Fragments and
                      complete all 6 Elemental Bricks.
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      All 6 Elemental Bricks will be used on Interactive SOW
                      Minting Site to summon a SOW.
                    </p>
                    <p className="text-[14px] md:text-lg font-medium flex">
                      <img
                        className="mr-2 w-[25px] h-[25px]"
                        src="/assets/images/neoncheck.png"
                        alt=""
                      />
                      If a Super Pass is bought from the Secondary Market, the
                      holder will be able to claim a OG Role for SOW and will
                      recieve a 50% Discount during mint.
                    </p>
                    <p className="text-[11px] md:text-sm font-normal hidden md:block">
                      *Current Holder Screenshot will be taken and used to
                      identify the holders who will be eligible for the 50%
                      discount{" "}
                    </p>

                    <div className="w-[90%] flex justify-between items-center md:hidden mt-2">
                      <div>
                        {" "}
                        <p className="text-[11px] md:text-sm font-normal">
                          *Current Holder Screenshot will be taken and used to
                          identify the holders who will be eligible for the 50%
                          discount{" "}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <img src="/assets/images/sowartwork.png" alt="rocks" />
                      </div>
                    </div>
                  </div>
                )}
                {firstimage ? (
                  <div className="hidden md:block mr-5">
                    <img src="/assets/images/rocks.png" alt="rock " />
                  </div>
                ) : (
                  <div className="hidden md:block mr-5">
                    <img
                      src="/assets/images/sowartwork.png"
                      alt="sowartwork "
                    />
                  </div>
                )}
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default Collapseble;
