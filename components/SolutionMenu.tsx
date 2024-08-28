
import { Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, DropdownSection, Textarea } from "@nextui-org/react";
export default function SolutionMenu() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                >
                    Solution
                </Button>
            </DropdownTrigger>

            <DropdownMenu
                aria-label="Solutions"
                classNames={{ list: "grid grid-cols-3 w-[1200px]  h-[600px] gap-3 text-center" }} // slots
                itemClasses={{
                    base: "gap-4"
                }}
            >
                <DropdownSection title="SOUTIONS" className="w-[300px] bg-sky-700" >
                    <DropdownItem
                        key="autoscaling">
                        By Solution Area
                    </DropdownItem>

                    <DropdownItem
                        key="autoscaling">
                        By Industry
                    </DropdownItem>

                    <DropdownItem
                        key="autoscaling">
                        By Cloud Patterns
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection >
                    <DropdownItem isReadOnly className="grid grid-rows-3 w-[500px]"  >
                        <div>
                            Application Security and Delivery Solutions
                        </div>
                        <div>
                            Explore F5 solution areas to find products that will address your specific technical challenges.
                        </div>
                        <div className=" grid-cols-2 w-[400px] h-[600px]">
                            <div >
                                <p >
                                    Web Application and API Protection
                                    Reduce risk and complexity so you can continue moving your business forward.
                                </p>
                                <p>
                                    Fraud and Abuse Prevention
                                    Protect against fraud while keeping apps available for legitimate users.
                                </p>
                                <p>
                                    Zero Trust Security
                                    Prevent unauthorized access to your networks, applications, and APIs.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Secure Multicloud Networking
                                    Connect, secure, and manage apps and APIs across multicloud and hybrid architectures.
                                </p>
                                <p>
                                    Application and Network Performance
                                    Increase availability and performance of your apps to optimize user experience.
                                </p>
                                <p>
                                    Modern Application Delivery
                                    Meet customer demands and improve digital experiences.
                                </p>
                            </div>
                        </div>
                    </DropdownItem>
                </DropdownSection>

                <DropdownSection title="SOUTIONS" className="w-[500px] bg-white  inset-y-0 right-0" >
                    <DropdownItem
                        key="autoscaling">
                        By Solution Area
                    </DropdownItem>

                    <DropdownItem
                        key="autoscaling">
                        By Industry
                    </DropdownItem>

                    <DropdownItem
                        key="autoscaling">
                        By Cloud Patterns
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown >

    );
}