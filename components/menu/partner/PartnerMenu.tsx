import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { Label } from "flowbite-react";
import QuickLinks from "../QuickLinks";
import { title } from "process";
import { RiUserSearchLine } from "react-icons/ri";
import { GiAchievement } from "react-icons/gi";
import { MenuItemSubContent } from "../MenuItemContent";

export default function PartnerMenu() {
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
            <Label onClick={onOpen} className="font-bold text-base cursor-pointer">PARTNERS</Label>
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
                                    <RiUserSearchLine className="text-9xl" />
                                    <h1 className="mt-8 font-bold text-xl">Explore F5 Partners {'>'}</h1>
                                    <p className="pt-6 pb-8">
                                        Explore F5 resellers and learn more about our tech alliances.
                                    </p>
                                    <MenuItemSubContent
                                        title="Find a Reseller Partner"
                                        description="Find an F5 partner to help with buying, deploying, and managing F5 solutions." />
                                    <MenuItemSubContent
                                        title="Technology Alliances"
                                        description="Learn more about F5's alliances with leading tech companies." />
                                </div>
                                <div className="px-8 w-1/2">
                                    <GiAchievement className="text-9xl" />
                                    <h1 className="mt-8 font-bold text-xl">Partner Programs and Resources {'>'}</h1>
                                    <p className="pt-6 pb-8">
                                        Apply to become an F5 partner and access our partner resources.
                                    </p>
                                    <MenuItemSubContent
                                        title="F5 Partner Programs"
                                        description="Learn more about F5's partner programs and apply to become an F5 partner." />
                                    <MenuItemSubContent
                                        title="Partner Central"
                                        description="View F5's partner web portal for partner resources and support." />
                                    <MenuItemSubContent
                                        title="NGINX Consulting Partners"
                                        description="Are you a Cloud Integrator or Solution Provider business? Become part of the NGINX Authorized Consulting Partners." />

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