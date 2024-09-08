import React from "react";
import { Laptop, Cog, Headphones } from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  buttonText: string;
}

const Step: React.FC<StepProps> = ({
  icon,
  title,
  description,
  buttonText,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center w-full">
    <div className="text-blue-500 mb-2">{icon}</div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p
      className="text-sm text-gray-600 mb-3"
      style={{ whiteSpace: "pre-line" }}
    >
      {description}
    </p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full">
      {buttonText}
    </button>
  </div>
);
const NextSteps: React.FC = () => {
  return (
    <div className="w-full px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-6">Next Steps</h2>
      <div className="grid justify-between mobile:grid-cols-1 tablet:grid-cols-1 grid-cols-3 gap-6">
        <Step
          icon={<Laptop size={32} />}
          title={
            <>
              Tour the F5 <br /> Product Demo <br /> Center
            </>
          }
          description="See F5 Web App and API Protection solutions in action."
          buttonText="Check it out"
        />
        <Step
          icon={<Cog size={32} />}
          title={
            <>
              Start an app <br /> security trial
            </>
          }
          description="See how F5 app security solutions work with a free trial."
          buttonText="Start today"
        />
        <Step
          icon={<Headphones size={32} />}
          title="Contact us"
          description="Find out how F5 products and solutions can enable you to achieve your goals."
          buttonText="Contact F5"
        />
      </div>
    </div>
  );
};

export default NextSteps;
