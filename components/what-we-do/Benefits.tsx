import React from "react";
import { Image } from "@nextui-org/react";

const BenifitFeature: React.FC<BenefitProps> = ({ title, description }) => (
  <div className="mb-8">
    <div className="flex items-center mb-2">
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className=" text-gray-600 ">{description}</p>
  </div>
);

export interface BenefitProps {
  title: string;
  description: string;
}

const Benefits: React.FC<{ data: BenefitProps[] }> = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    console.error("Benefits data is not valid");
    return null;
  }
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-1 grid-cols-2 gap-8">
          <div>
            {data.map((feature) => (
              <BenifitFeature
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mobile:hidden">
            <div className="w-full h-full relative">
              {/* Replace this with your actual SVG or use an Image component */}
              <Image
                width="100%"
                src="/images/what-we-do/product-development/benefit.png"
                alt="Picture of the author"
              />
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

export default Benefits;
