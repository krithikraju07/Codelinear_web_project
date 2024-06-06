import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-F9F9F9 py-4 px-8 flex justify-between items-center">
      <img src="/logo.png" alt="Logo" className="w-24 h-auto" />
      <div className="relative">
        <div
          className="cursor-pointer flex flex-col justify-between w-12 h-6"
          onClick={toggleDropdown}
        >
          <span
            className={`block h-0.5 bg-black transform transition duration-300 ease-in-out ${
              isDropdownOpen ? "rotate-90 translate-y-5" : "translate-y-1.5"
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-black transform transition duration-300 ease-in-out ${
              isDropdownOpen ? "rotate-90 translate-y-0" : "translate-y-1.5"
            }`}
          ></span>
          {isDropdownOpen && (
            <div className="absolute top-0 right-20 transition-opacity duration-900 ease-in-out opacity-100">
              <ul className="flex ">
                <li className="px-4 py-2 cursor-pointer animate-slideInFromRight">
                  <Link
                    to="about"
                    smooth={true}
                    duration={1500}
                    onClick={toggleDropdown}
                  >
                    About
                  </Link>
                </li>
                <li className="px-4 py-2 cursor-pointer animate-slideInFromRight">
                  <Link
                    to="services"
                    smooth={true}
                    duration={1500}
                    onClick={toggleDropdown}
                  >
                    Services
                  </Link>
                </li>
                <li className="px-4 py-2 cursor-pointer animate-slideInFromRight">
                  <Link
                    to="portfolio"
                    smooth={true}
                    duration={1500}
                    onClick={toggleDropdown}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="px-4 py-2 cursor-pointer animate-slideInFromRight">
                  <Link
                    to="industries"
                    smooth={true}
                    duration={1500}
                    onClick={toggleDropdown}
                  >
                    Industries
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
