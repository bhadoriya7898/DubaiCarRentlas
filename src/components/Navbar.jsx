import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClass = "text-[#C9A14A]";
  const normalClass = "text-white hover:text-[#C9A14A] transition";

  return (
    <header className="w-full bg-black sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Dubai Car Rentals"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-medium">
          
          {/* REAL ROUTE → NavLink */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            Home
          </NavLink>

          {/* HASH LINKS → Link */}
          <Link to="/#services" className={normalClass}>
            Services
          </Link>

          <Link to="/#about" className={normalClass}>
            About Us
          </Link>

          {/* REAL ROUTE → NavLink */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col items-center gap-6 py-6 text-lg font-medium">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <Link
              to="/#services"
              className={normalClass}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              to="/#about"
              className={normalClass}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
