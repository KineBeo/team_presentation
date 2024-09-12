"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";
import { TbBrandMinecraft } from "react-icons/tb";
import SolutionMenu from "./menu/solution/SolutionMenu";
import SolutionMenuMobile from "./menu/solution/SolutionMenuMobile";
import ProductMenu from "./menu/product/ProductMenu";
import ProductMenuMobile from "./menu/product/ProductMenuMobile";
import PartnerMenu from "./menu/partner/PartnerMenu";
import PartnerMenuMobile from "./menu/partner/PartnerMenuMobile";
import ResourcesMenu from "./menu/resources/ResourcesMenu";
import ResourcesMenuMobile from "./menu/resources/ResourcesMenuMobile";
import SupportMenu from "./menu/support/SupportMenu";
import SupportMenuMobile from "./menu/support/SupportMenuMobile";
import CompanyMenu from "./menu/company/CompanyMenu";
import GetInformationMenu from "./menu/getInfo/GetInformationMenu";
import CompanyMenuMobile from "./menu/company/CompanyMenuMobile";
import GetInformationMenuMobile from "./menu/getInfo/GetInformationMenuMobile";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Solutions",
    "Products",
    "Partners",
    "Resources",
    "Support",
    "Company",
    "Get F5",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="mobile:flex tablet:flex hidden"
        />
        <NavbarBrand className="gap-4">
          <TbBrandMinecraft size={30} />
          <p className="font-bold text-2xl">CYSLABS</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="desktop:flex laptop:flex gap-4 hidden mx-4 font-bold"
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="#">
            <SolutionMenu />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <ProductMenu />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <PartnerMenu />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <ResourcesMenu />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <SupportMenu />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <CompanyMenu />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <GetInformationMenu />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {index === 0 ? <SolutionMenuMobile /> : <> </>}
              {index === 1 ? <ProductMenuMobile /> : <></>}
              {index === 2 ? <PartnerMenuMobile /> : <></>}
              {index === 3 ? <ResourcesMenuMobile /> : <></>}
              {index === 4 ? <SupportMenuMobile /> : <></>}
              {index === 5 ? <CompanyMenuMobile /> : <></>}
              {index === 6 ? <GetInformationMenuMobile /> : <></>}
              {/* Hoang Xuan Truong focus on this place, just place Menu like I did */}
              {index > 6 ? item : <></>}
              {/* {item} */}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
