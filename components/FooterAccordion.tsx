'use client'
import React, { useState } from 'react';
// import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
const footerSections = [
  {
    title: 'WHAT WE OFFER',
    items: ['Free Trials', 'Products', 'Solutions'],
  },
  {
    title: 'RESOURCES',
    items: [
      'Product Documentation',
      'White Papers',
      'Glossary',
      'Customer Stories',
      'Webinars',
      'Free Online Courses',
      'F5 Certification',
      'LearnF5 Training',
    ],
  },
  {
    title: 'SUPPORT',
    items: [
      'Manage Subscriptions',
      'Support Portal',
      'Professional Services',
      'Create a Service Request',
      'Software Downloads',
    ],
  },
  {
    title: 'PARTNERS',
    items: [
      'Find a Reseller Partner',
      'Technology Alliances',
      'Become an F5 Partner',
      'Login to Partner Central',
    ],
  },
  {
    title: 'COMPANY',
    items: [
      'Contact Information',
      'Compliance',
      'Careers',
      'Events',
      'Diversity & Inclusion',
      'Newsroom',
      'Blog',
      'Investor Relations',
      'F5 NGINX'
    ]
  }
];

export default function FooterAccordion() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(prev => prev === index ? null : index);
  };

  return (
    <div className="bg-[#222222] text-white">
      {footerSections.map((section, index) => (
        <div key={index} className="border-b border-gray-700">
          <button
            className="w-full flex justify-between items-center py-4 px-6 focus:outline-none"
            onClick={() => toggleSection(index)}
          >
            <h2 className="font-bold text-lg">{section.title}</h2>
            {openSection === index ? (
              <MdKeyboardArrowUp className="h-6 w-6" />
            ) : (
              <MdKeyboardArrowDown className="h-6 w-6" />
            )}
          </button>
          {openSection === index && (
            <div className="px-6 pb-4">
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white hover:underline">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}