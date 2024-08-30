import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const footerSections = [
  {
    title: "View All Solution",
    items: [""],
  },
  {
    title: "By Solution Area",
    items: [
      "Web Application and API Protection",
      "Secure Multicloud Networking",
      "Fraud and Abuse Prevention",
      "Application and Network Performance",
      "Zero Trust Security",
      "Modern Application Delivery",
    ],
  },
  {
    title: "By Industry",
    items: [
      "Banking & Financial Services",
      "Service Providers",
      "Public Sector Solutions",
      "E-commerce",
      "Healthcare",
    ],
  },
  {
    title: "By Cloud Partners",
    items: [
      "F5 on Amazon Web Services",
      "F5 on Microsoft Azure",
      "F5 on Google Cloud Platform",
    ],
  },
];

export default function SolutionAccordion() {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      {footerSections.map((section, index) => (
        <div key={index} className="border-t border-gray-700 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(index)}
          >
            <h2 className="font-bold text-lg">{section.title}</h2>
            {openSections.includes(index) ? (
              <MdKeyboardArrowUp className="h-10 w-10" />
            ) : (
              <MdKeyboardArrowDown className="h-10 w-10" />
            )}
          </div>
          {openSections.includes(index) && (
            <ul className="mt-2 space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className=" hover:underline font-semibold">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
