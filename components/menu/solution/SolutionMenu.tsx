import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { Label } from "flowbite-react";
import MenuItem from "../MenuItem";
import By_Solution_Area from "./By_Solution_Area";
import By_Industry from "./By_Industry";
import By_Cloud_Partners from "./By_Cloud_Partners";


export default function SolutionMenu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [activeButton, setActiveButton] = useState(0);

    const menuItems = [
        "By Solution Area",
        "By Industry",
        "By Cloud Partners",
    ];

    const handleButtonClick = (index: number) => {
        setActiveButton(index);
    }

    return (
        <div>
            <Label onClick={onOpen} className="font-bold text-base cursor-pointer">SOLUTION</Label>
            <Modal
                className="desktop:flex laptop:flex mini-laptop:flex hidden"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                size="full"
            >
                <ModalContent className="p-0 w-[1400px] h-full">
                    {(onClose) => (
                        <ModalBody className="flex flex-row p-0 h-full"> {/* Ensure ModalBody is full height */}
                            <div className="mini-laptop:w-[300px] flex-col justify-center items-center bg-sky-800 w-[400px] h-full">
                                <div className="flex justify-between items-end mt-12 border-b-2 w-full h-12">
                                    <p className="mb-2 ml-8 font-bold text-2xl text-white">SOLUTION</p>
                                    <p className="mini-laptop:mr-4 mr-8 mb-2 text-white cursor-pointer">View all {">"} </p>
                                </div>

                                {menuItems.map((item, index) => (
                                    <MenuItem key={index} onClick={() => handleButtonClick(index)} isClicked={activeButton === index}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </div>
                            <div className="flex-grow h-full overflow-auto">
                                {activeButton === 0 && <By_Solution_Area />}
                                {activeButton === 1 && <By_Industry />}
                                {activeButton === 2 && <By_Cloud_Partners />}
                            </div>
                        </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}