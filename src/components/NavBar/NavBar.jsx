import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
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
    <nav 
      className={`h-[50px] w-full flex justify-between items-center  
        p-[7px] px-[1%] bg-white/80 backdrop-blur-md  
         ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-[0_2px_5px_rgba(0,0,0,0.2)] ' : 'transition-all duration-1000 ease-in-out'}
        transition-[background-color_0.8s_ease,backdrop-filter_0.3s_ease,box-shadow_0.3s_ease]
       
        max-[768px]:px-4 max-[768px]:rounded-none sticky top-0 z-[99]`}
        
    >
      <div className="h-full max-[768px]:flex max-[768px]:items-center">
        <img
          src="https://res.cloudinary.com/ongridarchitects/image/upload/v1734115790/OnGrid_Architects_-_Logo_Final_y0ccae.svg"
          alt="OnGird-logo"
          onClick={() => navigate("/")}
          tabIndex="0"
          className="h-full cursor-pointer max-[768px]:w-[50px] max-[768px]:h-auto"
        />
      </div>

      <div 
        className="hidden flex-col justify-center gap-1 cursor-pointer max-[768px]:flex 
          active:bg-transparent focus:bg-transparent"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <CiMenuFries size={25} style={{ strokeWidth: 2 }} />
        ) : (
          <CiMenuBurger size={25} style={{ strokeWidth: 2 }} />
        )}
      </div>

      <div 
        className={`flex gap-5 
          max-[768px]:hidden max-[768px]:flex-col max-[768px]:absolute max-[768px]:left-0 max-[768px]:w-full 
          max-[768px]:bg-white/80 max-[768px]:shadow-[0_2px_5px_rgba(0,0,0,0.2)] max-[768px]:p-[10px] 
          max-[768px]:rounded-lg max-[768px]:opacity-0 max-[768px]:-translate-y-[50px] max-[768px]:top-[-200px]
          max-[768px]:backdrop-blur-sm max-[768px]:transition-[transform_0.3s_ease,opacity_0.4s_ease]
          ${menuOpen && 'max-[768px]:!flex max-[768px]:opacity-100 max-[768px]:translate-y-0 max-[768px]:top-[50px] max-[768px]:rounded-none'}`}
      >
        <Link 
          className="text-black no-underline text-[0.9rem] font-semibold cursor-pointer font-system 
            rounded-[5px] p-[7px] transition-[0.1s] ease-in hover:text-[#101010] hover:bg-[#cccccc]
            max-[768px]:text-[0.85rem]"
          to="/projects" 
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link 
          className="text-black no-underline text-[0.9rem] font-semibold cursor-pointer font-system 
            rounded-[5px] p-[7px] transition-[0.1s] ease-in hover:text-[#101010] hover:bg-[#cccccc]
            max-[768px]:text-[0.85rem]"
          to="/about" 
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link 
          className="text-red-600 no-underline text-base font-black cursor-pointer font-system 
            rounded-[5px] p-[7px] transition-[0.1s] ease-in hover:text-[#101010] hover:bg-[#cccccc]
            max-[768px]:text-[0.85rem]"
          to="/team" 
          onClick={toggleMenu}
        >
          Who We Are 
        </Link>
        <Link 
          className="text-black no-underline text-[0.9rem] font-semibold cursor-pointer font-system 
            rounded-[5px] p-[7px] transition-[0.1s] ease-in hover:text-[#101010] hover:bg-[#cccccc]
            max-[768px]:text-[0.85rem]"
          to="/contact" 
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;