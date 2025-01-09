// import React from "react";
// import "./Footer.css";

// function Footer() {
//     return (
//         <footer className="footer-container">
//             <div className="footer">
//                 <p>
//                    <span className="footer-span">OnGrid Architects Portfolio</span>  © 2024 All rights reserved - Designed
//                     and Developed by <a 
//   href="https://www.linkedin.com/in/ali-haider-14565a27b" 
//   className="developer-anchor" 
//   target="_blank" 
//   rel="noopener noreferrer">
//   @Ali Haider
// </a>
//                     .</p>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

import React from 'react';
import { Instagram, Facebook, Youtube  } from 'lucide-react';

const Footer = () => {
  return (
    <div className=" flex justify-center align-center h-[100px] mx-auto mt-3.5  bg-gray-200">
      
        <div className="w-[98%] flex items-center  font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
          <div className="w-1/2">
          <img
          src="https://res.cloudinary.com/ongridarchitects/image/upload/v1734115790/OnGrid_Architects_-_Logo_Final_y0ccae.svg"
          alt="OnGird-logo"
          onClick={() => navigate("/")}
          // tabIndex="0"
          className="w-[50px] h-auto cursor-pointer"
        />
          </div>
         <div className=" flex w-1/2 justify-end  gap-1">
         <a href="" className=" hover:bg-gray-300 p-2 rounded-full">
          <Instagram />
          </a>
          <a href="" className="hover:bg-gray-300 p-2 rounded-full">
          <Facebook />
          </a>
          <a href="" className="hover:bg-gray-300 p-2 rounded-full">
          <Youtube  />
          </a>
         </div>
          
        </div>
      
    </div>
  );
};

export default Footer;
