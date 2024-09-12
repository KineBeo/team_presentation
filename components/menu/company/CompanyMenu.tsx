import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { Label } from "flowbite-react";
import QuickLinks from "../QuickLinks";
import { MenuItemSubContent } from "../MenuItemContent";
import { TfiWorld } from "react-icons/tfi";
import { CiMicrophoneOn } from "react-icons/ci";

const COMPANY = [
    { title: "Leadership", description: "Learn about the F5 leadership team and the work they're doing." },
    { title: "Diversity & Inclusion", description: "See how F5 embraces a culture where everyone can be themselves." },
    { title: "F5 Global Good", description: "Learn about F5's commitment to being a force for social good." },
    { title: "Careers", description: "Want big-company opportunities with a small-company vibe? Join F5." },
    { title: "Contact Information", description: "Reach out to our Sales and Support Team or contact one of our regional offices." },
    { title: "Investor Relations", description: "View F5 financial reports, stock information, and investor contacts." },
    { title: "F5 Compliance", description: "Learn more about F5's certifications including GDPR, CCPA, and PCI DSS." }
];

const F5_NEWSROOM = [
    { title: "Blog", description: "Get the latest trends in digital transformation and application services." },
    { title: "Press Releases", description: "See announcements about product releases, partnerships, fiscal results, and more." },
    { title: "Events", description: "Join us for global conferences, webinars, and everything in between." },
    { title: "Features", description: "View a selection of featured articles from the F5 Newsroom." },
    { title: "Awards", description: "Learn about F5's awards and accolades." },
    { title: "Press Kit", description: "Get press materials like F5 logos and photos of F5 executives and our offices." }
];

export default function CompanyMenu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const quickLinks = [
        {
            title: 'F5 on Amazon Web Services',
            url: '#'
        }, {
            title: 'F5 on Google Cloud Platform',
            url: '#'
        }, {
            title: 'F5 on Microsoft Azure',
            url: '#'
        }, {
            title: 'F5 and Red Hat',
            url: '#'
        }, {
            title: 'Professional Certification',
            url: '#'
        }, {
            title: 'Professional Services',
            url: '#'
        }
    ];

    return (
        <div>
            <Label onClick={onOpen} className="font-bold text-base cursor-pointer">COMPANY</Label>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                size="full"
                className="desktop:flex laptop:flex mini-laptop:flex hidden"
            >
                <ModalContent className="p-0 w-[1400px] h-full">
                    {(onClose) => (
                        <ModalBody className="flex flex-row p-0 h-full"> {/* Ensure ModalBody is full height */}
                            <div className="flex flex-row p-12 w-full">
                                <div className="px-8 w-1/2">
                                    <TfiWorld className="text-9xl" />
                                    <h1 className="mt-8 font-bold text-xl">Company {'>'}</h1>
                                    <p className="pt-6 pb-8">
                                        Connect and learn about our mission to make apps available and secure, in any environment.
                                    </p>
                                    {COMPANY.map((item, index) => (
                                        <MenuItemSubContent key={index} title={item.title} description={item.description} />
                                    ))}
                                </div>
                                <div className="px-8 w-1/2">
                                    <CiMicrophoneOn className="text-9xl" />
                                    <h1 className="mt-8 font-bold text-xl">F5 Newsroom {'>'}</h1>
                                    <p className="pt-6 pb-8">
                                        View the latest F5 blogs, press releases, events, and articles.
                                    </p>
                                    {F5_NEWSROOM.map((item, index) => (
                                        <MenuItemSubContent key={index} title={item.title} description={item.description} />
                                    ))}
                                </div>
                            </div>
                            <div className="mini-laptop:w-[300px] flex-col mt-8 mr-12 w-[350px] h-full">
                                <QuickLinks links={quickLinks} />
                                <div className="flex flex-col justify-center items-center bg-neutral-900 mt-6 w-72 h-96">
                                    <img alt="Power and Protect Your AI" src="/images/topic2.png" className="pt-8 size-20" />
                                    <Button className="bg-sky-600 hover:bg-sky-500 w-1/3">See how</Button>
                                </div>
                            </div>
                        </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </div >
    )
}