"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Nfts",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Helmet</li>
        <li>Boots</li>
        <li>Suit</li>
        <li>Gloves</li>
       
      </ul>
    ),
  },
  {
    title: "Playing",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Find 4 NFTs</li>
        <li>Go to EXIT</li>
        <li>Mint and Burn NFTs</li>
        <li>Get Fenomen </li>
       
      </ul>
    ),
  },
  {
    title: "Upgrades",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>New reliese after results</li>
        <li>More NFTs</li>
        <li>Implement on Main Chains</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/max.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Project</h2>
          <p className="text-base lg:text-lg">
          We are using Chainlink technology to manage components in the game.
           The objective of the game is to collect all four NFTs and save Astronaut Patrick from Oblivion.
            Later, we will introduce a time goal of 5 minutes. If you don't save him within 5 minutes,
             the ship will explode. Use the 'E' key to pick up NFTs. If you get stuck,
              find the nearest laptop and locate the mouse cursor. 
              Some aspects may be a little tricky, so we hope you enjoy playing.
           For more information, click on the Hackathon button.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              NFTs{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Playing{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Upgrades{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    
     </section>
  );
};

export default AboutSection;