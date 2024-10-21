import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import wagLogo from "../assets/images/logo-wag-boas-acoes.png";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-bold transition-colors duration-200 ${
      isActive
        ? "underline underline-offset-8"
        : "font-semibold no-underline hover:text-gray-300"
    }`;

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/quem-somos", text: "Quem Somos" },
    { to: "/como-funciona", text: "Como Funciona" },
    { to: "/como-surgiu", text: "Como Surgiu" },
    { to: "/contato", text: "Contato" },
  ];

  return (
    <nav className="bg-custom-blue-2 md:bg-custom-blue p-4">
      <div className="container mx-auto">
        <div className="flex justify-between md:justify-center items-center gap-8 text-white">
          <NavLink to="/" className="flex items-center">
            <img
              className="w-24"
              src={wagLogo}
              alt="Wag Logo"
              onClick={() => setIsOpen(false)}
            />
          </NavLink>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.text}
              </NavLink>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none transition-transform duration-200 ease-in-out"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-2 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`${linkClass} block py-2 text-end text-white font-semibold`}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
