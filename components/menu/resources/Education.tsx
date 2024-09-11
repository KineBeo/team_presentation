import { Button } from "@nextui-org/react";
import QuickLinks from "../QuickLinks";
import { GoLightBulb } from "react-icons/go";
import MenuItemContent, { MenuItemSubContent } from "../MenuItemContent";


export default function Education() {

    const FIRST_COLUMN = [
        { title: "Professional Certification", description: "Career-advancing technical skills for F5 products and solutions" },
        { title: "Training", description: "Live virtual and on-site training, and F5 Digital Education to help you get the most from your F5 investment" }
    ];

    const SECOND_COLUMN = [
        { title: "Webinars", description: "Scheduled and on-demand F5 webinars covering a range of topics" }
    ];

    const QUICK_LINKS = [
        { title: "Events", url: "#" },
        { title: "Blog", url: "#" },
        { title: "Glossary", url: "#" },
        { title: "LearnF5", url: "#" },
        { title: "White Papers", url: "#" }
    ];

    return (
        <div className="flex flex-row m-0 mt-12 h-auto">
            <div className="flex-col px-12 w-[600px]">
                <div>
                    <GoLightBulb className="text-9xl" />
                    <h1 className="font-bold text-4xl">Education  {'>'}</h1>
                    <p className="pt-6 pb-8">
                        Featuring F5 Digital Education (self-paced eLearning), free online courses, virtual and on-site training, and the F5 Certified Professionals program
                    </p>
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