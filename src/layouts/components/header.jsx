import Button from "components/common/button";
import React from "react";

export default function Header() {

  return (
    <div className="w-[90%] mx-auto h-20 flex justify-between items-center">
      <div>
        <img src="assets/images/logo.png"  alt="logo"/>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="text-lg font-medium leading-[27px] text-center text-[#DDDDDD] ml-10">home</li>
          <li className="text-lg font-medium leading-[27px] text-center text-[#DDDDDD] ml-10">About</li>
          <li className="text-lg font-medium leading-[27px] text-center text-[#DDDDDD] ml-10">Team</li>
          <li className="text-lg font-medium leading-[27px] text-center text-[#DDDDDD] ml-10">Roadmap</li>
          <li className="text-lg font-medium leading-[27px] text-center text-[#DDDDDD] ml-10">FAQs</li>
        </ul>
        <img className="ml-7" src="assets/images/twitterlogo.png" alt="twitterlogo"/>
        <img className="ml-7" src="assets/images/instalogo.png" alt="instalogo"/>
        <Button text="join discord"/>
      </div>
    </div>
  );
}
