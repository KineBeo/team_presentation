import { BenefitProps } from "../Benefits";
import { ResourcesProps } from "../Resources";
import { OverViewProps  } from "../Overview";
import { exploreCysLabsProps } from "../ExploreCysLabsSection";
import { NextStepProps } from "../NextSteps";
export const overviewData : OverViewProps = {
  title:"Get App Security Without Compromise",
  description:["Attackers follow the money. In a digital economy, this means targeting web apps and APIs to exploit vulnerabilities, abuse business logic, and bypass access controls—leading to data breach, account takeover, and downtime that can devastate your business. In order to effectively mitigate these attacks, you need comprehensive, consistent security that protects your entire digital business—from code to runtime."
    , "Cyslabs solutions run anywhere and protect apps and APIs everywhere—in thedata center, across clouds, at the edge, behind your mobile apps, withinyour third- party integrations—continuously defending the digitalendpoints that drive business, so that your customers can deliver great experiences every time."  
    ]
}

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
export const exploreCysLabsData: exploreCysLabsProps[] =[
 {
      title : "Mitigate Application Vulnerabilities",
      description:"Protecting your apps against critical risks—such as the threats listed in the OWASP Top 10—requires comprehensive and consistent security. F5 solutions protect apps and APIs everywhere with comprehensive security controls and uniform observability and enforcement—including virtual patching of risks discovered through penetration testing, and simplified lifecycle management of security policies across hybrid and multicloud environments for all application architectures.",
      imageSrc:"/images/what-we-do/product-development/vignette-mitigate-app.png",
      learnMoreLink:"#",
      imagePosition:"left"
},
  {
      title:"Mitigate Bots and Abuse",
      description:"Just as enterprises embrace automation to gain process efficiencies, attackers leverage bots and automation to scale their attacks, bypass security countermeasures, and take over customer accounts. F5 solutions employ durable telemetry, actionable insights, and human powered AI to maintain resilience and adapt to attacker retooling —ensuring business and customer success.",
      imageSrc:"/images/what-we-do/product-development/vignette-mitigate-bots-abuse.png",
      learnMoreLink:"#",
      imagePosition:"right",
    },
    {
       title:"Protect Against DDoS Attacks",
        description:"Organizations of all sizes run the risk of being hit with denial-of-service attacks. The common goal of these attacks is to disrupt performance and availability, but the attacks themselves vary. F5 solutions connect into any architecture to combat blended, multi-vector DoS and DDoS attacks in the deployment model that makes sense for your business.",
        imageSrc:"/images/what-we-do/product-development/vignette-secure-APIs-third-party-integrations.png",
        learnMoreLink:"#",
        imagePosition:"left"
    }
    ,{
         title:"Secure Mobile Apps",
        description:"F5 solutions protect mobile apps with in-app protection and application shielding to prevent tampering and reverse engineering while streamlining SDK deployments.",
        imageSrc:"/images/what-we-do/product-development/vignette-protect-against-DDoS-attacks.png",
        learnMoreLink:"#",
        imagePosition:"right"
    }
    ,{
        title:"Secure APIs and Third-Party Integrations",
        description:"APIs are the cornerstone of modern applications and allow organizations to quickly integrate new capabilities into their digital experiences.There will be over 1 billion APIs in use by 2031—requiring a new paradigm to holistically defend APIs end-to-end.  F5 solutions provide universal visibility and dynamically discover and protect API endpoints while streamlining operations using AIOps.",
        imageSrc:"/images/what-we-do/product-development/vignette-mobile-app-security.png",
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