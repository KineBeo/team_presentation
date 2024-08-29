import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, NavbarItem, useDisclosure } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import React, { useState } from 'react';


type ButtonId = 'solutionArea' | 'industry' | 'cloudPartners';
export default function SolutionMenu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedButton, setSelectedButton] = useState<ButtonId | null>(null);

    // Hàm xử lý sự kiện khi nút được nhấn
    const handleButtonClick = (buttonId: ButtonId) => {
        setSelectedButton(buttonId);
    };

    return (
        <div>
            <NavbarItem onClick={onOpen}>
                SOLUTIONS
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
                            <div className="flex flex-row justify-center items-center w-full h-full space-x-6">
                                <div className="flex flex-col bg-sky-800 w-[400px] h-full pt-4">
                                    <div className="flex justify-between items-end mt-8 border-b-2 w-full h-12">
                                        <p className="mb-2 ml-8 font-bold text-2xl text-white">SOLUTIONS</p>
                                        <p className="mr-8 mb-2 text-white cursor-pointer">View all {">"}</p>
                                    </div>
                                    <button
                                        onClick={() => handleButtonClick('solutionArea')}
                                        className={`flex items-center pt-4 h-12 ${selectedButton === 'solutionArea' ? 'bg-white text-sky-800' : 'text-white'} hover:underline cursor-pointer`}
                                    >
                                        <p className="ml-8 w-[300px] h-8 text-left group-hover:underline">
                                            By Solution Area
                                        </p>
                                        <IoIosArrowForward className="text-2xl" />
                                    </button>
                                    <button
                                        onClick={() => handleButtonClick('industry')}
                                        className={`flex items-center pt-4 h-12 ${selectedButton === 'industry' ? 'bg-white text-sky-800' : 'text-white'} hover:underline cursor-pointer`}
                                    >
                                        <p className="ml-8 w-[300px] h-8 text-left group-hover:underline">
                                            By Industry
                                        </p>
                                        <IoIosArrowForward className="text-2xl" />
                                    </button>
                                    <button
                                        onClick={() => handleButtonClick('cloudPartners')}
                                        className={`flex items-center pt-4 h-12 ${selectedButton === 'cloudPartners' ? 'bg-white text-sky-800' : 'text-white'} hover:underline cursor-pointer`}
                                    >
                                        <p className="ml-8 w-[300px] h-8 text-left group-hover:underline">
                                            By Cloud Partners
                                        </p>
                                        <IoIosArrowForward className="text-2xl" />
                                    </button>
                                </div>

                                <div className="flex flex-col items-start p-12 space-y-6  h-full ">
                                    <div className=" flex items-center justify-center ">
                                        <IoSettingsOutline className=" w-24 h-24" />
                                    </div>
                                    <div className="text-start">
                                        <h1 className="text-2xl font-bold whitespace-pre-line ">
                                            Application Security and  <br />Delivery Solutions
                                        </h1>
                                        <p className="text-sm text-gray-600 pt-6">Explore F5 solution areas to find products that will address your specific technical challenges.</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
                                        <div className="py-1  rounded-lg">
                                            <a href="#" className=" text-sm text-blue-500 font-semibold underline">Web Application and API Protection</a>
                                            <p className="text-sm text-gray-700 mt-2">Reduce risk and complexity so you can continue moving your business forward.</p>
                                        </div>
                                        <div className="py-1  rounded-lg">
                                            <a href="#" className=" text-sm text-blue-500 font-semibold underline">Secure Multicloud Networking</a>
                                            <p className="text-sm text-gray-700 mt-2">Connect, secure, and manage apps and APIs across multicloud and hybrid architectures.</p>
                                        </div>
                                        <div className="py-1  rounded-lg">
                                            <a href="#" className="text-sm text-blue-500 font-semibold underline">Fraud and Abuse Prevention</a>
                                            <p className="text-sm text-gray-700 mt-2">Protect against fraud while keeping apps available for legitimate users.</p>
                                        </div>
                                        <div className="py-1  rounded-lg">
                                            <a href="#" className="text-sm text-blue-500 font-semibold underline">Application and Network Performance</a>
                                            <p className="text-sm text-gray-700 mt-2">Increase availability and performance of your apps to optimize user experience.</p>
                                        </div>
                                        <div className="py-1  rounded-lg">
                                            <a href="#" className="text-sm text-blue-500 font-semibold underline">Zero Trust Security</a>
                                            <p className="text-sm text-gray-700 mt-2">Prevent unauthorized access to your networks, applications, and APIs.</p>
                                        </div>
                                        <div className="py-1  rounded-lg">
                                            <a href="#" className="text-sm text-blue-500 font-semibold underline">Modern Application Delivery</a>
                                            <p className="text-sm text-gray-700 mt-2">Meet customer demands and improve digital experiences.</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col space-y-6 pt-12 mb-12 mr-16 w-[400px] pr-16 justify-start h-full">

                                    <div className="bg-gray-100 p-4  ">
                                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                                        <ul className="space-y-2">
                                            <li><a href="#" className="text-sm text-blue-500 hover:underline underline">Customer Case Studies</a></li>
                                            <li><a href="#" className="text-sm text-blue-500 hover:underline underline">Product Datasheets</a></li>
                                            <li><a href="#" className="text-sm text-blue-500 hover:underline underline">Professional Services</a></li>
                                            <li><a href="#" className="text-sm text-blue-500 hover:underline underline">Software Download</a></li>
                                            <li><a href="#" className="text-sm text-blue-500 hover:underline underline">View All F5 Resources</a></li>
                                        </ul>
                                    </div>

                                    <div className="flex flex-col bg-black p-12 pb-24 pr-16 text-white h-full items-center justify-center">
                                        <div className="mb-4">
                                            <img src="/images/home-solu-power-and-protect.png" alt="Description Image" className="w-full rounded-lg" />
                                        </div>
                                        <p className="mb-4">Power and protect AI-based apps from the data center to the edge.</p>
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                            See how
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </div >
    );
}