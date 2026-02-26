"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { Image } from "@heroui/image";

const Logo = () => (
  <Image
    alt="GokilTech Logo"
    className="invert"
    height={100}
    src="/images/icon.png"
    width={120}
  />
);
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "/" },
    { icon: FaTwitter, href: "/" },
    { icon: FaYoutube, href: "/" },
    { icon: FaLinkedinIn, href: "/" },
    { icon: FaInstagram, href: "/" },
  ];

  const footerNavLinks = ["Home", "About", "Portfolios", "Contact"];

  return (
    <footer className="bg-black text-gray-400 relative">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* === SCROLL TO TOP BUTTON === */}
        <button
          aria-label="Scroll to top"
          className="absolute right-8 -top-6 bg-gray-800 hover:bg-purple-600 text-white rounded-full p-3 transition-colors duration-300"
          onClick={scrollToTop}
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>

        {/* === MAIN FOOTER CONTENT === */}
        <div className="flex flex-col items-center text-center">
          <a className="mb-6" href="/">
            <Logo />
          </a>
          <p className="font-semibold text-white">Gokiltech</p>{" "}
          {/* Nama perusahaan juga diubah */}
          <p className="mt-2 max-w-sm">
            Jl Cipedak Raya RT 07/09, Kel. Jagakarsa Kec. Srengseng Sawah,
            Jakarta 12630, Indonesia
          </p>
          <p className="mt-2">Phone: +62-823-1273-0909</p>
          <p>Email: info@gokiltech.com</p>
          {/* === SOCIAL MEDIA ICONS === */}
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                aria-label={`Follow us on ${social.icon.name}`}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                href={social.href}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* === SEPARATOR LINE === */}
        <hr className="border-gray-800 my-8" />

        {/* === BOTTOM BAR === */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 sm:mb-0">
            {footerNavLinks.map((link) => (
              <a
                key={link}
                className="hover:text-white transition-colors duration-300"
                href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
              >
                {link}
              </a>
            ))}
          </nav>
          <p className="text-center sm:text-right">
            Copyright © {new Date().getFullYear()} Gokiltech. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
