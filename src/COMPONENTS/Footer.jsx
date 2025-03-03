import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../RESOURCES/links";
import { BsEnvelope, BsInstagram, BsPhone, BsWhatsapp } from "react-icons/bs";
import { LOGO } from "../ASSETS/IMAGES/GRAPHICS/graphics";


export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row p-6 lg:py-10 lg:px-32 gap-10">
      <section className="flex w-full flex-col justify-between gap-6 items-start">
        <img src={LOGO} alt="Icon" className="w-[150px] lg:w-[200px]" />
        <span className="text-sm text-main font-medium">
          © cre8tiveForge 2024. All Rights Reserved.
        </span>
      </section>

      <section className="w-full flex flex-col gap-6 items-start">
        <span className="text-lg font-medium text-main font-main">
          QUICK LINKS
        </span>
        <div className="flex flex-col gap-3 items-start">
          {navLinks.map((link) => (
            <Link
              to={link.path}
              key={link.id}
              className="font-medium relative footerLink text-sm lg:text-[16px] text-main"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col gap-6 items-start">
        <span className="text-lg font-medium text-main font-main">
          CONTACT US
        </span>
        <main className="flex flex-col gap-3 items-start">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+2349016965069"
            className="flex items-center gap-2 text-main"
          >
            <span className="h-7 w-7 rounded-full flex items-center justify-center text-white bg-main">
              <BsPhone className="text-sm" />
            </span>
            <span className="text-[16px]">Phone:</span>
            <span className="text-black text-[16px]">+234 901 696 5069</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:business.cre8tiveforge@gmail.com"
            className="flex items-center gap-2 text-main"
          >
            <span className="h-7 w-7 rounded-full flex items-center justify-center text-white bg-main">
              <BsEnvelope className="text-sm" />
            </span>
            <span className="text-[16px]">Email:</span>
            <span className="text-black text-[16px]">
              business.cre8tiveforge@gmail.com
            </span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+2349016965069"
            className="flex items-center gap-2 text-main"
          >
            <span className="h-7 w-7 rounded-full flex items-center justify-center text-white bg-main">
              <BsWhatsapp className="text-sm" />
            </span>
            <span className="text-[16px]">WhatsApp:</span>
            <span className="text-black text-[16px]">wa.me/cre8tiveforge</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/cre8tiveforge"
            className="flex items-center gap-2 text-main"
          >
            <span className="h-7 w-7 rounded-full flex items-center justify-center text-white bg-main">
              <BsInstagram className="text-sm" />
            </span>
            <span className="text-[16px]">Instagram:</span>
            <span className="text-black text-[16px]">@cre8tiveforge</span>
          </a>
        </main>
      </section>
    </footer>
  );
}
