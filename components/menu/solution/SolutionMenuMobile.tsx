import {
    Accordion,
    AccordionItem,
    Modal,
    ModalBody,
    ModalContent,
    useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { BY_SOLUTION_AREA_ALL_ITEMS } from "./By_Solution_Area";
import { BY_INDUSTRY_ALL_ITEMS } from "./By_Industry";
import { BY_CLOUD_PARTNERS_ALL_ITEMS } from "./By_Cloud_Partners";

export default function MenuItemContent() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <div onClick={onOpen}>Solutions</div>
            <Modal
                className="mobile:flex tablet:hidden"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="normal"
                size="full"
                placement="top"
            >
                <ModalContent className="h-full">
                    {(onClose) => (
                        <>
                            <ModalBody className="p-0 h-full overflow-auto">
                                <div className="flex justify-center items-center border-slate-100 border-b-1 w-full min-h-10">
                                    <h1 className="font-bold text-xl">SOLUTIONS</h1>
                                </div>
                                <div className="flex justify-start items-center border-slate-100 border-b-1 w-full h-10">
                                    <p className="ml-4 font-bold text-xl">SOLUTIONS</p>
                                </div>
                                <p className="border-slate-100 ml-4 border-b-1 h-8 font-semibold text-xl">
                                    View all solutions {">"}
                                </p>
                                <Accordion
                                    className="mt-0 h-8 text-base"
                                    selectionMode="multiple"
                                >
                                    <AccordionItem
                                        title="By Solution Area"
                                        className="border-slate-100 ml-4 border-b-1 font-semibold"
                                    >
                                        <p
                                            key="index"
                                            className="border-slate-100 ml-6 border-b-1 h-10"
                                        >
                                            View all F5 Distributed Cloud Service &gt;
                                        </p>
                                        {BY_SOLUTION_AREA_ALL_ITEMS.map((item, index) => (
                                            <p
                                                key="index"
                                                className="border-slate-100 ml-10 border-b-1 h-10"
                                            >
                                                {item.title} &gt;
                                            </p>
                                        ))}
                                    </AccordionItem>
                                    <AccordionItem
                                        title="By Industry"
                                        className="border-slate-100 ml-4 border-b-1 font-semibold"
                                    >
                                        <p
                                            key="index"
                                            className="border-slate-100 ml-6 border-b-1 h-10"
                                        >
                                            View all F5 NGINX &gt;
                                        </p>
                                        {BY_INDUSTRY_ALL_ITEMS.map((item, index) => (
                                            <p
                                                key="index"
                                                className="border-slate-100 ml-10 border-b-1 h-10"
                                            >
                                                {item.title} &gt;
                                            </p>
                                        ))}
                                    </AccordionItem>
                                    <AccordionItem
                                        title="By Cloud Partners"
                                        className="border-slate-100 ml-4 border-b-1 font-semibold"
                                    >
                                        <p
                                            key="index"
                                            className="border-slate-100 ml-6 border-b-1 h-10"
                                        >
                                            View all F5 BIG-IP &gt;
                                        </p>
                                        {BY_CLOUD_PARTNERS_ALL_ITEMS.map((item, index) => (
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
