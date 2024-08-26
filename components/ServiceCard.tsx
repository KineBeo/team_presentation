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
    cardWidth: string
}
export default function ServiceCard(props: ServiceCardProps) {
  return (
      <Card className={`max-w-[${props.cardWidth}]`}>
        <CardHeader className="justify-center">
            {/* icon here */}
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="sm"
              size="lg"
              src="https://nextui.org/avatars/avatar-1.png"
            />
          </div>
        </CardHeader>
        <CardBody className="p-4 text-center">
          <p className="text-black font-bold text-2xl mb-1">
            {props.body_text}
          </p>
          <div className="text-black text-lg mb-2">
            <p className="">{props.footer_text}</p>
          </div>
        </CardBody>
      </Card>
  );
}
