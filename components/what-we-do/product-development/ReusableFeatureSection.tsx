import React from "react";
import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  learnMoreLink?: string;
  imagePosition?: "left" | "right";
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageSrc,
  learnMoreLink,
  imagePosition = "left",
}) => {
  const imageContent = (
    <div className="md:w-1/3 mb-6 md:mb-0">
      <div className="relative w-48 h-48 mx-auto">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" />
      </div>
    </div>
  );

  const textContent = (
    <div className="md:w-2/3 md:px-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      {learnMoreLink && (
        <a href={learnMoreLink} className="text-blue-600 hover:underline">
          Learn more &gt;
        </a>
      )}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center mb-12">
      {imagePosition === "left" ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
};

export default FeatureSection;
