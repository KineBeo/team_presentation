'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

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
    // Responsive here
    <Navbar onMenuOpenChange={setIsMenuOpen} className="mt-16">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="mobile:flex tablet:flex hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-2xl">F5</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="
      hidden 
      mini-laptop:flex
      laptop:flex
      desktop:flex
      gap-4 
      font-bold" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            SOLUTIONS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            PRODUCTS
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
            GET F5
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
