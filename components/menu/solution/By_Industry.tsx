import { AiOutlineCloudServer } from "react-icons/ai";
import MenuItemContent, { MenuItemSubContent } from "../MenuItemContent";
import PowerAndProtectYourAI from '/public/power-and-protect-your-ai-based-apps-with-f5.svg';
import QuickLinks from "../QuickLinks";
import { Button } from "@nextui-org/react";
import { BsGear } from "react-icons/bs";

const FIRST_COLUMN = [
    {
        title: "Web Application and API Protection",
        description: "Reduce risk and complexity so you can continue moving your business forward."
    },
    {
        title: "Fraud and Abuse Prevention",
        description: "Protect against fraud while keeping apps available for legitimate users."
    },
    {
        title: "Zero Trust Security",
        description: "Prevent unauthorized access to your networks, applications, and APIs."
    }
];

const SECOND_COLUMN = [
    {
        title: "Secure Multicloud Networking",
        description: "Connect, secure, and manage apps and APIs across multicloud and hybrid architectures."
    },
    {
        title: "Application and Network Performance",
        description: "Increase availability and performance of your apps to optimize user experience."
    },
    {
        title: "Modern Application Delivery",
        description: "Meet customer demands and improve digital experiences."
    }
];

export const BY_INDUSTRY_ALL_ITEMS = [
    ...FIRST_COLUMN,
    ...SECOND_COLUMN
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

export default function By_Industry() {
    return (
        <div className="flex flex-row m-0 mt-12 h-auto">
            <div className="flex-col px-12 w-[600px]">
                <div>
                    <BsGear className="text-9xl" />
                    <h1 className="font-bold text-4xl">F5 Distributed Cloud Services {'>'}</h1>
                    <p className="pt-6 pb-8">Leverage a cloud-native environment to simplify app deployment, security, connectivity and operations.</p>
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
                <QuickLinks links={quickLinks} />
                <div className="flex flex-col justify-center items-center bg-neutral-900 mt-6 w-72 h-96">
                    <img src={PowerAndProtectYourAI} alt="Power and Protect Your AI" className="pt-8 size-20" />
                    <Button className="bg-sky-600 hover:bg-sky-500 w-1/3">See how</Button>
                </div>
            </div>
        </div>
    );
}