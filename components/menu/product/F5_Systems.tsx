import { RiDatabaseLine } from "react-icons/ri";
import MenuItemContent, { MenuItemSubContent } from "../MenuItemContent";
import QuickLinks from "../QuickLinks";
import { Button } from "@nextui-org/react";


const F5_SYSTEMS = [
    {
        title: "rSeries Appliances",
        description: "A fully automatable architecture, and the highest reliability, security and access control for your critical applications"
    },
    {
        title: "BIG-IP iSeries Appliances",
        description: "Programmable ADC appliances with L4 and L7 throughput and connection rates"
    },
    {
        title: "VELOS Chassis and Blades",
        description: "Gives you the agility and scale of modern architectures"
    },
    {
        title: "VIPRION Chassis and Blades",
        description: "Extends your infrastructure by adding blades without disrupting apps or users"
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

export default function F5_Systems() {
    return (
        <div className="flex flex-row m-0 mt-12 h-full">
            <div className="flex-col px-12 w-[600px]">
                <div>
                    <RiDatabaseLine className="text-9xl" />
                    <h1 className="font-bold text-4xl">F5 Systems {'>'}</h1>
                    <p className="pt-6 pb-8">Deploy your applications on-premises, in the cloud, or both.</p>
                </div>
                <div className="flex">
                    <div className="flex flex-col">
                        <MenuItemSubContent
                            title={F5_SYSTEMS[0].title}
                            description={F5_SYSTEMS[0].description} />
                        <MenuItemSubContent
                            title={F5_SYSTEMS[1].title}
                            description={F5_SYSTEMS[1].description} />
                    </div>
                    <div className="flex flex-col">
                        <MenuItemSubContent
                            title={F5_SYSTEMS[2].title}
                            description={F5_SYSTEMS[2].description} />
                        <MenuItemSubContent
                            title={F5_SYSTEMS[3].title}
                            description={F5_SYSTEMS[3].description} />
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