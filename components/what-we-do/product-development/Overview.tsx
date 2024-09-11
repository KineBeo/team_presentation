import React from "react";

export interface OverViewProps {
  title: String;
  description: Array<String>;
}
const Overview: React.FC<{ data: OverViewProps }> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {data.title}
      </h2>
      {data.description.map((element) => (
        <p className="mt-4 font-medium text-lg text-gray-950 px-10 laptop:px-20 mobile:px-0">
          {element}
        </p>
      ))}

      <div className="mt-8">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Get the latest intel
        </button>
      </div>
    </div>
  );
};
export default Overview;
