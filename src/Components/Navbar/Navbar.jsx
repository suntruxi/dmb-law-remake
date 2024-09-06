import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/dmb-logo-index.jpeg";
import menu_icon from "../../assets/menu-icon.png";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenu &&
        !event.target.closest(".menu-icon") &&
        !event.target.closest("nav ul")
      ) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);

  useEffect(() => {
    setMobileMenu(false);
  }, [location]);

  // Custom function to handle scroll navigation
  const handleScrollToSection = (section) => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to the home page first
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          offset: -260,
          duration: 500,
        });
      }, 100); // Adjust timeout as necessary for page load
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        offset: -260,
        duration: 500,
      });
    }
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button
            onClick={() => handleScrollToSection("propunere-container")}
            className="btn-transparent"
          >
            Servicii
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScrollToSection("about")}
            className="btn-transparent"
          >
            Despre Noi
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScrollToSection("echipa-container")}
            className="btn-transparent"
          >
            Echipa
          </button>
        </li>
        <li>
          <Link to="/arii-de-practica">Arii de Practica</Link>
        </li>
        <li>
          <Link to="/noutati">Noutati Legislative</Link>
        </li>
        <li>
          <button
            onClick={() => handleScrollToSection("testimonials")}
            className="btn-transparent"
          >
            Testimoniale
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="btn-transparent"
          >
            Contact
          </button>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
