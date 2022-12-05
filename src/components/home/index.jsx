import Button from "components/common/button";
import { FaqData } from "constant/faq_data";
import React from "react";
import Collapseble from "./components/Collapseble";
import Counter from "./components/counter";
import Faq from "./components/Faq";
import GradientBorder from "./components/gradient-border";
import NftSeries from "./components/nft-series";
import SuperSpaceHolder from "./components/SuperSpaceHolder";
// import SuperDeal from "./components/super-deal";
import TeamMembers from "./components/team-members";
import { useReactCountdown } from "./components/timer";
import UtilityPerk from "./components/utility-perk";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  AOS.init();
  let dateToEndCountdownAt = "December 5, 2022 23:47:00";
  const { days, hours, minutes, seconds, hidePresaleSection } =
    useReactCountdown(dateToEndCountdownAt);
  console.log(hidePresaleSection);
  return (
    <div className="max-w-[1500px] w-[90%] mx-auto my-12">
      <div className="flex flex-col justify-center items-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            className="w-[688.61px] mx-auto pt-36"
            src="/assets/images/superpass.png"
            alt="superpass"
          />
        </div>
        {!hidePresaleSection ? (
          <>
            {" "}
            <div data-aos="fade-up" data-aos-duration="1000">
              <p className="font-black leading-[56.32px] text-[32px] lg:text-[64px] text-center text-white pt-24">
                PHASE 1 MINT COUNTDOWN
              </p>
            </div>
            {/* sdsadad */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full lg:w-[80%] flex justify-around items-center"
            >
              <Counter counter={days} label="Days" />
              <Counter counter={hours} label="Hours" />
              <Counter counter={minutes} label="Minutes" />
              <Counter counter={seconds} label="Seconds" />
            </div>
          </>
        ) : (
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="red-box-shadow border-2 border-white  rounded-2xl"
            >
              <img
                className="w-[725px] h-[481px] rounded-2xl"
                src="/assets/images/supassgif.gif"
                alt="gif"
              />
            </div>
            <a href="/mint" alt="mint">
              <div className="pt-10 w-56 mx-auto cursor-pointer">
                <Button text="Mint Now" />
              </div>
            </a>
          </div>
        )}
        <div data-aos="fade-up" data-aos-duration="1000" className="py-20">
          <img
            src="/assets/images/supperwallnftseries.png"
            alt="supperwallnftseries"
          />
        </div>
        <p className="text-2xl font-bold leading-9 text-center  text-white pt-7 hidden md:block">
          The Gateway to your full Web3 Entertainment Experience
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full grid grid-cols-2  md:w-[80%] md:flex md:justify-around md:items-center pt-20"
        >
          <NftSeries
            imgsrc="/assets/images/superpasslogo.png"
            text="Supply 1111"
            width="w-[180px]"
          />
          <NftSeries
            imgsrc="/assets/images/geb.png"
            text="Supply 5,550"
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
        <div data-aos="fade-up" data-aos-duration="1000" className="pt-[100px]">
          <GradientBorder text="Utility and Perks" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-[350px] md:w-[90%] md:mx-auto flex md:grid   md:grid-cols-2  lg:grid-cols-3 gap-14 pt-20 overflow-x-scroll md:overflow-hidden"
        >
          <div className="hidden ml-5 bg-[#202633] z-10 rounded-[40px] border-2 border-white red-box-shadow shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)] ">
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
            imgsrc="/assets/images/Union.png"
            heading="GEB & SOW Free Mint"
            text="Only Available to Super Pass Holders!
            Super Pass Holders can be eligible for the following free mints:GEB Free Mint x1
            SOW Free Mint x1 *T&Cs Applied*"
          />
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
            imgsrc="/assets/images/annual.png"
            heading="Annual Gala Dinner & Award Ceremony"
            text="All Super Pass Holders will be given an invitation to our Annaul Gala Dinner & Award Ceremony."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="pt-[100px] "
        >
          <GradientBorder text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Super Deal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-[80%] mx-auto  pt-20"
        >
          <SuperSpaceHolder />
          <Collapseble
            firstitems={true}
            firstimage={true}
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
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="pt-[100px] pb-[80px] "
        >
          <GradientBorder text="Team Members" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full  md:w-[90%]  text-center  mx-auto grid grid-cols-2 lg:grid-cols-4 gap-20 pt-20"
        >
          <TeamMembers />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-[90%] md:w-[80%] mx-auto  pt-32"
        >
          <div>
            <p className="text md:text-[48px] leading-10 font-bold text-center text-[#DFDFDF] mb-10">
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
