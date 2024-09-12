import {
    Accordion,
    AccordionItem,
    Modal,
    ModalBody,
    ModalContent,
    useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { DOCUMENTATION_ALL_ITEMS } from "./Documentation";
import { EDUCATION_ALL_ITEMS } from "./Education";

export default function ResourcesMenuMobile() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <div onClick={onOpen}>Resources</div>
            <Modal
                className="mobile:flex tablet:hidden"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="normal"
                size="full"
                placement="top"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className="p-0 h-screen overflow-auto">
                                <div className="flex justify-center items-center border-slate-100 border-b-1 w-full h-10">
                                    <h1 className="font-bold text-xl">RESOURCES</h1>
                                </div>
                                <Accordion
                                    className="mt-0 h-8 text-base"
                                    selectionMode="multiple"
                                >
                                    <AccordionItem
                                        title="Documentation"
                                        className="border-slate-100 ml-4 border-b-1 font-semibold"
                                    >
                                        <p
                                            key="index"
                                            className="border-slate-100 ml-6 border-b-1 h-10"
                                        >
                                            View all F5 Distributed Cloud Service &gt;
                                        </p>
                                        {DOCUMENTATION_ALL_ITEMS.map((item, index) => (
                                            <p
                                                key="index"
                                                className="border-slate-100 ml-10 border-b-1 h-10"
                                            >
                                                {item.title} &gt;
                                            </p>
                                        ))}
                                    </AccordionItem>
                                    <AccordionItem
                                        title="Education"
                                        className="border-slate-100 ml-4 border-b-1 font-semibold"
                                    >
                                        <p
                                            key="index"
                                            className="border-slate-100 ml-6 border-b-1 h-10"
                                        >
                                            View all F5 NGINX &gt;
                                        </p>
                                        {EDUCATION_ALL_ITEMS.map((item, index) => (
                                            <p
                                                key="index"
                                                className="border-slate-100 ml-10 border-b-1 h-10"
                                            >
                                                {item.title} &gt;
                                            </p>
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
