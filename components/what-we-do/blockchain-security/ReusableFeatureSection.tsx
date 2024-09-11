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
    <div className="w-full mb-6 ">
      <div className="relative w-72 h-72 mx-auto">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );

  const textContent = (
    <div className="w-full px-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4 font-normal justify-center">{description}</p>
      {learnMoreLink && (
        <a href={learnMoreLink} className="text-blue-600 hover:underline">
          Learn more &gt;
        </a>
      )}
    </div>
  );

  return (
    <div className="flex flex-row mobile:flex-col tablet:flex-col items-center mb-12">
      <div
        className={
          imagePosition === "left"
            ? "order-1 w-full"
            : "order-2 mobile:order-1 tablet:order-1 w-full"
        }
      >
        {imageContent}
      </div>
      <div
        className={
          imagePosition === "left"
            ? "order-2 mobile:order-2 tablet:order-2 w-full"
            : "order-1 mobile:order-2 tablet:order-2 w-full"
        }
      >
        {textContent}
      </div>
    </div>
  );
};

export default FeatureSection;
