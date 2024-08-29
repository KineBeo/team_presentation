import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, NavbarItem, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import MenuItem from "./MenuItem";
import { Label } from "flowbite-react";
import { AiOutlineCloudServer } from "react-icons/ai";
import MenuItemContent from "./MenuItemContent";



export default function ProductMenu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [activeButton, setActiveButton] = useState(1);

    const menuItems = [
        "F5 Distributed Cloud Services",
        "F5 Cloud Services",
        "F5 BIG-IP",
        "F5 Systems",
    ];

    const handleButtonClick = (index: number) => {
        setActiveButton(index);
    }

    return (
        <div>
            <Label onClick={onOpen} className="font-bold text-base cursor-pointer">PRODUCT</Label>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                size="full"
            >
                <ModalContent className="w-[1400px]">
                    {(onClose) => (
                        <ModalBody className="flex flex-row p-0">
                            <div className="flex-col justify-center items-center bg-sky-800 w-[400px] h-full">
                                <div className="flex justify-between items-end mt-12 border-b-2 w-full h-12">
                                    <p className="mb-2 ml-8 font-bold text-2xl text-white">PRODUCTS</p>
                                    <p className="mr-8 mb-2 text-white cursor-pointer">View all {">"} </p>
                                </div>

                                {menuItems.map((item, index) => (
                                    <MenuItem key={index} onClick={() => handleButtonClick(index)} isClicked={activeButton === index}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </div>

                            <div className="flex flex-row mt-12 h-full">
                                <div className="flex-col px-12 w-[600px]">
                                    <div>
                                        <AiOutlineCloudServer className="text-9xl" />
                                        <h1 className="font-bold text-4xl">F5 Distributed Cloud Services {'>'}</h1>
                                        <p className="pt-6 pb-8">Leverage a cloud-native environment to simplify app deployment, security, connectivity and operations.</p>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <MenuItemContent />

                                    </div>
                                </div>
                                <div className="flex-col bg-gray-400 w-[400px] h-full">

                                </div>
                            </div>
                        </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}