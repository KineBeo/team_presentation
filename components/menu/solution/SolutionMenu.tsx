import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  NavbarItem,
  useDisclosure,
} from "@nextui-org/react";
import QuickLinks from "../QuickLinks";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import React, { useState, useMemo } from "react";
import { Label } from "flowbite-react";

// Định nghĩa các kiểu dữ liệu
type ButtonId = "solutionArea" | "industry" | "cloudPartners";

interface LinkItem {
  href: string;
  title: string;
  text: string;
}

interface SolutionCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  links: LinkItem[];
}
const QUICK_LINKS = [
  {
    title: "Customer Case Studies",
    url: "#",
  },
  {
    title: "Product Datasheets",
    url: "#",
  },
  {
    title: "Professional Services",
    url: "#",
  },
  {
    title: "Software Download",
    url: "#",
  },
  {
    title: "View All F5 Resources",
    url: "#",
  },
];

// Component chính = Sidebar + Solution card + Quick link
export default function SolutionMenu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedButton, setSelectedButton] = useState<ButtonId | null>(null);

  // Cấu hình cho các button
  const buttonConfig = useMemo(
    () => ({
      solutionArea: {
        title: "Application Security and Delivery Solutions",
        subtitle:
          "Explore F5 solution areas to find products that will address your specific technical challenges.",
        links: [
          {
            href: "#",
            title: "Web Application and API Protection",
            text: "Reduce risk and complexity so you can continue moving your business forward.",
          },
          {
            href: "#",
            title: "Secure Multicloud Networking",
            text: "Connect, secure, and manage apps and APIs across multicloud and hybrid architectures.",
          },
          {
            href: "#",
            title: "Fraud and Abuse Prevention",
            text: "Protect against fraud while keeping apps available for legitimate users.",
          },
          {
            href: "#",
            title: "Application and Network Performance",
            text: "Increase availability and performance of your apps to optimize user experience.",
          },
          {
            href: "#",
            title: "Zero Trust Security",
            text: "Prevent unauthorized access to your networks, applications, and APIs.",
          },
          {
            href: "#",
            title: "Modern Application Delivery",
            text: "Meet customer demands and improve digital experiences.",
          },
        ],
      },
      industry: {
        title: "Solutions by Industry",
        subtitle:
          "Explore how F5 can transform your business through specialized solutions.",
        links: [
          {
            href: "#",
            title: "Banking & Financial Services",
            text: "Find F5 solutions for open banking, CX, governance, risk, and compliance.",
          },
          {
            href: "#",
            title: "Service Providers",
            text: "Enable network transformation with edge distributed network functions and apps.",
          },
          {
            href: "#",
            title: "Public Sector Solutions",
            text: "Deploy and manage your applications, in compliance with federal regulations.",
          },
          {
            href: "#",
            title: "E-commerce",
            text: "Stop automated and manual attempts to defraud your applications and customers.",
          },
          {
            href: "#",
            title: "Healthcare",
            text: "Prevent unauthorized account access and associated fraud—while reducing friction for legitimate users.",
          },
        ],
      },
      cloudPartners: {
        title: "Solutions by Cloud Partners",
        subtitle: "Explore F5 application services on major cloud providers.",
        links: [
          {
            href: "#",
            title: "F5 on Amazon Web Services",
            text: "Gain security, performance, and availability for your apps on AWS.",
          },
          {
            href: "#",
            title: "F5 on Microsoft Azure",
            text: "Gain security, performance, and availability for your apps on Microsoft Azure.",
          },
          {
            href: "#",
            title: "F5 on Google Cloud Platform",
            text: "Gain security, performance, and availability for your apps on Google Cloud Platform.",
          },
        ],
      },
    }),
    []
  );

  const { title, subtitle, links } = selectedButton
    ? buttonConfig[selectedButton]
    : buttonConfig.solutionArea;

  const handleButtonClick = (buttonId: ButtonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div>
      <Label onClick={onOpen} className="font-bold text-base ">
        SOLUTIONS
      </Label>
      <Modal
        className="mobile:flex tablet:hidden"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        size="full"
      >
        <ModalContent className="w-full h-full max-w-[1300px] mx-auto ">
          <ModalBody className="flex flex-col h-full lg:flex-row p-0 overflow-auto">
            <Sidebar
              selectedButton={selectedButton}
              onButtonClick={handleButtonClick}
            />
            <SolutionCard title={title} description={subtitle} links={links} />
            <div className="flex flex-col space-y-6 pt-12 w-full lg:w-[320px] pr-6 lg:pr-8 justify-start h-full">
              <div className="bg-gray-100 p-4">
                <QuickLinks links={QUICK_LINKS} />
              </div>
              <div className="flex flex-col bg-black p-8 lg:p-12 mb-12 text-white h-full items-center justify-center">
                <div className="mb-4 w-full">
                  <img
                    src="/images/home-solu-power-and-protect.png"
                    alt="Description Image"
                    className="w-full rounded-lg"
                  />
                </div>
                <p className="mb-4">
                  Power and protect AI-based apps from the data center to the
                  edge.
                </p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  See how
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

// Sidebar Component
const Sidebar: React.FC<{
  selectedButton: ButtonId | null;
  onButtonClick: (buttonId: ButtonId) => void;
}> = ({ selectedButton, onButtonClick }) => {
  const buttons: { id: ButtonId; label: string }[] = [
    { id: "solutionArea", label: "By Solution Area." },
    { id: "industry", label: "By Industry" },
    { id: "cloudPartners", label: "By Cloud Partners" },
  ];

  return (
    <div className="flex flex-col bg-sky-800 w-full lg:w-[320px] h-screen">
      <div className="flex justify-between items-center mt-8 border-b-2 w-full h-12 px-2 lg:px-4">
        <p className="text-sm lg:text-base font-bold text-white">SOLUTIONS</p>
        <p className="text-xs lg:text-sm text-white cursor-pointer ml-4 lg:ml-8">
          View all {">"}
        </p>
      </div>
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => onButtonClick(button.id)}
          className={`flex items-center h-12 ${
            selectedButton === button.id
              ? "bg-white text-sky-800"
              : "text-white"
          } hover:underline cursor-pointer`}
        >
          <p className="ml-8 w-full text-left group-hover:underline">
            {button.label}
          </p>
          <IoIosArrowForward className="text-2xl" />
        </button>
      ))}
    </div>
  );
};

// QuickLinks Component

// SolutionCard Component
const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
  links,
}) => {
  return (
    <div className="flex flex-col items-start p-6 lg:p-8 space-y-6 h-full w-full lg:w-[calc(100%-640px)]">
      <div className="flex items-center justify-center">
        {icon || <IoSettingsOutline className="w-16 lg:w-24 h-16 lg:h-24" />}
      </div>
      <div className="text-start w-full">
        <h1 className="text-lg lg:text-2xl font-bold whitespace-pre-line">
          {title}
        </h1>
        <p className="text-sm text-gray-600 pt-4 lg:pt-6">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {links.map((link, index) => (
          <div key={index} className="py-1 rounded-lg">
            <a
              href={link.href}
              className="text-sm text-blue-500 font-semibold underline"
            >
              {link.title}
            </a>
            <p className="text-sm text-gray-700 mt-2">{link.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
