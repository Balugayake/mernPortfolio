import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          <b>Hey, my name is Balu Gayake. I am a Full-Stack Developer</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Balugayake" target="black">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/balu_666254/" target="black">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/balu-gayake-b73a21197/"
          target="black"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
