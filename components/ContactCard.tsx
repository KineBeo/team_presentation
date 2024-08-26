import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
} from "@nextui-org/react";

interface ContactCardProps {
  body_text: string;
  button_text: string;
  footer_text: string;
  cardWidth: string;
}
export default function ContactCard(props: ContactCardProps) {
    return (
        <Card className={`max-w-[${props.cardWidth}] hover:scale-105`}>
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
                <p className="text-black font-bold text-2xl mb-1 hover:underline">{props.body_text}</p>
                <div className="text-black text-lg mb-2">
                    <p className="">{props.footer_text}</p>
                </div>
                <div className="flex justify-center">
                    <Link href="#">
                        <Button
                            color="primary"
                            size="lg"
                            radius="sm"
                            className="hover:scale-105 duration-100 hover:underline text-white font-bold"
                        >
                            {props.button_text}
                        </Button>
                    </Link>
                </div>
            </CardBody>
        </Card>
    );
}
