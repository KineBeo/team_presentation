import { ReactNode, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface MenuItemProps {
    children: ReactNode;
    onClick: () => void;
    isClicked: boolean;
}

export default function MenuItem({ children, onClick, isClicked }: MenuItemProps) {
    return (
        <div>
            {isClicked ? (
                <button className="flex items-center bg-white w-full h-12 text-sky-800 hover:underline cursor-pointer" onClick={() => { onClick() }}>
                    <p className="mt-2 ml-8 w-[300px] h-8 text-left text-sky-800 group-hover:underline">
                        {children}
                    </p>
                    <IoIosArrowForward className="text-2xl text-sky-800" />
                </button>
            ) : (
                <button className="flex items-center bg-sky-800 w-full h-12 text-white hover:underline cursor-pointer" onClick={() => { onClick() }}>
                    <p className="ml-8 w-[300px] h-8 text-left text-white group-hover:underline">
                        {children}
                    </p>
                    <IoIosArrowForward className="text-2xl text-white" />
                </button>
            )}
        </div>
    );
}

