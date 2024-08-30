import MenuItemContent, { MenuItemSubContent } from "../MenuItemContent";
import QuickLinks from "../QuickLinks";
import { Button } from "@nextui-org/react";
import { TbHexagonLetterN } from "react-icons/tb";

const NGINX_PRODUCTS = [
    {
        title: 'NGINX Plus',
        description: 'An all-in-one, cloud-native load balancer, reverse proxy, web server, content cache, and API gateway'
    },
    {
        title: 'NGINX App Protect',
        description: 'A comprehensive WAF security and denial-of-service (DoS) defense solution designed to protect apps and APIs from layer 7 attacks'
    },
    {
        title: 'NGINX Instance Manager',
        description: 'Identifies, secures, manages, and monitors all NGINX Open Source and NGINX Plus instances in your organization'
    },
    {
        title: 'NGINX Ingress Controller',
        description: 'Implements unified API gateways, load balancers, and ingress controllers across Kubernetes environments and provides insights into app health and performance'
    },
    {
        title: 'NGINX Gateway Fabric',
        description: 'Streamlines app, service, and API connectivity across hybrid and multicloud Kubernetes environments with a unified app delivery fabric'
    },
    {
        title: 'NGINX One (preview)',
        description: 'Takes the core NGINX data plane software and enhances it with SaaS-based tools for observability, management, and security. Now available in early access only'
    }
];

const QUICK_LINKS = [
    {
        title: 'Customer Case Studies',
        url: '#'
    },
    {
        title: 'Product Datasheets',
        url: '#'
    },
    {
        title: 'Professional Services',
        url: '#'
    },
    {
        title: 'Software Download',
        url: '#'
    },
    {
        title: 'View All NGINX Resources',
        url: '#'
    }
];


export default function F5_NGINX() {
    return (
        <div className="flex flex-row m-0 mt-12 h-full">
            <div className="flex-col px-12 w-[600px]">
                <div>
                    <TbHexagonLetterN className="text-9xl" />
                    <h1 className="font-bold text-4xl">F5 NGINX {'>'}</h1>
                    <p className="pt-6 pb-8">Modernizes apps at scale with high-performance app delivery spanning monoliths to microservices</p>
                </div>
                <div className="flex">
                    <div className="flex flex-col">
                        <MenuItemSubContent title={NGINX_PRODUCTS[0].title} description={NGINX_PRODUCTS[0].description} />
                        <MenuItemSubContent title={NGINX_PRODUCTS[1].title} description={NGINX_PRODUCTS[1].description} />
                        <MenuItemSubContent title={NGINX_PRODUCTS[2].title} description={NGINX_PRODUCTS[2].description} />
                    </div>
                    <div className="flex flex-col">
                        <MenuItemSubContent title={NGINX_PRODUCTS[3].title} description={NGINX_PRODUCTS[3].description} />
                        <MenuItemSubContent title={NGINX_PRODUCTS[4].title} description={NGINX_PRODUCTS[4].description} />
                        <MenuItemSubContent title={NGINX_PRODUCTS[5].title} description={NGINX_PRODUCTS[5].description} />
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