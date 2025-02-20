"use client";
import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import Logo from "../../../assets/Logo.jpeg";
import Link from "next/link";

import { FaAngleDown, FaAngleUp, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navbarHeight = 80;
  const navbarHeight2 = 80;
  const navbarHeight3 = 165;
  const navbarHeightservicos = 170;

  const navbarHeightEmpresa = 180;
  const navbarHeightEmpresa2 = 180;

  const navbarHeightEContato = 180;



  useEffect(() => {
    const querySplit = window.location.href.split("?q=");
    const query = querySplit.length > 1 ? querySplit[1] : "";

    const section = document.getElementById(query);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
    const handleScroll = () => {
      const sections = [
        "home",
        "produtos",
        "servicos",
        "contato",
        "quem-somos",
      ];

      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          window.scrollY >= element.offsetTop - navbarHeight - 150
        ) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - 120, behavior: "smooth" });
    }
  };

  const handleProductsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    setTimeout(() => {
      closeDropdown();
    }, 900); // Ajuste o tempo conforme necessário
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <header className="bg-white text-black fixed top-0 w-full z-10 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 ">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className=""
        >
          <Image
            src={Logo}
            alt="Logo"
            width={250}
            height={250}
            className="w-40 h-auto"
            priority
          />
         
        </ScrollLink>
       

        <button
          className="mr-10 lg:hidden text-gray-700 focus:outline-none"
          aria-label="Abrir menu de navegação"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <nav className="hidden lg:flex space-x-10 text-[20px] font-bold">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            className={`hover:text-gray-400 cursor-pointer ${
              activeSection === "home" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Home
          </ScrollLink>
          <div
            className="relative"
            ref={dropdownRef}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="hover:text-gray-400 flex items-center border-b-4 border-transparent"
              onMouseEnter={handleMouseEnter}
            >
              Produtos
            </button>

          
          </div>

          <ScrollLink
            to="servicos"
            smooth={true}
            duration={500}
            offset={-navbarHeightservicos}
            className={`hover:text-gray-400 cursor-pointer ${
              activeSection === "servicos" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Serviços
          </ScrollLink>

          <ScrollLink
            to="contato"
            smooth={true}
            duration={500}
            offset={-navbarHeightEContato}
            className={`hover:text-gray-400 cursor-pointer ${
              activeSection === "contato" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Contato
          </ScrollLink>
          <ScrollLink
            to="quem-somos"
            smooth={true}
            duration={500}
            offset={-navbarHeightEmpresa}
            className={`hover:text-gray-400 cursor-pointer ${
              activeSection === "quem-somos" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Empresa
          </ScrollLink>

          <a
            href="https://wa.me/5511980976575"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 text-black rounded-full hover:bg-green-600 hover:text-white"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Enviar Cotação</span>
          </a>
        </nav>
      </div>

   
   
    </header>
  );
};

export default Navbar;