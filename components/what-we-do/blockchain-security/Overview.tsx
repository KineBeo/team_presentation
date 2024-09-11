import React from "react";

const Overview: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Deliver Applications and APIs across Multicloud Environments with Speed
        and Security
      </h2>
      <p className="mt-4 font-medium text-lg text-gray-950 px-10 laptop:px-20 mobile:px-0">
        Organizations now face a number of challenges in multicloud
        environments, including increased complexity, cost, and risk. Syslabs
        Distributed Cloud Services accelerates application deployments and
        migrations in hybrid and multicloud environments providing the security
        and resilience that modern digital infrastructures require.
      </p>
      <div className="mt-8">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Get the latest intel
        </button>
      </div>
    </div>
  );
};
export default Overview;
