import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { Label } from "flowbite-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import SolutionAccordion from "./SolutionAccordion";
const footerSections = [
  {
    title: "WHAT WE OFFER",
    items: ["Free Trials", "Products", "Solutions"],
  },
  {
    title: "RESOURCES",
    items: [
      "Product Documentation",
      "White Papers",
      "Glossary",
      "Customer Stories",
      "Webinars",
      "Free Online Courses",
      "F5 Certification",
      "LearnF5 Training",
    ],
  },
  {
    title: "SUPPORT",
    items: [
      "Manage Subscriptions",
      "Support Portal",
      "Professional Services",
      "Create a Service Request",
      "Software Downloads",
    ],
  },
  {
    title: "PARTNERS",
    items: [
      "Find a Reseller Partner",
      "Technology Alliances",
      "Become an F5 Partner",
      "Login to Partner Central",
    ],
  },
  {
    title: "COMPANY",
    items: [
      "Contact Information",
      "Compliance",
      "Careers",
      "Events",
      "Diversity & Inclusion",
      "Newsroom",
      "Blog",
      "Investor Relations",
      "F5 NGINX",
    ],
  },
];
const SolutionMenuMobile = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const defaultContent = "Lorem .";
  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
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
        scrollBehavior="normal"
        size="full"
        placement="top"
      >
        <ModalContent className="w-full h-full max-w-[1300px] mx-auto ">
          <ModalBody className="flex flex-col h-full lg:flex-row p-0 overflow-auto">
            <SolutionAccordion />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SolutionMenuMobile;
