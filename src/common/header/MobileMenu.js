import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import Nav from './Nav';
import {
    FaFacebookF,
    FaLinkedinIn,
  //   FaBehance,
    FaPhone,
  //   FaFax,
    FaInstagram,
    FaYoutube,
  } from "react-icons/fa";

const MobileMenu = ({MobileHandler}) => {

    return (
        <div className="mobilemenu-popup">
            <div className="mobilemenu-inner">
                <div className="mobilemenu-header">
                    <div className="mobile-nav-logo">
                        <Link to={process.env.PUBLIC_URL + "/"}>
                            <img className="light-mode" src={process.env.PUBLIC_URL + "/images/logo-2.svg"} alt="Site Logo" />
                            <img className="dark-mode" src={process.env.PUBLIC_URL + "/images/logo-3.svg"} alt="Site Logo" />
                        </Link>
                    </div>
                    <button className="mobile-menu-close" onClick={MobileHandler} ><FaTimes /></button>
                </div>
                <div className="mobilemenu-body">
                    <Nav />
                    
                    <div className="col-lg-7 col-xl-6">
                  <div className="contact-info-wrap">
                    <div className="contact-inner">
                      <address className="address">
                        <span className="title">Contact Information</span>
                        <p>
                          Plot 21, Kaduyu Lane, Kiwatule <br /> Kampala, Uganda
                        </p>
                      </address>
                      <address className="address">
                        <span className="title">We're Available 24/7. Call Now.</span>
                        <a href="tel:0775408295" className="tel">
                          <FaPhone /> +256 775 408295
                        </a>
                        {/* <a href="tel:12125553333" className="tel"><FaFax /> (121) 255-53333</a> */}
                      </address>
                    </div>
                    <div className="contact-inner">
                      <h5 className="title">Find us here</h5>
                      <div className="contact-social-share">
                        <ul className="social-share list-style">
                          <li>
                            <a href="https://www.facebook.com/PendaAgency/">
                              <FaFacebookF />
                            </a>
                          </li>
      
                          <li>
                            <a href="https://ug.linkedin.com/company/pendaagency">
                              <FaLinkedinIn />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/pendaagency/">
                              <FaInstagram />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.youtube.com/channel/UCKEH2J6WhRLz9w7QB5foiuw">
                              <FaYoutube />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> 
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;