import { CiCloudSun } from "react-icons/ci";
import MenuItemContent from "../MenuItemContent";
import QuickLinks from "../QuickLinks";
import { Button } from "@nextui-org/react";

const BIG_IP_SECURITY = [
    {
        title: "BIG-IP Access Policy Manager",
        description: "Secures, simplifies, and protects user access to apps and data"
    },
    {
        title: "BIG-IP Advanced Firewall Manager",
        description: "Protects your network against incoming threats, including complex DDOS attacks"
    },
    {
        title: "BIG-IP Advanced WAF",
        description: "Protects apps with behavioral analytics, bot defense, and app-layer encryption"
    },
    {
        title: "BIG-IP Carrier-Grade NAT (CGNAT)",
        description: "Fast, scalable, and secure IPv4/IPv6 IP address management as part of a suite of consolidated functions"
    },
    {
        title: "BIG-IP DDoS Hybrid Defender",
        description: "Delivers DDoS protection for the network and at the app layer with flexibility and scale"
    },
    {
        title: "BIG-IP SSL Orchestrator",
        description: "Maximizes infrastructure efficiencies and security with encryption/decryption and traffic steering"
    }
];

const BIG_IP_NEXT = [
    {
        title: "BIG-IP Next",
        description: "Next-gen BIG-IP software that simplifies operations, increases security and boosts performance"
    },
    {
        title: "BIG-IP Next Cloud-Native Network Functions",
        description: "Cloud-native solutions that help you transition to cloud and 5G"
    },
    {
        title: "BIG-IP Next Service Proxy for Kubernetes",
        description: "Gives multi-protocol ingress/egress signaling control, security, and visibility for cloud-native 5G"
    },
    {
        title: "BIG-IP Next Service Communication Proxy",
        description: "Serves as a central point for signaling communication, visibility, and security in the 5G core"
    }
];

const BIG_IP_APPLICATION_DELIVERY = [
    {
        title: "BIG-IP DNS",
        description: "Provides hyperscale and security during high query volumes and DNS DDoS attacks"
    },
    {
        title: "BIG-IP Local Traffic Manager",
        description: "Manages network traffic so applications are always fast, available, and secure"
    },
    {
        title: "BIG-IP Policy Enforcement Manager",
        description: "Improves network performance through effective policy management"
    },
    {
        title: "BIG-IP Automation Toolchain",
        description: "Automatically provision, configure, and manage the BIG-IP services that support your apps"
    },
    {
        title: "BIG-IP Container Ingress Services",
        description: "Provides automation, orchestration, and networking services for container deployments"
    }
];

const BIG_IP_VIRTUAL_EDITION = [
    {
        title: "BIG-IP Virtual Edition",
        description: "Software-based traffic management, app security, and visibility"
    }
];

const QUICK_LINKS = [
    {
        title: "Customer Case Studies",
        url: "#"
    },
    {
        title: "Product Datasheets",
        url: "#"
    },
    {
        title: "Professional Services",
        url: "#"
    },
    {
        title: "Software Download",
        url: "#"
    },
    {
        title: "View All F5 Resources",
        url: "#"
    }
];


export default function F5_BIG_IP() {



    return (
        <div className="flex flex-row m-0 mt-12 h-full">
            <div className="flex-col px-12 w-[600px]">
                <div>
                    <CiCloudSun className="text-9xl" />
                    <h1 className="font-bold text-4xl">F5 NGINX {'>'}</h1>
                    <p className="pt-6 pb-8">Modernizes apps at scale with high-performance app delivery spanning monoliths to microservices</p>
                </div>
                <div className="flex">
                    <div className="flex flex-col">
                        <MenuItemContent title="BIG-IP Security" items={BIG_IP_SECURITY} />
                        <MenuItemContent title="BIP-IP Next" items={BIG_IP_NEXT} />
                    </div>
                    <div className="flex flex-col">
                        <MenuItemContent title="BIG-IP Application Delivery" items={BIG_IP_APPLICATION_DELIVERY} />
                        <MenuItemContent title="BIG-IP Virtual Edition" items={BIG_IP_VIRTUAL_EDITION} />
                    </div>
                </div>
            </div>
            <div className="flex-col w-[350px] h-full">
                <QuickLinks links={QUICK_LINKS} />
                <div className="flex flex-col justify-center items-center bg-neutral-900 mt-6 w-72 h-96">
                    <Button className="bg-sky-600 hover:bg-sky-500 w-1/3">See how</Button>
                </div>
            </div>
        </div>
    );
}