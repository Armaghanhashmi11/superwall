import Button from "components/common/button";
import React from "react";

export default function Header() {

  return (
    <div className="max-w-[1500px] pt-10 mx-auto w-full lg:w-[90%] lg:mx-auto h-20 flex justify-between items-center">
      <div>
        <img src="assets/images/logo.png"  alt="logo"/>
      </div>
      <div className="lg:flex lg:items-center hidden ">
        <ul className="flex">
          <a href="/">
          <li className="text-lg font-bold leading-[27px] text-center text-[#DDDDDD] ml-10 cursor-pointer">Utilities & Perks</li></a>
          <li className="text-lg font-bold leading-[27px] text-center text-[#DDDDDD] ml-10 cursor-pointer">Super Deal</li>
          <li className="text-lg font-bold leading-[27px] text-center text-[#DDDDDD] ml-10 cursor-pointer">Super Team</li>
          <li className="text-lg font-bold leading-[27px] text-center text-[#DDDDDD] ml-10 cursor-pointer">FAQ</li>
        </ul>
        <a href="https://twitter.com/superwallglobal">
        <img className="ml-7 cursor-pointer" src="assets/images/twitterlogo.png" alt="twitterlogo"/>
        </a>
        <a href="https://discord.gg/cRbAWmADjv">
        <img className="ml-7 cursor-pointer" src="assets/images/instalogo.png" alt="instalogo"/>
        </a>
        <a href="https://www.instagram.com/superwall_official/">
        <img className="ml-7 cursor-pointer" src="assets/images/discordicon.png" alt="discordicon"/>
        </a>
        <Button text="Connect Wallet"/>
      </div>
      <div className="block lg:hidden">
      <img src="assets/images/menu_hamburger.png"  alt="menu_hamburger"/>
      </div>
    </div>
  );
}
