import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Nav from "./Nav";
import {
  FaFacebookF,
  FaLinkedinIn,
  //   FaBehance,
  FaPhone,
  //   FaFax,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const MobileMenu = ({ MobileHandler }) => {
  return (
    <div className="mobilemenu-popup">
      <div className="mobilemenu-inner">
        <div className="mobilemenu-header">
          <div className="mobile-nav-logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
              <img
                className="light-mode"
                src={process.env.PUBLIC_URL + "/images/logo-2.svg"}
                alt="Site Logo"
              />
              <img
                className="dark-mode"
                src={process.env.PUBLIC_URL + "/images/logo-3.svg"}
                alt="Site Logo"
              />
            </Link>
          </div>
          <button className="mobile-menu-close" onClick={MobileHandler}>
            <FaTimes />
          </button>
        </div>
       
       
        <div className="mobilemenu-body">
        <nav className="mainmenu-nav">
          <ul className="mainmenu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/services"}>Services</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/our-projects"}>
                Portfolio{" "}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/team"}>Team</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/contact"} className="">Contact</Link>
            </li>
          </ul>
          </nav>
          {/* <Nav /> */}


          {/* <p className="text-green-500">Edgar Ampiire </p> */}

          
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
