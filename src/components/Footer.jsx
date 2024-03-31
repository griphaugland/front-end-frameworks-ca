import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className="secondary-bg min-h-36 flex items-center">
      <div className="flex justify-center items-center h-16 gap-4 text-gray-800">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FacebookIcon className="mx-2" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <InstagramIcon className="mx-2" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <LinkedInIcon className="mx-2" />
        </a>
      </div>
      <div className="flex justify-center items-center h-16  text-gray-800">
        <p className="text-center">All rights reserved</p>
        <p className="mx-2">|</p>
        <p>© 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
