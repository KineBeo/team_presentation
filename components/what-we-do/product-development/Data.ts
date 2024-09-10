import { BenefitProps } from "./Benefits";
import { ResourcesProps } from "./Resources";

export const resourcesData: ResourcesProps = {
  featuredReport: {
    title: "State of Application Strategy Report",
    description: "F5 research shows that AI will further drive API proliferation as AI engines will be located both in the public cloud and on-premises and AI apps are connected via APIs.",
    buttonText: "Get the State of Application Strategy Report",
  },
  assessments: [
    { title: "Evaluate Your API Security Posture", href: "#" },
  ],
  reports: [
    { title: "2023 Gartner® Market Guide for Cloud Web Application and API Protection", href: "#" },
    { title: "The Eight Components Of API Security", href: "#" },
    { title: "Datos Insights API Security Solution Evaluation Guide", href: "#" },
    { title: "Modern Application Security Trends Drive WAAP Adoption", href: "#" },
  ],
  articles: [
    { title: "Multi-Cloud Challenges with Security and Strategy", href: "#" },
    { title: "Out of the Shadows: API Discovery and Security", href: "#" },
    { title: "WAAP Buying Guide", href: "#" },
    { title: "Brightboard Lessons: Hybrid and Multi-Cloud Security", href: "#" },
  ],
  customerStoriesAndWebinars: [
    { title: "BlueShore Financial Makes Financial Wellness Secure with F5", href: "#" },
    { title: "OWASP Top 10 2021: The New Risk Order", href: "#" },
    { title: "OWASP Automated Threats: 21 Fraud Street", href: "#" },
    { title: "Application Security for a Hybrid and Multi-Cloud Digital World", href: "#" },
  ],
  solutionOverviews: [
    { title: "F5 Distributed Cloud API Security", href: "#" },
    { title: "Power and Protect Your AI Journey", href: "#" },
    { title: "Transform Cloud Log Data into Business Intelligence", href: "#" },
  ],
};

export const benefitData : BenefitProps[] = [
  {
    title:"Continuous Defense",
    description:"F5 mitigates risk and improves digital resiliency by continuously defending critical business logic behind apps and APIs."
  },
   {
    title:"Consistent Security",
    description:"F5 dramatically simplifies operations to reduce tool sprawl and complexity by providing end-to-end observability and uniformly protecting the entire digital fabric."
  },
   {
    title:"Confident Innovation",
    description:"F5 solutions allow customers to grow with confidence by aligning security to digital strategy and removing the burden of manual policy tuning and remediation fire drills that distract your teams from their core mission."
  },
   {
    title:"API Protection",
    description:"F5 secures your APIs across a complex hybrid and multi-cloud fabric with F5® Distributed Cloud WAAP—reducing risk and complexity while improving operational efficiencies—so you maintain visibility and control across your entire digital ecosystem."
  }
  
]