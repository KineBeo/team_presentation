import React from "react";

export interface ResourceLink {
  title: string;
  href: string;
}

export interface ResourcesProps {
  featuredReport?: {
    title: string;
    description: string;
    buttonText: string;
  };
  assessments?: ResourceLink[];
  reports?: ResourceLink[];
  articles?: ResourceLink[];
  customerStoriesAndWebinars?: ResourceLink[];
  solutionOverviews?: ResourceLink[];
}

const ResourceLinkComponent: React.FC<ResourceLink> = ({ title, href }) => (
  <a href={href} className="text-blue-600 hover:underline flex items-center">
    {title}
  </a>
);

const ResourceSection: React.FC<{ title: string; links?: ResourceLink[] }> = ({
  title,
  links,
}) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {links && links.length > 0 ? (
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <ResourceLinkComponent {...link} />
          </li>
        ))}
      </ul>
    ) : (
      <p>No resources available</p>
    )}
  </div>
);

const Resources: React.FC<ResourcesProps> = ({
  featuredReport,
  assessments,
  reports,
  articles,
  customerStoriesAndWebinars,
  solutionOverviews,
}) => {
  return (
    <div className="grid grid-cols-2 mobile:grid-cols-1 tablet:grid-cols-1 gap-8 w-full">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4">Featured</h2>
        <div className="bg-black text-white p-6 rounded-lg w-full">
          <div className="w-full h-full bg-purple-600 rounded-lg mb-4"></div>
          <h3 className="text-xl font-bold mb-2">{featuredReport?.title}</h3>
          <p className="mb-4">{featuredReport?.description}</p>
          <button className="bg-white text-black px-4 py-2 rounded">
            {featuredReport?.buttonText}
          </button>
        </div>
      </div>
      <div className="w-full">
        <ResourceSection title="Assessments" links={assessments} />
        <ResourceSection title="Reports" links={reports} />
        <ResourceSection title="Articles" links={articles} />
        <ResourceSection
          title="Customer stories and webinars"
          links={customerStoriesAndWebinars}
        />
        <ResourceSection title="Solution overviews" links={solutionOverviews} />
      </div>
    </div>
  );
};

export default Resources;
