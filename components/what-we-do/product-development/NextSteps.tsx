import React from "react";
import { Laptop, Cog, Headphones } from "lucide-react";

export interface NextStepProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  buttonText: string;
}

const Step: React.FC<NextStepProps> = ({
  icon,
  title,
  description,
  buttonText,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center w-full ">
    <div className="text-blue-500 mb-2 h-1/4 ">{icon}</div>
    <h3 className="text-sm font-semibold mb-1 h-1/4 pt-1">{title}</h3>
    <p
      className="text-sm text-gray-600 mb-3 h-1/4 pt-2"
      style={{ whiteSpace: "pre-line" }}
    >
      {description}
    </p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full h-1/4 mt-4">
      {buttonText}
    </button>
  </div>
);
const NextSteps: React.FC<{ data: NextStepProps[] }> = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    console.error("Nextstep data is not valid");
    return null;
  }
  return (
    <div className="w-full px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-6">Next Steps</h2>
      <div className="grid justify-between mobile:grid-cols-1 tablet:grid-cols-1 grid-cols-3 gap-6">
        {data.map((ele, index) => (
          <Step
            key={index}
            icon={ele.icon}
            title={ele.title}
            description={ele.description}
            buttonText={ele.buttonText}
          ></Step>
        ))}
      </div>
    </div>
  );
};

export default NextSteps;
