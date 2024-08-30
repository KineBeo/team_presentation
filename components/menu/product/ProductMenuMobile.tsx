import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import React from "react";

export default function MenuItemContent() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    function handleButtonClick() {
        console.log("Product clicked");
        onOpen();
    }

    return (


        <div>
            <div onClick={handleButtonClick}>
                Product
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full" placement="top">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}