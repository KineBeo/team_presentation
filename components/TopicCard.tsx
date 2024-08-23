import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

interface TopicCardProps {
  background: string;
  category: string;
  title: string;
  description: string;
}
export default function TopicCard(props: TopicCardProps) {
  return (
    <Card 
      className="max-w-[350px] m-4"
      radius="none"
      shadow="md"
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardHeader className="p-0">
        <Image
          shadow="sm"
          radius="none"
          width="100%"
          alt={props.title}
          className="w-full h-[200px] object-cover"
          src={props.background}
        />
      </CardHeader>
      <CardBody className="p-4">
        <p className="text-md font-semibold uppercase mb-1">{props.category}</p>
        <h3 className="font-bold text-xl mb-2">{props.title}</h3>
        <p className="text-default-500">{props.description}</p>
      </CardBody>
    </Card>
  );
}
