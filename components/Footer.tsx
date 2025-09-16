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
    src="/images/icon.png"
    alt="GokilTech Logo"
    width={120}
    height={100}
    className="invert"
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
          onClick={scrollToTop}
          className="absolute right-8 -top-6 bg-gray-800 hover:bg-purple-600 text-white rounded-full p-3 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>

        {/* === MAIN FOOTER CONTENT === */}
        <div className="flex flex-col items-center text-center">
          <a href="/" className="mb-6">
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
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={`Follow us on ${social.icon.name}`}
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
                href="/"
                className="hover:text-white transition-colors duration-300"
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
