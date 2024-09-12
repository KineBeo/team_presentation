import React from "react";
import Benefits from "../Benefits";
import ExploreCysLabs from "../ExploreCysLabs";
import Overview from "../Overview";
import Resources from "../Resources";
import HeroSection from "@/components/HeroSection";
import { exploreCysLabsData, overviewData } from "./Data";
import { benefitData } from "./Data";
import { resourcesData } from "./Data";
import NextSteps from "../NextSteps";

function ThreatHunting() {
  return (
    <section>
      <HeroSection />
      <div className="px-40 mobile:px-10 pt-20 mobile:pt-10">
        <Overview data={overviewData} />
        <Benefits data={benefitData} />
        <ExploreCysLabs data={exploreCysLabsData} />
        <Resources {...resourcesData} />
        <NextSteps />
      </div>
    </section>
  );
}

export default ThreatHunting;
