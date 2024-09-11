import Image from "next/image";
import react from "react";
import FeatureSection from "./ReusableFeatureSection";
const ExploreSysLabs: React.FC = () => {
  return (
    <div>
      <FeatureSection
        title="Distributed App Security"
        description="Protecting your apps against critical risks—such as the threats listed in the OWASP Top 10—requires comprehensive and consistent security. F5 solutions protect apps and APIs everywhere with comprehensive security controls and uniform observability and enforcement—including virtual patching of risks discovered through penetration testing, and simplified lifecycle management of security policies across hybrid and multicloud environments for all application architectures."
        imageSrc="/images/what-we-do/product-development/vignette-mitigate-app.png"
        learnMoreLink="#"
        imagePosition="left"
      />
      <FeatureSection
        title="Hybrid and Multicloud Networking"
        description="Just as enterprises embrace automation to gain process efficiencies, attackers leverage bots and automation to scale their attacks, bypass security countermeasures, and take over customer accounts. F5 solutions employ durable telemetry, actionable insights, and human powered AI to maintain resilience and adapt to attacker retooling —ensuring business and customer success."
        imageSrc="/images/what-we-do/product-development/vignette-mitigate-bots-abuse.png"
        learnMoreLink="#"
        imagePosition="right"
      />
      <FeatureSection
        title="Manage and Scale Edge Networks"
        description="Organizations of all sizes run the risk of being hit with denial-of-service attacks. The common goal of these attacks is to disrupt performance and availability, but the attacks themselves vary. F5 solutions connect into any architecture to combat blended, multi-vector DoS and DDoS attacks in the deployment model that makes sense for your business."
        imageSrc="/images/what-we-do/product-development/vignette-secure-APIs-third-party-integrations.png"
        learnMoreLink="#"
        imagePosition="left"
      />
      <FeatureSection
        title="Secure Mobile Apps"
        description="F5 solutions protect mobile apps with in-app protection and application shielding to prevent tampering and reverse engineering while streamlining SDK deployments."
        imageSrc="/images/what-we-do/product-development/vignette-protect-against-DDoS-attacks.png"
        learnMoreLink="#"
        imagePosition="right"
      />
      <FeatureSection
        title="Secure APIs and Third-Party Integrations"
        description="APIs are the cornerstone of modern applications and allow organizations to quickly integrate new capabilities into their digital experiences.There will be over 1 billion APIs in use by 2031—requiring a new paradigm to holistically defend APIs end-to-end.  F5 solutions provide universal visibility and dynamically discover and protect API endpoints while streamlining operations using AIOps."
        imageSrc="/images/what-we-do/product-development/vignette-mobile-app-security.png"
        learnMoreLink="#"
        imagePosition="left"
      />
    </div>
  );
};
export default ExploreSysLabs;
