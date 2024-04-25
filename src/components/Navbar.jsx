import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { MENU_LINKS } from "../utils/data";
import Logo from "../../public/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); //always show menu on large screens
      } else {
        setIsOpen(false); // hide menu by default on small screens
      }
    };

    // set initial state based on screen size
    handleResize();

    // listen to resize events
    window.addEventListener("resize", handleResize);

    // cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/25 border border-highlight backdrop-blur-[10px] lg:m-5 mt-5 p-2 md:p-0">
        {/* Logo */}
        <img className="md:h-10 h-7 ml-6 " src={Logo} alt="logo" />

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-[#333] ml-auto focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <HiMenuAlt3 className="w-6 h-6" />
          )}
        </button>

        {/* Navigation Links */}
        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu-item"
              >
                {item.lable}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me Button*/}
        <Link to="contact" smooth spy offset="100">
          <button className="hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105">
            Hire Me
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
