import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface ServiceCardProps {
    body_text: string,
    footer_text: string, 
    icon: React.ReactNode
}
export default function ServiceCard(props: ServiceCardProps) {
  return (
      <Card className="max-w-[370px] hover:scale-105 duration-100">
        <CardHeader className="justify-center">
            {/* icon here */}
          <div className="flex gap-5 text-5xl">
            {/* <Avatar
              isBordered
              radius="sm"
              size="lg"
              src="https://nextui.org/avatars/avatar-1.png"
            /> */}
            {props.icon}
          </div>
        </CardHeader>
        <CardBody className="p-4 text-center">
          <p className="text-black font-bold mobile:text-lg tablet:text-lg text-2xl mb-1">
            {props.body_text}
          </p>
          <div className="text-black mobile:text-medium tablet:text-medium text-lg mb-2">
            <p className="">{props.footer_text}</p>
          </div>
        </CardBody>
      </Card>
  );
}
