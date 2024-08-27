import React from "react";
import FooterAccordion from "./FooterAccordion";
import { Divider } from "@nextui-org/react";
export default function Footer() {
  return (
    <div className="h-[1200px] text-white mt-16">
      <div className="bg-[#222222] h-full">
        <div className="">
          <div className="flex flex-row h-full">
            <div className="bg-orange-400 flex-1">.</div>
            <div className="bg-red-500 flex-1"> </div>
            <div className="bg-purple-500 flex-1"></div>
            <div className="bg-blue-500 flex-1"></div>
            <div className="bg-purple-800 flex-1"></div>
          </div>

          <div className="text-center font-bold p-6 tablet:p-8 mini-laptop:p-10 laptop:p-12 desktop:p-14">
            <div className="text-2xl p-4 m-4">
              Secure and Deliver Extraordinary Digital Experiences
            </div>
            <div className="text-xl p-4 m-4 font-bold tablet:p-8 mini-laptop:p-10 laptop:p-12 desktop:p-14">
              F5&apos;s portfolio of automation, security, performance, and insight
              capabilities empowers our customers to create, secure, and operate
              adaptive applications that reduce costs, improve operations, and
              better protect users. Learn more
            </div>
          </div>
          <div>
            <FooterAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}
