import React from "react";
import Benefits from "./Benefits";
import ExploreSysLabs from "./ExploreSysLabs";
import Overview from "./Overview";
import Resources from "./Resources";
import { resourcesData } from "./Data";
import NextSteps from "./NextSteps";

function ProductDevelopment() {
  return (
    <section className="px-40 mobile:px-10">
      <Overview />
      <Benefits />
      <ExploreSysLabs />
      <Resources {...resourcesData} />
      <NextSteps />
    </section>
  );
}

export default ProductDevelopment;
