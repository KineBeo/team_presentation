import { AiOutlineCloudServer } from "react-icons/ai";
import MenuItemContent from "../MenuItemContent";
import PowerAndProtectYourAI from '/public/power-and-protect-your-ai-based-apps-with-f5.svg';
import QuickLinks from "../QuickLinks";
import { Button } from "@nextui-org/react";

const WEB_APP_API_PROTECTION = [
    {
        title: "Web App Firewall",
        description: "Reduce complexity and enforce consistent app security policies across clouds, on-prem and edge locations"
    },
    {
        title: "DDoS Protection",
        description: "Mitigate app-based (Layer 7) and volumetric (Layer 3) distributed denial of service (DDoS) attacks"
    },
    {
        title: "Bot Defense",
        description: "Detect and mitigate malicious bot attacks in real-time while ensuring an optimal user experience"
    },
    {
        title: "API Security",
        description: "Automatically discover API endpoints, allow legitimate transactions and monitor for anomalous behavior"
    },
    {
        title: "Client-Side Defense",
        description: "Protect customer credentials, financial details and PII against client-side supply chain attacks."
    },
    {
        title: "Web App Scanning",
        description: "Dynamically scan your external attack surface. Uncover vulnerabilities with automated penetration testing of web apps and APIs."
    }
];

const FRAUD_AND_RISK = [
    {
        title: 'Aggregator Management',
        description: 'Embrace open banking while managing the risk of aggregators and third-party providers'
    },
    {
        title: 'Data Intelligence',
        description: 'Unmask more fraud with rich user insights.'
    }
];

const MULTI_CLOUD_NETWORKING = [
    {
        title: 'Network Connect',
        description: 'Easily network across cloud locations and providers with simplified provisioning and end-to-end security',
    },
    {
        title: 'App Connect',
        description: 'Securely connect distributed workloads across cloud and edge locations with integrated app security',
    }
];

const PERFORMANCE_AND_RELIABILITY = [
    {
        title: 'App Stack',
        description: 'Securely deliver and connect apps deployed across edge sites while reducing complexity and infrastructure costs',
    },
    {
        title: 'DNS',
        description: 'Get primary or secondary DNS and boost app performance and resilience across clouds and zones globally',
    },
    {
        title: 'DNS Load Balancer',
        description: 'Simplify DNS management and load balancing and get cloud-based disaster recovery',
    },
    {
        title: 'CDN',
        description: 'Enable rich digital experiences with a high-performing multi-cloud and edge focused CDN',
    },
    {
        title: 'Synthetic Monitoring',
        description: 'Significantly reduce mean time to resolution of app issues through uptime, performance, and health analytics.',
    }
];

const PLATFORM = [
    {
        title: 'Platform Overview',
        description: 'Run apps in multi-cloud, on-premises and edge environments with a purpose-built cloud platform',
    },
    {
        title: 'Global Network',
        description: 'Provide secure connectivity over a private high-performance global backbone',
    },
    {
        title: 'Console',
        description: 'Simplify operations, maximize visibility and policy enforcement across a distributed cloud environment',
    },
    {
        title: 'Security Operations Center (SOC)',
        description: 'Our SOC engineers, deploy, manage, and support F5 Distributed Cloud Services as well as all F5 networks, globally',
    },
    {
        title: 'Managed Services',
        description: 'SaaS-delivered, managed security services for apps and business-critical infrastructure',
    }
];

const quickLinks = [
    {
        title: 'Distributed Cloud Services Overview',
        url: '#'
    }, {
        title: 'Documentation',
        url: '#'
    }, {
        title: 'Training',
        url: '#'
    }, {
        title: 'Resources',
        url: '#'
    }, {
        title: 'Compare Standard and Advanced',
        url: '#'
    }
];

export default function F5_Distributed_Cloud_Service() {
    return (
        <div className="flex flex-row m-0 mt-12 h-auto">
            <div className="flex-col px-12 w-[600px]">
                <div>
                    <AiOutlineCloudServer className="text-9xl" />
                    <h1 className="font-bold text-4xl">F5 Distributed Cloud Services {'>'}</h1>
                    <p className="pt-6 pb-8">Leverage a cloud-native environment to simplify app deployment, security, connectivity and operations.</p>
                </div>
                <div className="flex">
                    <div className="mini-laptop:flex desktop:flex-col laptop:flex-col">
                        <MenuItemContent title="Web App & API Protection" items={WEB_APP_API_PROTECTION} />
                        <MenuItemContent title="Fraud & Risk" items={FRAUD_AND_RISK} />
                        <MenuItemContent title="Multi-Cloud Networking" items={MULTI_CLOUD_NETWORKING} />
                    </div>
                    <div>
                        <MenuItemContent title="Performance and Reliability" items={PERFORMANCE_AND_RELIABILITY} />
                        <MenuItemContent title="Platform" items={PLATFORM} />
                    </div>
                </div>
            </div>
            <div className="flex-col w-[350px] h-full">
                <QuickLinks links={quickLinks} />
                <div className="flex flex-col justify-center items-center bg-neutral-900 mt-6 w-72 h-96">
                    <img src={PowerAndProtectYourAI} alt="Power and Protect Your AI" className="pt-8 size-20" />
                    <Button className="bg-sky-600 hover:bg-sky-500 w-1/3">See how</Button>
                </div>
            </div>
        </div>
    );
}