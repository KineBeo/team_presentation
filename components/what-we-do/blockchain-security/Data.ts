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
    title:"Make Securing Multicloud Easy",
    description:"With an easy, efficient way to secure, scale, optimize, and manage all applications—no matter where they’re deployed—businesses can flourish in the multicloud world."
  },
   {
    title:"Enforce Consistent Security",
    description:"Securing both network and applications can be challenging and difficult to manage under multicloud environment. F5 has a solution that solves the operational challenges."
  },
   {
    title:"Deliver Efficient, Modern Applications",
    description:"Under multiple cloud environments, efficiently managing modern apps is a critical factor for the success of the business. F5 offers faster, reliable application delivery with visibility."
  },
   {
    title:"API Protection",
    description:"F5 secures your APIs across a complex hybrid and multi-cloud fabric with F5® Distributed Cloud WAAP—reducing risk and complexity while improving operational efficiencies—so you maintain visibility and control across your entire digital ecosystem."
  }
  
]