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
    footer_text: string
}
export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div>
      <Card className="max-w-[340px]">
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
        <CardBody className="px-3 py-0 text-small text-default-400 text-center">
          <p className="text-black font-bold text-2xl ">
            {props.body_text}
          </p>
        </CardBody>
        <CardFooter className="gap-3 flex justify-center text-center">
          <div className="text-black text-lg">
            <p className="">{props.footer_text}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
