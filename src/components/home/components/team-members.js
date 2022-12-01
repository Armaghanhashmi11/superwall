import { TeamMemberData } from "constant/team_member";
import React from "react";

const TeamMembers = () => {
  return (
    
      <>
{TeamMemberData.map((items,index)=>(
  <div className=" rounded-[30px] " key={index}>
      <div className=" flex justify-center items-center w-48 h-48 mx-auto  rounded-full  mt-[-63px]  from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r">
      <div className="bg-[#1F2634] p-2 w-44 h-44 mx-auto rounded-full">
      <img
      
        src={items.imgsrc}
        alt="tiger"
      />
      </div>
      </div>
      <div className="flex justify-center items-center pt-7">
        <img
          className="w-[25px] "
          src="/assets/images/twitterlogo.png"
          alt="tiger"
        />
        <img
          className="w-[25px] ml-2"
          src="/assets/images/instalogo.png"
          alt="tiger"
        />

        {/* sadasasdasdasdas */}
        <img
          className="w-[25px] ml-2"
          src="/assets/images/linkdinlogo.png"
          alt="tiger"
        />
      </div>
      <p className="text-[22px] md:text-[32px] leading-[48px] text-[#F8F8F8] font-semibold pt-3 text-center">
        {items.name}
      </p>
      <p className="text-[#A7A7A7] leading-[21px] text-center text-sm font-normal pt-2">
        {items.position}
      </p>
      <p className="text-[#A7A7A7] leading-[21px] text-center text-sm font-normal py-2">
        {items.loacation}
      </p>
    </div>
))}
    </> 
  );
};

export default TeamMembers;
