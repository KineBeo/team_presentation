import React from "react";
import FooterAccordion from "./FooterAccordion";
import { Divider } from "@nextui-org/react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandDiscord } from "react-icons/tb";

export default function Footer() {
  return (
      <div className="bg-[#222222] text-white mt-8 pb-4">
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
              F5&apos;s portfolio of automation, security, performance, and
              insight capabilities empowers our customers to create, secure, and
              operate adaptive applications that reduce costs, improve
              operations, and better protect users. Learn more
            </div>
          </div>
          <div className="mt-8">
            <FooterAccordion />
          </div>
          <div className="m-4 flex flex-col justify-center text-center">
            <div className="font-bold text-lg mb-4">CONNECT WITH US</div>
            <div className="flex justify-center space-x-4 mb-8 text-3xl">
              <RiTwitterXFill />
              <FaLinkedin />
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <TbBrandDiscord />
            </div>
          </div>
          <div className="m-8 text-sm">
            <div className="mb-4 flex justify-center gap-4">
              {/* <img
                src="/path-to-f5-logo.png"
                alt="F5 Logo"
                className="h-8 w-8 mr-2"
              /> */} <div>nigga</div>
              <p>©2024 F5, Inc. All rights reserved.</p>
            </div>
            <div className="space-x-4 flex justify-center font-semibold">
              <a href="#" className="hover:underline">
                Trademarks
              </a>
              <a href="#" className="hover:underline">
                Policies
              </a>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </div>
            <div className="mt-2 space-x-2 flex justify-center text-center font-semibold">
              <a href="#" className="hover:underline">
                California Privacy
              </a>
              <a href="#" className="hover:underline">
                Do Not Sell My Personal Information
              </a>
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

