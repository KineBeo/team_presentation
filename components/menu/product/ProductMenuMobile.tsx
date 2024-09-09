import { Accordion, AccordionItem, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import React from "react";
import { F5_DISTRIBUTED_CLOUD_SERVICE_ITEMS } from "./F5_Distributed_Cloud_Service";
import { F5_NGINX_ITEMS } from "./F5_NGINX";
import { F5_BIG_IP_ITEMS } from "./F5_BIG_IP";
import { F5_SYSTEMS_ITEMS } from "./F5_Systems";

export default function MenuItemContent() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    function handleButtonClick() {
        console.log("Product clicked");
        onOpen();
    }

    return (


        <div>
            <div onClick={handleButtonClick}>
                Products
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="full"
                placement="top"
                scrollBehavior='inside'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className="p-0 h-screen overflow-auto">
                                <div className="flex justify-center items-center border-slate-100 border-b-1 w-full h-10">
                                    <h1 className="font-bold text-xl">PRODUCTS</h1>
                                </div>
                                <div className="flex justify-start items-center border-slate-100 border-b-1 w-full h-10">
                                    <p className="ml-4 font-bold text-xl">PRODUCTS</p>
                                </div>
                                <p className="border-slate-100 ml-4 border-b-1 h-8 font-semibold text-xl">View all products {'>'}</p>
                                <Accordion
                                    className="mt-0 h-8 text-base"
                                    selectionMode='multiple'>
                                    <AccordionItem
                                        title="F5 Distributed Cloud Service"
                                        className="border-slate-100 ml-4 border-b-1 font-semibold">
                                        <p key='index' className="border-slate-100 ml-6 border-b-1 h-10">View all F5 Distributed Cloud Service &gt;</p>
                                        {F5_DISTRIBUTED_CLOUD_SERVICE_ITEMS.map((item, index) => (
                                            <p key='index' className="border-slate-100 ml-10 border-b-1 h-10">{item.title} &gt;</p>
                                        ))}
                                    </AccordionItem>
                                    <AccordionItem
                                        title="F5 NGINX"
                                        className="border-slate-100 ml-4 border-b-1 font-semibold">
                                        <p key='index' className="border-slate-100 ml-6 border-b-1 h-10">View all F5 NGINX &gt;</p>
                                        {F5_NGINX_ITEMS.map((item, index) => (
                                            <p key='index' className="border-slate-100 ml-10 border-b-1 h-10">{item.title} &gt;</p>
                                        ))}
                                    </AccordionItem>
                                    <AccordionItem
                                        title="F5 BIG-IP"
                                        className="border-slate-100 ml-4 border-b-1 font-semibold">
                                        <p key='index' className="border-slate-100 ml-6 border-b-1 h-10">View all F5 BIG-IP &gt;</p>
                                        {F5_BIG_IP_ITEMS.map((item, index) => (
                                            <p key='index' className="border-slate-100 ml-10 border-b-1 h-10">{item.title} &gt;</p>
                                        ))}
                                    </AccordionItem>
                                    <AccordionItem
                                        title="F5 systems"
                                        className="border-slate-100 ml-4 border-b-1 font-semibold">
                                        <p key='index' className="border-slate-100 ml-6 border-b-1 h-10">View all F5 systems &gt;</p>
                                        {F5_SYSTEMS_ITEMS.map((item, index) => (
                                            <p key='index' className="border-slate-100 ml-10 border-b-1 h-10">{item.title} &gt;</p>
                                        ))}
                                    </AccordionItem>
                                </Accordion>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}