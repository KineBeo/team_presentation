import React from "react";

const SecurityFeature: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => (
  <div className="mb-8">
    <div className="flex items-center mb-2">
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SecurityFeatures: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <SecurityFeature
              title="Continuous Defense"
              description="F5 mitigates risk and improves digital resiliency by continuously defending critical business logic behind apps and APIs."
            />
            <SecurityFeature
              title="Consistent Security"
              description="F5 dramatically simplifies operations to reduce tool sprawl and complexity by providing end-to-end observability and uniformly protecting the entire digital fabric."
            />
            <SecurityFeature
              title="Confident Innovation"
              description="F5 solutions allow customers to grow with confidence by aligning security to digital strategy and removing the burden of manual policy tuning and remediation fire drills that distract your teams from their core mission."
            />
            <SecurityFeature
              title="API Protection"
              description="F5 secures your APIs across a complex hybrid and multi-cloud fabric with F5® Distributed Cloud WAAP—reducing risk and complexity while improving operational efficiencies—so you maintain visibility and control across your entire digital ecosystem."
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 relative">
              {/* Replace this with your actual SVG or use an Image component */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl text-blue-500 border-4 border-blue-500 rounded-full">
                icons
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Why protect APIs everywhere?
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
