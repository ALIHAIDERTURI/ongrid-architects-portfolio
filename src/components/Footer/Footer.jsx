import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer">
                <p>
                   <span className="footer-span">OnGrid Architects Portfolio</span>  © 2024 All rights reserved - Designed
                    and Developed by <a 
  href="https://www.linkedin.com/in/ali-haider-14565a27b" 
  className="developer-anchor" 
  target="_blank" 
  rel="noopener noreferrer">
  @Ali Haider
</a>
                    .</p>
            </div>
        </footer>
    );
}

export default Footer;
