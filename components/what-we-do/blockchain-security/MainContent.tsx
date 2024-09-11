import React from "react";
import Benefits from "./Benefits";
import ExploreSysLabs from "./ExploreSysLabs";
import Overview from "./Overview";
import Resources from "./Resources";
import HeroSection from "@/components/HeroSection";
import { resourcesData } from "./Data";
import { benefitData } from "./Data";
import NextSteps from "./NextSteps";

function BLockchainSecurity() {
  return (
    <section>
      <HeroSection />
      <div className="px-40 mobile:px-10 pt-20 mobile:pt-10">
        <Overview />
        <Benefits data={benefitData} />
        <ExploreSysLabs />
        <Resources {...resourcesData} />
        <NextSteps />
      </div>
    </section>
  );
}

export default BLockchainSecurity;
