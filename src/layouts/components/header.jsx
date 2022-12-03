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
          <li className="text-lg font-bold leading-[27px] text-center text-[#DDDDDD] ml-10">Utilities & Perks</li></a>
          <li className="text-lg font-bold leading-[27px] text-center text-[#DDDDDD] ml-10">Super Deal</li>
          <li className="text-lg font-bold leading-[27px] text-center text-[#DDDDDD] ml-10">Super Team</li>
          <li className="text-lg font-bold leading-[27px] text-center text-[#DDDDDD] ml-10">FAQ</li>
        </ul>
        <a href="https://twitter.com/superwallglobal">
        <img className="ml-7" src="assets/images/twitterlogo.png" alt="twitterlogo"/>
        </a>
        <a href="https://discord.gg/cRbAWmADjv">
        <img className="ml-7" src="assets/images/instalogo.png" alt="instalogo"/>
        </a>
        <a href="https://www.instagram.com/superwall_official/">
        <img className="ml-7" src="assets/images/discordicon.png" alt="discordicon"/>
        </a>
        <Button text="Connect Wallet"/>
      </div>
      <div className="block lg:hidden">
      <img src="assets/images/menu_hamburger.png"  alt="menu_hamburger"/>
      </div>
    </div>
  );
}
