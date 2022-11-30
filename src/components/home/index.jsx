import React from "react";
import Counter from "./components/counter";
import GradientBorder from "./components/gradient-border";
import NftSeries from "./components/nft-series";
import SuperDeal from "./components/super-deal";
import TeamMembers from "./components/team-members";
import UtilityPerk from "./components/utility-perk";

export default function Home() {
  return (
    <div className="w-[90%] mx-5 my-12">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-[566px] mx-auto"
          src="/assets/images/superwall.png"
          alt="superwall"
        />
        <div>
          <p className="font-bold text-[50px] text-center leading-[44px] text-white pt-8">
            COMING SOON
          </p>
        </div>
        <div>
          <img
            className="w-[1050px] mx-auto pt-14"
            src="/assets/images/neon_frame.png"
            alt="neno"
          />
        </div>
        <div>
          <img
            className="w-[688.61px] mx-auto pt-36"
            src="/assets/images/superpass.png"
            alt="superpass"
          />
        </div>
        <div>
          <p className="font-black leading-[56.32px] text-[64px] text-center text-white pt-24">
            SOFT MINT COUNTDOWN
          </p>
        </div>
        <div className="w-[80%] flex justify-around items-center">
          <Counter counter="6" label="Days" />
          <Counter counter="13" label="Hours" />
          <Counter counter="47" label="Minutes" />
          <Counter counter="52" label="Seconds" />
        </div>
        <div>
          <p className="text-7xl text-[#DFDFDF] font-bold text-center leading-[63px] pt-24">
            Superwall NFT Series
          </p>
          <p className="text-2xl font-normal leading-9 text-center  text-white pt-7">
            The Ultimate pass for the complete super wall nft series.{" "}
          </p>
        </div>
        <div className="w-[80%] flex justify-around items-center pt-20">
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
        <div className="w-[90%] mx-auto grid grid-cols-3 gap-14 pt-20">
          <div className="bg-[#202633] rounded-[40px] shadow-[0px 4px 24px rgba(0, 0, 0, 0.25)] ">
            <div className="py-10 px-8">
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
        <div className="w-[80%] mx-auto grid grid-cols-2 gap-20 pt-20">
          <SuperDeal />
          <SuperDeal
            bgColor="bg-[rgba(220, 220, 220, 0.06)]"
            styles="shadow-6xl backdrop-blur-[52.7999px]"
          />
          <SuperDeal bgColor="bg-[#1F2634]" styles="bg-opacity-[50%]" />
          <SuperDeal bgColor="bg-gradient-gray" />
        </div>
        <div className="pt-[100px] ">
          <GradientBorder text="Team Members" />
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-4 gap-20 pt-20">
          <TeamMembers/>
          <TeamMembers/>
          <TeamMembers/>
          <TeamMembers/>
          <TeamMembers/>
          <TeamMembers/>
          <TeamMembers/>
          <TeamMembers/>
        </div>
      </div>
    </div>
  );
}
