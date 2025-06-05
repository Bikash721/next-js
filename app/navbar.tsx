"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo-ismt.png"; // Use your logo path

export default function CustomNavbar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <Image src={logo} width={40} height={40} alt="Logo" className="mr-3" />
        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
          ISMT
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/about">
          About
        </NavbarLink>
        <NavbarLink as={Link} href="/courses">
          Courses
        </NavbarLink>
        <NavbarLink as={Link} href="/campuses">
          Campuses
        </NavbarLink>
        <NavbarLink as={Link} href="/contact">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
