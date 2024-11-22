import React, { useState } from "react";
import { navLinks } from "../RESOURCES/links";
import { Link, useLocation } from "react-router-dom";

export default function Header({ showContact, setShowContact }) {
  const [windowScroll, SetWindowScroll] = useState(false);
  window.onscroll = () => {
    document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
      ? SetWindowScroll(true)
      : SetWindowScroll(false);
  };
  const location = useLocation();
  const renderLinks = () => {
    return navLinks.map(({ name, path }) => (
      <Link
        key={path}
        to={path}
        className={`p-2 px-2.5  lg:px-4 rounded-full ${
          location.pathname === path
            ? windowScroll
              ? "bg-white"
              : "bg-white/40 backdrop-blur-md"
            : ""
        }`}
      >
        {name}
      </Link>
    ));
  };
  return (
    <header
      className={`flex z-[10] ${
        windowScroll ? "bg-white/40 backdrop-blur-md" : ""
      }  fixed items-center gap-1 py-3 px-4 rounded-full  w-max left-1/2 -translate-x-1/2 top-6 font-medium text-sm lg:text-[16px] text-main`}
    >
      {renderLinks()}
      <button
        onClick={() => setShowContact(!showContact)}
        className="p-2 px-2.5  lg:px-4 rounded-full cursor-pointer"
      >
        Contact
      </button>
    </header>
  );
}
