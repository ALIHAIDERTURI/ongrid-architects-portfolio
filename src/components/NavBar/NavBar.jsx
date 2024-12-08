import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { CiMenuBurger, CiMenuFries  } from "react-icons/ci";
import { useEffect } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleScroll = () => {
    if (window.scrollY > 10) { // Adjust the value as needed
        setScrolled(true);
    } else {
        setScrolled(false);
    }
};

useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img
        //   src="/images/LOGO-2-B.png"
          alt="OnGird-logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
      {menuOpen ? (
  <CiMenuFries size={25} style={{ strokeWidth: 2 }} />
) : (
  <CiMenuBurger size={25} style={{strokeWidth: 2 }} />
)}
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <Link className="nav-bar-link" to="/projects" onClick={toggleMenu}>
          Projects
        </Link>
        <Link className="nav-bar-link ai" to="/ai" onClick={toggleMenu}>
          Ai
        </Link>
        <Link className="nav-bar-link" to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link className="nav-bar-link" to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
