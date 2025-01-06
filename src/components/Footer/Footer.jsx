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

const Footer = () => {
  return (
    <div className="w-[98%] mx-auto mt-3.5 mb-2 bg-white">
      <div className="w-full mx-auto h-fit leading-10">
        <p className="text-left text-xs text-black select-none font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif]">
          <span className="font-black">OnGrid Architects Portfolio</span> © 2024 
          All rights reserved - Designed and Developed by{' '}
          <a 
            href="#" 
            className="text-[#4A90E2] no-underline text-[0.8rem] relative transition-all duration-300 ease-in-out hover:after:w-full after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-[#4A90E2] after:transition-[width] after:duration-300 after:ease-in-out"
          >
            @Ali Haider
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
