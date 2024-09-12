import {
    Accordion,
    AccordionItem,
    Modal,
    ModalBody,
    ModalContent,
    useDisclosure,
} from "@nextui-org/react";
import React from "react";

export default function GetInformationMenuMobile() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <div onClick={onOpen}>Get CYCSLAB</div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="full"
                placement="top"
                scrollBehavior="inside"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className="p-0 h-screen overflow-auto">
                                <div className="flex justify-center items-center border-slate-100 border-b-1 w-full h-10">
                                    <h1 className="font-bold text-xl">PARTNERS</h1>
                                </div>
                                <p className="ml-4 w-full font-bold text-xl">EXPLORE F5 PARTNERS</p>
                                <p className="border-slate-100 ml-6 border-b-1 w-full h-10 font-semibold">
                                    F5 Partner Program Overview &gt;
                                </p>
                                <p className="border-slate-100 ml-6 border-b-1 w-full h-10 font-semibold">
                                    Find a Reseller Partner &gt;
                                </p>
                                <p className="border-slate-100 ml-6 border-b-1 w-full h-10 font-semibold">
                                    Technology Alliances &gt;
                                </p>
                                <p className="ml-4 w-full font-bold text-xl">PARTNER PROGRAMS AND RESOURCES</p>
                                <p className="border-slate-100 ml-6 border-b-1 w-full h-10 font-semibold">
                                    View All Partner Programs and Resources &gt;
                                </p>
                                <p className="border-slate-100 ml-6 border-b-1 w-full h-10 font-semibold">
                                    F5 Partner Programs &gt;
                                </p>
                                <p className="border-slate-100 ml-6 border-b-1 w-full h-10 font-semibold">
                                    Partner Central &gt;
                                </p>

                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div >
    );
}
