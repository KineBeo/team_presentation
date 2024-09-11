import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { Label } from "flowbite-react";
import QuickLinks from "../QuickLinks";
import { title } from "process";
import { RiUserSearchLine } from "react-icons/ri";
import { GiAchievement } from "react-icons/gi";
import MenuItemContent, { MenuItemSubContent } from "../MenuItemContent";
import { BiSupport } from "react-icons/bi";

export default function SupportMenu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const BIP_IP_SYSTEMS = {
        title: "BIG-IP Systems",
        items: [
            { title: "Support Portal", description: "Find self-service support on a variety of topics." },
            { title: "Professional Services", description: "Get professional help architecting, implementing, and maintaining F5 solutions." },
            { title: "Activate Registration Keys", description: "Activate registration keys for your F5 products." },
            { title: "Bug Tracker", description: "Find helpful information on known issues and how to fix them." },
            { title: "Create a Service Request", description: "Create a service request to get support with your F5 products." },
            { title: "Software Downloads", description: "Download software, patches, and other files for your F5 products." }
        ]
    };


    const NGINX = {
        title: "NGINX",
        items: [
            { title: "Commercial Software Updates", description: "Find product releases for NGINX Commercial products." },
            { title: "Commercial Product Documentation", description: "Find product documentation for NGINX Commercial products." },
            { title: "Open Source Product Updates and Documentation", description: "Find product releases and documentation for NGINX Open Source products." }
        ]
    };

    const DISTRIBUTED_CLOUD_SERVICES = {
        title: "Distributed Cloud Services",
        items: [
            { title: "Documentation", description: "The official documentation repository for F5 Distributed Cloud." },
            { title: "Quick Start", description: "View guides providing common instructions for Distributed Cloud products and use cases." },
            { title: "System Status", description: "View the status of all our products/services, customer dashboard, APIs, and our global network PoPs." },
            { title: "Feature Requests", description: "Connect with the F5 Distributed Cloud team to request new features or suggest modifications to existing features." },
            { title: "Compliance", description: "F5 adheres to industry standard compliance certifications and security regulations to earn our customers’ trust. View our compliances here." }
        ]
    };

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
            <Label onClick={onOpen} className="font-bold text-base cursor-pointer">SUPPORT</Label>
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
                            <div className="flex flex-col p-12 w-full">
                                <div>
                                    <BiSupport className="text-9xl" />
                                    <h1 className="mt-8 font-bold text-xl">F5 Global Support {'>'}</h1>
                                    <p>Get hands-on help with using and managing F5 products and services.</p>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-1/2">
                                        <MenuItemContent title={BIP_IP_SYSTEMS.title} items={BIP_IP_SYSTEMS.items} />
                                        <MenuItemContent title={NGINX.title} items={NGINX.items} />
                                    </div>
                                    <div className="w-1/2">
                                        <MenuItemContent title={DISTRIBUTED_CLOUD_SERVICES.title} items={DISTRIBUTED_CLOUD_SERVICES.items} />
                                    </div>
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