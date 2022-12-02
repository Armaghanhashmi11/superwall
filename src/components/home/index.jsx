import Button from "components/common/button";
import { FaqData } from "constant/faq_data";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collapseble from "./components/Collapseble";
import Counter from "./components/counter";
import Faq from "./components/Faq";
import GradientBorder from "./components/gradient-border";
import NftSeries from "./components/nft-series";
import SuperSpaceHolder from "./components/SuperSpaceHolder";
// import SuperDeal from "./components/super-deal";
import TeamMembers from "./components/team-members";
import UtilityPerk from "./components/utility-perk";

export default function Home() {
  const [timer, setTimer] = useState(false);
  return (
    <div className="w-[90%] mx-auto my-12">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img
            className="w-[688.61px] mx-auto pt-36"
            src="/assets/images/superpass.png"
            alt="superpass"
          />
        </div>
        {timer === "timer" ? (
          <>
            {" "}
            <div>
              <p className="font-black leading-[56.32px] text-[32px] lg:text-[64px] text-center text-white pt-24">
                PHASE 1 MINT COUNTDOWN
              </p>
            </div>
            {/* sdsadad */}
            <div className="w-full lg:w-[80%] flex justify-around items-center">
              <Counter counter="6" label="Days" />
              <Counter counter="13" label="Hours" />
              <Counter counter="47" label="Minutes" />
              <Counter counter="52" label="Seconds" />
            </div>
          </>
        ) : (
          <div>
            <img src="/assets/images/Supergif.png" alt="gif" />
            <a href="/mint" alt='mint'>
            <div className="pt-10 w-56 mx-auto cursor-pointer">
              <Button text="Mint Now" />
            </div>
            </a>
          </div>
        )}
        <div className="py-20">
          <img src="/assets/images/supperwallnftseries.png" alt="seriwe" />
        </div>
        <p className="text-2xl font-normal leading-9 text-center  text-white pt-7 hidden md:block">
          The Ultimate pass for the complete super wall nft series.{" "}
        </p>
        <div className="w-full grid grid-cols-2  md:w-[80%] md:flex md:justify-around md:items-center pt-20">
          <NftSeries
            imgsrc="/assets/images/superpasslogo.png"
            text="Supply 555"
            width="w-[180px]"
          />
          <NftSeries
            imgsrc="/assets/images/geb.png"
            text="Supply 5,555"
            width="w-[180px]"
          />
          <NftSeries
            imgsrc="/assets/images/world.png"
            text="Supply 24,000"
            width="w-[126px]"
          />
          <NftSeries
            imgsrc="/assets/images/music.png"
            text="Supply 2,000"
            width="w-[126px]"
          />
        </div>
        <div className="pt-[100px]">
          <GradientBorder text="Utility and Perks" />
        </div>
        <div className="w-[380px] md:w-[90%] md:mx-auto flex md:grid   md:grid-cols-2  lg:grid-cols-3 gap-14 pt-20 overflow-x-scroll md:overflow-hidden">
          <div className="bg-[#202633] rounded-[40px] shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)] ">
            <div className="w-[374px] h-[280px] px-4 py-5  md:h-full md:w-full md:py-10 md:px-8">
              <p className="font-semibold text-2xl leading-9 text-white">
                GEB & SOW Free Mint
              </p>
              <p className="font-normal text-base leading-9 text-white pt-8">
                Only Available to Super Pass Holders!{" "}
              </p>
              <p className="font-normal text-base leading-9 text-white pt-8">
                Super Pass Holder -{">"} GEB Free Mint -{">"} SOW Free Mint
              </p>
              <p className="font-normal text-base leading-9 text-white text-center pt-2">
                *Terms & Conditions Apply*
              </p>
            </div>
          </div>
          <UtilityPerk
            imgsrc="/assets/images/hand.png"
            heading="Super Collab"
            text="Super Pass Holders may be eligible for a Super Collab with Superwall.
All proposals will be reviewed & only proposals approved by Superwall's internal team."
          />
          <UtilityPerk
            imgsrc="/assets/images/addition.png"
            heading="Additional WL from Collaboration Projects"
            text="Not all Super Pass holders may be eligible to mint. Depending on the projects supply/allocation it will be a FCFS basis."
          />
          <UtilityPerk
            imgsrc="/assets/images/alpha.png"
            heading="Superwall Alpha Room"
            text="Superwall Alpha Room only accessible to Super Pass, Genesis Elemental Bricks and S.O.W Holders."
          />
          <UtilityPerk
            imgsrc="/assets/images/subscription.png"
            heading="Super Subscription"
            text="(3) Super Subscriptions that each have a 3 month subscription plan that can be used to subscribe to any Super on our superwall platform to view their contents."
          />
          <UtilityPerk
            imgsrc="/assets/images/addition.png"
            heading="Annual Gala Dinner & Award Ceremony"
            text="All Super Pass Holders will be given an invitation to our Annaul Gala Dinner & Award Ceremony."
          />
        </div>
        <div className="pt-[100px] ">
          <GradientBorder text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Super Deal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
        </div>
        <div className="w-[80%] mx-auto  pt-20">
          <SuperSpaceHolder />
          <Collapseble
            heading="Genesis Elemental Bricks"
            imgsrc="/assets/images/geb.png"
            imgWidth="w-[100px] h-[100px]"
          />
          <Collapseble
            heading="Some Other World"
            imgsrc="/assets/images/world.png"
            imgWidth="w-[100px] h-[100px]"
          />
          {/* <SuperDeal />
          <SuperDeal
            bgColor="bg-[rgba(220, 220, 220, 0.06)]"
            styles="shadow-6xl backdrop-blur-[52.7999px]"
          />
          <SuperDeal bgColor="bg-[#1F2634]" styles="bg-opacity-[50%]" />
          <SuperDeal bgColor="bg-gradient-gray" /> */}
        </div>
        <div className="pt-[100px] ">
          <GradientBorder text="Team Members" />
        </div>
        <div className="w-full  md:w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-20 pt-20">
          <TeamMembers />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto  pt-32">
          <div>
            <p className="text md:text-[48px] leading-10 font-bold text-center text-[#DFDFDF]">
              Frequently Asked Questions
            </p>
          </div>
          <div className="h-[500px] overflow-y-auto">
            {FaqData.map((items, index) => (
              <Faq
                question={items.question}
                answer={items.answer}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
