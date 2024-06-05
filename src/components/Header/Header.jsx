import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-30 py-3">
      <div className="py-[20px] bg-cyan-950 text-white font-mono rounded-2xl shadow-2xl">
        <div className="flex justify-between items-center px-5 md:px-9">
          <Link className="text-bold text-xl md:text-2xl font-bold">
            A.Studio
          </Link>
          <nav className="hidden md:flex justify-evenly w-full text-lg md:text-[20px]">
            <NavLink className="tracking-[2px] mx-2" to="/">
              Главная
            </NavLink>
            <NavLink className="tracking-[2px] mx-2" to="/titles">
              Список аниме
            </NavLink>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              id="menu-btn"
              className="block focus:outline-none"
              onClick={mobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden flex flex-col items-center bg-cyan-950 text-white font-mono rounded-2xl shadow-2xl py-2"
        >
          <NavLink className="tracking-[2px] py-2" to="/" onClick={mobileMenu}>
            Главная
          </NavLink>
          <NavLink
            className="tracking-[2px] py-2"
            to="/titles"
            onClick={mobileMenu}
          >
            Список аниме
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default Header;
