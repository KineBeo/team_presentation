import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, NavbarItem, useDisclosure } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";


export default function ProductMenu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <NavbarItem onClick={onOpen}>
                PRODUCT
            </NavbarItem>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                size="full"
            >
                <ModalContent className="w-[1400px]">
                    {(onClose) => (
                        <ModalBody className="flex p-0">
                            <div className="flex-col justify-center items-center bg-sky-800 w-[400px] h-full">
                                <div className="flex justify-between items-end mt-8 border-b-2 w-full h-12">
                                    <p className="mb-2 ml-8 font-bold text-2xl text-white">PRODUCTS</p>
                                    <p className="mr-8 mb-2 text-white cursor-pointer">View all {">"} </p>
                                </div>
                                <button className="flex items-center pt-4 h-12 text-white hover:underline cursor-pointer">
                                    <p className="ml-8 w-[300px] h-8 text-left text-white group-hover:underline">
                                        F5 Distributed Cloud Services
                                    </p>
                                    <IoIosArrowForward className="text-2xl text-white" />
                                </button>

                                <button className="flex items-center pt-4 h-12 text-white hover:underline cursor-pointer">
                                    <p className="ml-8 w-[300px] h-8 text-left text-white group-hover:underline">
                                        F5 NGINX
                                    </p>
                                    <IoIosArrowForward className="text-2xl text-white" />
                                </button>

                                <button className="flex items-center pt-4 h-12 text-white hover:underline cursor-pointer">
                                    <p className="ml-8 w-[300px] h-8 text-left text-white group-hover:underline">
                                        F5 BIG-IP
                                    </p>
                                    <IoIosArrowForward className="text-2xl text-white" />
                                </button>

                                <button className="flex items-center pt-4 h-12 text-white hover:underline cursor-pointer">
                                    <p className="ml-8 w-[300px] h-8 text-left text-white group-hover:underline">
                                        F5 Systems
                                    </p>
                                    <IoIosArrowForward className="text-2xl text-white" />
                                </button>

                                <button className="flex items-center pt-4 h-12 text-white hover:underline cursor-pointer">
                                    <p className="ml-8 w-[300px] h-8 text-left text-white group-hover:underline">
                                        F5 Distributed Cloud Services
                                    </p>
                                    <IoIosArrowForward className="text-2xl text-white" />
                                </button>
                            </div>
                            <div>

                            </div>
                        </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}