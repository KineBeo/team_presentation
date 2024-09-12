import { BenefitProps } from "../Benefits";
import { ResourcesProps } from "../Resources";
import { OverViewProps  } from "../Overview";
import { exploreCysLabsProps } from "../ExploreCysLabsSection";
import { NextStepProps } from "../NextSteps";

export const overviewData : OverViewProps = {
  title:"Deliver Applications and APIs across Multicloud Environments with Speed and Security",
  description:["Organizations now face a number of challenges in multicloud environments, including increased complexity, cost, and risk. F5 Distributed Cloud Services accelerates application deployments and migrations in hybrid and multicloud environments providing the security and resilience that modern digital infrastructures require."]
}

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
  }
]
export const exploreCysLabsData: exploreCysLabsProps[] =[
 {
      title : "Distributed App Security",
      description:"Secure applications and APIs anywhere with SaaS-delivered web app and API protection to simplify operations and reduce complexity with centralized security policy enforcement and visibility.",
      imageSrc:"/images/what-we-do/product-development/vignette-mitigate-app.png",
      learnMoreLink:"#",
      imagePosition:"left"
},
  {
      title:"Hybrid and Multicloud Networking",
      description:"Simplify network and application connectivity across distributed cloud environments while reducing the impact of skill gaps within your organization.",
      imageSrc:"/images/what-we-do/product-development/vignette-mitigate-bots-abuse.png",
      learnMoreLink:"#",
      imagePosition:"right",
    },
    {
       title:"Manage and Scale Edge Networks",
        description:"Deploy and run container and microservice applications anywhere from edge to cloud with native lifecycle management and security.",
        imageSrc:"/images/what-we-do/product-development/vignette-secure-APIs-third-party-integrations.png",
        learnMoreLink:"#",
        imagePosition:"left"
    }

]

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
export const stepData : NextStepProps[] = [
  {
    icon :"Laptop",
    title: "{<> Tour the F5 <br /> Product Demo <br /> Center</>}" ,
    description: "See F5 Web App and API Protection solutions in action.",
    buttonText:"Check it out"
  },
    {
    icon :"Laptop",
    title: "{<> Tour the F5 <br /> Product Demo <br /> Center</>}" ,
    description: "See how F5 app security solutions work with a free trial.",
    buttonText:"Start today"
  },
    {
    icon :"Laptop",
    title: "{<> Tour the F5 <br /> Product Demo <br /> Center</>}" ,
    description: "Find out how F5 products and solutions can enable you to achieve your goals.",
    buttonText:"Contact us"
  }

]