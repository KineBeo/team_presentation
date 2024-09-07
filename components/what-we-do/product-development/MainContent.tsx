import React from "react";
import Benefits from "./Benefits";
import ExploreSysLabs from "./ExploreSysLabs";
import Overview from "./Overview";
import Resources from "./Resources";
import { resourcesData } from "./Data";

function ProductDevelopment() {
  return (
    <section>
      <Overview />
      <Benefits />
      <ExploreSysLabs />
      <Resources {...resourcesData} />
    </section>
  );
}

export default ProductDevelopment;
