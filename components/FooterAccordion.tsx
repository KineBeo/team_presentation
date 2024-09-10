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
      'CysLabs Certification',
      'LearnCysLabs Training',
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
      'Become an CysLabs Partner',
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
      'CysLabs NGINX'
    ]
  }
];

export default function FooterAccordion() {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <footer className="text-white p-8">
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
                  <li key={itemIndex} className="text-white hover:underline font-semibold">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};
