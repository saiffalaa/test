import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiArrowUpCircle } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import logo from "../assets/bigLogo.png";
export default function Footer() {
  return (
    <footer className="section-space footer-bg mt-5 pt-3">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="fs-1 text-white mb-5">
          <img src={logo} />
        </div>
        <div className="d-flex justify-content-around w-25 mb-5">
          <AiFillYoutube className="fs-5 text-white" />
          <FaLinkedinIn className="fs-5 text-white" />
          <FaInstagram className="fs-5 text-white" />
          <FaTwitter className="fs-5 text-white" />
        </div>
      </div>
      <FiArrowUpCircle className="fs-1 bg-yellow pos" />
      <TiMessages className="fs-1 bg-yellow pos2" />
    </footer>
  );
}
