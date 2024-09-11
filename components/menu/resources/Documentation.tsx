import { GrDocumentText } from "react-icons/gr";
import MenuItemContent, { MenuItemSubContent } from "../MenuItemContent";
import QuickLinks from "../QuickLinks";
import { Button } from "@nextui-org/react";

const FIRST_COLUMN = [
    { title: "API Documentation", description: "Documentation on programmable APIs for F5's BIG-IP product" },
    { title: "Articles", description: "Dive more deeply into trends, solutions, and light technical details." },
    { title: "Integration Guides", description: "Expert advice on deploying F5 solutions with partner technologies" },
    { title: "Demo Center", description: "On-demand demonstrations for F5 product consoles and administration user experiences." },
    { title: "Deployment Guides", description: "Step-by-step configuration procedures for deploying F5 products" },
    { title: "Glossary", description: "Definitions of common terms used in relation to F5 technology" },
    { title: "Infographics", description: "Visual stories about F5 products, services, and industry trends" },
    { title: "KB Articles", description: "Articles for self-service help on F5 products and services" },
    { title: "Product Certifications", description: "Information on BIG-IP's compliance with Federal Information Processing Standards" }
];

const SECOND_COLUMN = [
    { title: "Product Datasheets", description: "Features, specs, system requirements, and more on F5 products and services" },
    { title: "Product Documentation", description: "Announcements, release notes, and product guides for F5 products" },
    { title: "Reference Architecture", description: "How F5 products interact with different tools and partner solutions" },
    { title: "Reports", description: "Get the latest F5 thought leadership, exploring current and emerging technology trends" },
    { title: "Solution Profiles", description: "Information on how F5 addresses specific technical issues" },
    { title: "Visio Stencils", description: "Build Visio diagrams to show integration of F5 products into your infrastructure" },
    { title: "Webinars", description: "Explore best practices and solutions for application services, cloud, and security." },
    { title: "White Papers", description: "In-depth documentation that provides real-world context for F5 technologies" }
];

export const DOCUMENTATION_ALL_ITEMS = [
    ...FIRST_COLUMN,
    ...SECOND_COLUMN
];

const QUICK_LINKS = [
    { title: "Blog", url: "#" },
    { title: "Customer Case Studies", url: "#" },
    { title: "DevCentral", url: "#" },
    { title: "Software Downloads", url: "#" },
    { title: "Support Portal", url: "#" }
];

export default function Documentation() {

    return (
        <div className="flex flex-row m-0 mt-12 h-auto">
            <div className="flex-col px-12 w-[600px]">
                <div>
                    <GrDocumentText className="text-9xl" />
                    <h1 className="font-bold text-4xl">Documentation {'>'}</h1>
                    <p className="pt-6 pb-8">Documentation, guides, and visual tools to support streamlined deployments of F5 products and services</p>
                </div>
                <div className="flex mini-laptop:flex-col">
                    <div>
                        {FIRST_COLUMN.map((item, index) => (
                            <MenuItemSubContent key={index} title={item.title} description={item.description} />
                        ))}
                    </div>
                    <div>
                        {SECOND_COLUMN.map((item, index) => (
                            <MenuItemSubContent key={index} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mini-laptop:w-[300px] flex-col w-[350px] h-full">
                <QuickLinks links={QUICK_LINKS} />
                <div className="flex flex-col justify-center items-center bg-neutral-900 mt-6 w-72 h-96">
                    <img src="/images/topic2.png" alt="Power and Protect Your AI" className="pt-8 size-20" />
                    <Button className="bg-sky-600 hover:bg-sky-500 w-1/3">See how</Button>
                </div>
            </div>
        </div>
    );
}