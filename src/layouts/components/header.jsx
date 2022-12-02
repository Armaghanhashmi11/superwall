import Button from "components/common/button";
import React from "react";

export default function Header() {

  return (
    <div className="w-full lg:w-[90%] lg:mx-auto h-20 flex justify-between items-center">
      <div>
        <img src="assets/images/logo.png"  alt="logo"/>
      </div>
      <div className="lg:flex lg:items-center hidden ">
        <ul className="flex">
          <a href="/">
          <li className="text-lg font-medium leading-[27px] text-center text-[#DDDDDD] ml-10">home</li></a>
          <li className="text-lg font-medium leading-[27px] text-center text-[#DDDDDD] ml-10">About</li>
          <li className="text-lg font-medium leading-[27px] text-center text-[#DDDDDD] ml-10">Team</li>
          <li className="text-lg font-medium leading-[27px] text-center text-[#DDDDDD] ml-10">Roadmap</li>
          <li className="text-lg font-medium leading-[27px] text-center text-[#DDDDDD] ml-10">FAQs</li>
        </ul>
        <img className="ml-7" src="assets/images/twitterlogo.png" alt="twitterlogo"/>
        <img className="ml-7" src="assets/images/instalogo.png" alt="instalogo"/>
        <Button text="join discord"/>
      </div>
      <div className="block lg:hidden">
      <img src="assets/images/menu_hamburger.png"  alt="menu_hamburger"/>
      </div>
    </div>
  );
}
