"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const offset = 60;
    const element = document.querySelector(targetId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-between items-center px-[32px] py-[12px] border-b-[#2B7B67] border-b-2 sticky top-0 bg-white shadow-md z-50 font-poppins">
      <Image src={"/Images/logo.png"} width={120} height={120} alt="Logo" />
      <div className="hidden lg:flex gap-8">
        <Link
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="font-medium text-[#2B7B67] cursor-pointer"
        >
          Home
        </Link>
        <Link
          href="#who-are-we"
          onClick={(e) => handleScroll(e, "#who-are-we")}
          className="font-medium cursor-pointer"
        >
          Who Are We
        </Link>
        <Link
          href="#services"
          onClick={(e) => handleScroll(e, "#services")}
          className="font-medium cursor-pointer"
        >
          Services
        </Link>
        <Link
          href="#why-us"
          onClick={(e) => handleScroll(e, "#why-us")}
          className="font-medium cursor-pointer"
        >
          Why Us
        </Link>
        <Link
          href="#testimonials"
          onClick={(e) => handleScroll(e, "#testimonials")}
          className="font-medium cursor-pointer"
        >
          Testimonials
        </Link>
        <Link
          href="#contact-us"
          onClick={(e) => handleScroll(e, "#contact-us")}
          className="font-medium cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
