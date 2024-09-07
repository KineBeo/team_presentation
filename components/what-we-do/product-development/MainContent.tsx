import React from "react";
import SecurityFeatures from "./SecurityFeatures";
import ExploreWebAppAndAPI from "./ExploreWebAppAndAPI";

function ProductDevelopment() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Get App Security Without Compromise
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Attackers follow the money. In a digital economy, this means targeting
          web apps and APIs to exploit vulnerabilities, abuse business logic,
          and bypass access controls—leading to data breach, account takeover,
          and downtime that can devastate your business. In order to effectively
          mitigate these attacks, you need comprehensive, consistent security
          that protects your entire digital business—from code to runtime.
        </p>
        <p className="mt-4 text-lg text-gray-500">
          F5 solutions run anywhere and protect apps and APIs everywhere—in the
          data center, across clouds, at the edge, behind your mobile apps,
          within your third- party integrations—continuously defending the
          digital endpoints that drive business, so that your customers can
          deliver great experiences every time.
        </p>
        <div className="mt-8">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Get the latest intel
          </button>
        </div>
      </div>
      <SecurityFeatures />
      <ExploreWebAppAndAPI />
    </section>
  );
}

export default ProductDevelopment;
