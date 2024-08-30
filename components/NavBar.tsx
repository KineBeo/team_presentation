'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { TbBrandMinecraft } from "react-icons/tb";
import ProductMenu from "./menu/product/ProductMenu";
import ProductMenuMobile from "./menu/product/ProductMenuMobile";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [navBarState, setNavBarState] = React.useState('menu');

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
          <p className="font-bold text-2xl">5LABS</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="desktop:flex laptop:flex mini-laptop:flex gap-4 hidden mx-4 font-bold" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            SOLUTIONS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <ProductMenu />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            PARTNERS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            RESOURCES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            SUPPORT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            COMPANY
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            GET 5LABS
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" className="items-center mobile:hidden tablet:hidden" justify="end">
        <Input
          classNames={{
            base: "w-3/4 h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<FiSearch size={30} />}
          type="search"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href="#"
              size="lg"
            >
              {index === 1 ? <ProductMenuMobile /> : item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
